import React from "react";
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import useStyles from "./PictureCardStyles";
import CatImage from "../../media/image/cat-test.jpeg";

const PictureCard = ({ heading, description, image, imageTitle }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        data-testid="card-media-image"
        className={classes.cardMedia}
        image={image}
        title={imageTitle}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5">
          {heading}
        </Typography>
        <Typography>{description}</Typography>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

PictureCard.defaultProps = {
  heading: 'PictureCard heading',
  description: 'PictureCard description',
  image: CatImage,
  imageTitle: 'The default Cat',
}

PictureCard.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageTitle: PropTypes.string,
};

export default PictureCard;
