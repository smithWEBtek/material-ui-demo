import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from "@material-ui/core";
import PictureCard from "./PictureCard";
import useStyles from './PictureCardStyles';

const PictureCardsIndex = ({ cards }) => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <PictureCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

PictureCardsIndex.propTypes = {
  cards: PropTypes.array.isRequired
}

export default PictureCardsIndex;
