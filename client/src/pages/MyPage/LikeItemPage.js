import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import useStyles from "styles/RecentItemPageStyle";
import Navbar from "components/common/Navbar";
import NoItemTemplate from "components/SimilarItemPage/NoItemTemplate";
import axios from "axios";
import ProductBox from "components/common/ProductBox";
import { useSetRecoilState, useRecoilState } from "recoil";
import { countAllState, updateState } from "recoil/atoms";

export default function LikeItemPage() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
<<<<<<< HEAD
  const [countAll, setCountAll] = useRecoilState(countAllState);
  const [Update, setUpdate] = useState([]);
=======
  const setCountAll = useSetRecoilState(countAllState);
  const [update, setUpdate] = useRecoilState(updateState);

>>>>>>> 6fc50b0365b5c4b376e24ac3109663d4faed97f3
  // 찜한 상품 출력(코드 수정해야함)
  useEffect(() => {
    (async function () {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/likeproduct`, {
          headers: {
            Authorization: "JWT " + localStorage.getItem("jwt"),
          },
        })
        .then((response) => {
          setCountAll(response.data.length);
          setInfo(
            response.data.map((item) => {
              return item.product_id;
            }),
          );
          setUpdate(false);
        });
    })();
  }, [update]);

  if (info.length > 0) {
    return (
      <Mobile>
        <Box className={classes.mobileRoot}>
          <Navbar />
          <ProductBox info={info} title="내가 찜한 상품" />
        </Box>
      </Mobile>
    );
  } else {
    return (
      <Mobile>
        <Navbar />
        <Box className={classes.mobileFullBox}>
          <Box className={classes.mobileGlassBox}>
            <Box className={classes.mobileContainer}>
              <NoItemTemplate
                title="찜한 상품이 없어요!"
                subtitle="클릭하시면 비슷한 상품을 모아서 볼 수 있어요."
                buttontext="추천상품 보러가기"
                buttonUrl=""
              />
            </Box>
          </Box>
        </Box>
      </Mobile>
    );
  }
}
