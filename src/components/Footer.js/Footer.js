import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer} data-testid="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Updated Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Copyright 2024 smithWEBtek
      </Typography>
    </footer>
  );
};

export default Footer;
