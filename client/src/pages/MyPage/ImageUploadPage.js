import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import Navbar from "components/common/Navbar";
import { useStyles } from "styles/ImageUploadPageStyles";
import TextTitleComponent from "components/ImageUploadPage/TextTitleComponent";
import UploadImageComponent from "components/ImageUploadPage/UploadImageComponent";
import { useHistory } from "react-router-dom";

import { useSetRecoilState, useRecoilValue } from "recoil";
import { featureState, uploadState } from "recoil/atoms";

export default function ImageUploadPage({ match }) {
  const classes = useStyles();
  const user_id = match.params.user_id;
  const [imageData, setImageData] = useState([]);
  const [imageList, setImageList] = useState(null);
  const setFeature = useSetRecoilState(featureState);
  const [username, setUsername] = useState("");
  const upload = useRecoilValue(uploadState);

  // url을 통한 다른 사용자 접근 통제 필요
  const history = useHistory();
  if (localStorage.getItem("jwt") === null) {
    history.push("/login");
  }

  // get User Image 리스트
  useEffect(async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/closet/`, {
      headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
    });

    setFeature(response.data);
    setImageData(response.data);
    setUsername(localStorage.getItem("username") + "님");
  }, [upload]);

  // User Image 데이터 기준으로 컴포넌트 생성
  useEffect(() => {
    if (imageData) {
      setImageList(
        imageData.map((data, idx) => (
          <UploadImageComponent
            src={data.dress_img.slice(0, 74) + ":8000" + data.dress_img.slice(74)}
            inputtype="image"
            user_id={user_id}
            id={idx}
            pk={data.pk}
          />
        )),
      );
    }
  }, [imageData]);

  return (
    <Mobile>
      <Box>
        <Navbar title="CLOSET" />
        <Box className={classes.mobileGlassBox}>
          <TextTitleComponent title={`${username}의 옷장`} />
          <Box className={classes.mobileSubTitleBox1}>찾고 싶은 상품의 이미지를 등록해주세요.</Box>
          <Box className={classes.mobileSubTitleBox2}>
            이미지를 클릭하시면 비슷한 상품을 찾아드려요.
          </Box>
          <Grid container>
            {imageList}
            <UploadImageComponent inputtype="empty" user_id={user_id} />
          </Grid>
        </Box>
      </Box>
    </Mobile>
  );
}
