import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import InfiniteHorizontal from "components/common/InfiniteHorizontal";

export default function ProductBox({ info, title, navbar, count }) {
  const classes = useStyles();
  const buttontext = "더보기 >"
  // 메인페이지 접속시 모든 아이템 출력
  return (
    <Grid className={classes.mobileGlassBox}>
      <Box className={classes.mobileRecommendContainer}>
        <Box className={classes.mobileRecommendMessageBox}>
          <Box className={classes.mobileRecommendMessage}>{title}</Box>
          <Box className={classes.mobileRecommendButton}> {buttontext} </Box>
        </Box>
      <InfiniteHorizontal info={[1]} />
      </Box>
    </Grid>
  );
}
