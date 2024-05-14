
import style from "./Header.module.css";

export function Header() {
  return (
    <div className={style.mainHeaderContainer}>
      <div className={style.firstContainer}>
        <img className={style.mainLogo} src="/Book.png"  />
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
        <a href="#">About</a>
        <a href="#">Pages</a>
        <a href="#">Contact Us</a>
        <a href="#">
          <img src="/Cart.png" className={style.cartImg}/>
        </a>
        <button className={style.navButton}>Order Today</button>
      </div>
    </div>
  );
}
