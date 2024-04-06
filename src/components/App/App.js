import { CssBaseline } from "@material-ui/core";
import MainNav from "../MainNav/MainNav";
import PictureCardsIndex from "../PictureCard/PictureCardsIndex";
import Footer from "../Footer.js/Footer";
import Welcome from "../Welcome/Welcome";

const App = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CssBaseline />
      <MainNav />
      <main>
        <Welcome />
        <PictureCardsIndex cards={cards} />
      </main>
      <Footer />
    </>
  );
};

export default App;
