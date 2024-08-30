import style from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/Content/MainContent";
import { AuthorBooks } from "./components/AuthorBooks/AuthorBooks";
import { AboutTheAuthor } from "./components/AboutTheAuthor/AboutTheAuthor";
import { BestBooks } from "./components/BestBooks/bestBooks";
import { GetBook } from "./components/GetBook/getBook";
import { FourSteps } from "./components/FourSteps/Steps";
import { Footer } from "./components/Footer/Footer";
import { AboutPages } from "./components/AllPages/About/About";
import { Pages } from "./components/AllPages/Pages/Pages";
import { ContactPages } from "./components/AllPages/ContactUs/ContactUs";
import { StorePages} from "./components/AllPages/Store/Store";

function App() {
  return (
    <BrowserRouter>
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
        
          <Routes>
            <Route path="/about" element={<AboutPages/>} />
            <Route path="/pages" element={<Pages/>}/>
            <Route path="/contact" element={<ContactPages />}/>
            <Route path="/store" element={<StorePages />}/>
          </Routes>
        
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
