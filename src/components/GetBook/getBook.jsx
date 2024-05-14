import style from "./getBook.module.css";

export function GetBook() {
  return (
    <div className={style.mainContainer}>
      <div className={style.textContainer}>
        <h1>Get Book Copy Today!</h1>
        <p>
          We believe that bookstores are essential to a healthy
          <br />
          culture. They’re where authors can connect with readers.
        </p>
        <button className={style.orderButton}>Order Today</button>
      </div>
      <div className={style.bookImage}>
        <img src="./GetBook.png" alt="Get Book" />
      </div>
    </div>
  );
}
