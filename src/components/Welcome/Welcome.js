import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./WelcomeStyles";

const Welcome = () => {
  const classes = useStyles();

  return (
    <div data-testid="welcome">
      <Container maxWidth="sm" className={classes.container}>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Photo Album
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          This is a photo album, where random photos are displayed. They originate from an API. There is also a default Cat picture in case the API is not working, or there is no internet connection.
        </Typography>
        <div className={classes.buttons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See my photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
