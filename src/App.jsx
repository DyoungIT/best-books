import style from "./App.module.css";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/Content/MainContent";
import { AuthorBooks } from "./components/Author Books/AuthorBooks";
import { AboutTheAuthor } from "./components/About The Author/AboutTheAuthor";
import { BestBooks } from "./components/Best Books/bestBooks";
import { GetBook } from "./components/GetBook/getBook";
import { FourSteps } from "./components/FourSteps/Steps";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className={style.mainContainer}>
      <div className={style.blueContainer}>
        <Header />
        <MainContent />
      </div>
      <AuthorBooks />
      <div className={style.greyContainer}>
        <AboutTheAuthor />
      </div>
      <BestBooks />
      <div className={style.getBookContainer}>
        <GetBook />
      </div>
      <FourSteps />
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
