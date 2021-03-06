import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "styles/RecentItemPageStyle";
import Buttons from "components/common/Buttons";
import { useHistory } from "react-router-dom";

export default function NoItemTemplate({ title, subtitle, buttontext, buttonUrl }) {
  const classes = useStyles();
  const history = useHistory();


  function handleOnClick(e) {
    history.push(buttonUrl);
  }

  return (
    <Box className={classes.mobileNoItemBox}>
      <Box>
        <Box className={classes.mobileTitleBox}>
          <Typography className={classes.mobileTitleText}>{title}</Typography>
        </Box>
        <Box className={classes.mobileTitleBox}>
          <Typography className={classes.mobileSubtitleText}>{subtitle}</Typography>
        </Box>
      </Box>
      <Box className={classes.mobileButtonBox}>
        <Buttons url={buttonUrl} text={buttontext} onClick={handleOnClick}></Buttons>
      </Box>
    </Box>
  );
}
