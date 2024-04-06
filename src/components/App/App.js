import useStyles from "./appStyles";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography
} from "@material-ui/core";
import MainNav from "../MainNav/MainNav";
import PictureCardsIndex from "../PictureCard/PictureCardsIndex";
import Footer from "../Footer.js/Footer";

const App = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CssBaseline />
      <MainNav />
      <main>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone This is a photo album and I'm trying to make this
              sentence as long as possible. To see it.
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
        <PictureCardsIndex cards={cards} />
        {/* <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PictureCard />
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
