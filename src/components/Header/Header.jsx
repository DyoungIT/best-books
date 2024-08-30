import style from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={style.mainHeaderContainer}>
      <div className={style.firstContainer}>
        <a href='/'>
        <img className={style.mainLogo} src="/Book.png"  />
        </a>
        <p className={style.textLogo}>Pages</p>

        <div className={style.linkBtn}>
          <button>
            <img src="./Facebook.svg" />
          </button>
          <button>
            <img src="./Twitter.svg" />
          </button>
          <button>
            <img src="./LinkedIn.svg" />
          </button>
        </div>
      </div>

      <div className={style.secondContainer}>
        <a style={{ color: "#ffd633" }} href="#">
          Home
        </a>
        <a href="/about">About</a>
        <a href="/pages">Pages</a>
        <a href="/contact">Contact Us</a>
        <a href="/store">
          <img src="/Cart.png" className={style.cartImg}/>
        </a>
        <button className={style.navButton}>Order Today</button>
      </div>
    </div>
  );
}
