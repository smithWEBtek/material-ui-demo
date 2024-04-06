import React from "react";
import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  icon: {
    marginRight: "20px",
  },
  button: {
    background: 'lightblue',
    color: 'black',
    margin: '8px',
    width: 'auto'    
  }
}));

const MainNav = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className={classes.icon} />
        <Typography variant="h6">Photo Album</Typography>
        <Button variant="outlined" className={classes.button}>Test1</Button>
        <Button variant="outlined" className={classes.button}>Test2</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
