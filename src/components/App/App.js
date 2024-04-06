import { CssBaseline } from "@material-ui/core";
import MainNav from "../MainNav/MainNav";
import PictureCardsIndex from "../PictureCardsIndex/PictureCardsIndex";
import Footer from "../Footer.js/Footer";
import Welcome from "../Welcome/Welcome";
import DietForm from "../Forms/DietForm";

const App = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CssBaseline />
      <MainNav />
        <DietForm />
      <main>
        <Welcome />
        <PictureCardsIndex cards={cards} />
      </main>
      <Footer />
    </>
  );
};

export default App;
