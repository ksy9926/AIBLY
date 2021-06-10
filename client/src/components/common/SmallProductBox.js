import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import InfiniteHorizontal from "components/common/InfiniteHorizontal";
import NoProductBox from "components/common/NoProductBox";

export default function ProductBox({ title }) {
  const classes = useStyles();
  const buttontext = "더보기 >";
  const [info, setInfo] = useState([]);

  // 메인 페이지 접속시 사용자 클로젯의 첫 번째 이미지 기반 비슷한 상품 추천
  useEffect(async () => {
    if (localStorage.getItem("jwt") !== null) {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/closet/`, {
        headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
      });
      console.log("test: ", response.data);
      if (response.data && response.data.length) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/api/recommend/`, [response.data[0].feature])
          .then((response) => {
            setInfo(response.data["recommend_list"][1]);
          });
      }
    }
  }, []);

  // 메인페이지 접속시 모든 아이템 출력
  return (
    <>
      {info && info.length ? (
        <Grid className={classes.mobileGlassBox}>
          <Box className={classes.mobileRecommendContainer}>
            <Box className={classes.mobileRecommendMessageBox}>
              <Box className={classes.mobileRecommendMessage}>{title}</Box>
              <Box className={classes.mobileRecommendButton}>
                <a href="/closet">{buttontext}</a>
              </Box>
            </Box>
            <InfiniteHorizontal info={info} />
          </Box>
        </Grid>
      ) : (
        <NoProductBox
          title="당신이 찾고 있는 상품"
          text="클로젯에 이미지를 등록하면 유사한 상품을 찾아드려요."
          button="사진 추가하기"
        />
      )}
    </>
  );
}
