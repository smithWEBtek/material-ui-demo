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
import { makeStyles } from "@material-ui/core/styles";
import CatImage from "../../media/image/cat-test.jpeg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  card: {
    height: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.35%", // aspect ratio 16x9
  }
}));

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
