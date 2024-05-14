import style from "./MainContent.module.css";

export function MainContent() {
  return (
    <div className={style.mainContainer}>
      <div className={style.leftContainer}>
        <h1 className={style.title}>Welcome to Pages!!!</h1>

        <div className={style.subTitle}>
          <h2>Your Books From The Best Writer.</h2>
          <p>
            We believe that reading books are essential to a healthy culture.
            <br />
            They’re where authors can connect with readers.
          </p>
        </div>

        <div className={style.centerContainer}>
          <button className={style.contentButton}>Order Today</button>
          <p>
            <a href="#">Read Free Demo</a>
          </p>
        </div>

        <div className={style.colsContainer}>
          <p>
            Pages:
            <br /> <span>250 pages</span>
          </p>
          <p>
            Length: <br />
            <span>10 hours</span>
          </p>
          <p>
            Rating: <br />
            <span>4.5/5 (305 ratings)</span>
          </p>
        </div>
      </div>
      <div className={style.mainImg}>
        <img src="./MainImg.png" />
      </div>
    </div>
  );
}
