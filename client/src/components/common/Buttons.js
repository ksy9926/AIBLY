import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mobileButton: {
    textDecoration: "none",
    background: "var(--color-main-b)",
    width: "55vw",
    borderRadius: "20px",
    color: "white",
    underline: "none",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",

    "&.MuiButton-root:hover": {
      background: "var(--color-main-b)",
      color: "white",
    },
  },
  mobileButtonText: {
    fontSize: "13px",
    fontWeight: "Bold",
    underline: "none",
  },
}));

export default function Buttons({ color, text, url }) {
  const classes = useStyles();
  const history = useHistory();

  function handleOnClick() {
    history.push(url);
  }

  return (
    <Button className={classes.mobileButton} onClick={handleOnClick}>
      <Typography className={classes.mobileButtonText}>{text}</Typography>
    </Button>
  );
}
