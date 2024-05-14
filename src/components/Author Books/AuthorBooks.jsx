import style from "./AuthorBooks.module.css";

export function AuthorBooks() {
  return (
    <div className={style.mainContainer}>
      <div className={style.titleBlock}>
        <h1>The Author's Book</h1>
      </div>
      <div className={style.mainBlock}>
        <div className={style.descriptionBlock}>
          <img src="/Book1.png" alt="First Book" className={style.bookImage} />
          <div className={style.textBlock}>
          <p className={style.titleBook}>Atomic One's</p>
          <p className={style.priceBook}>$ 13.84 USD</p>
          <p className={style.descriptionBook}>
            As the book contains
            <br />
            theoretical content as well as
            <br />
            solved questions.
          </p>
          <p className={style.printedBook}>Printed Book</p>
          <button className={style.orderBtn}>Order now</button>
          </div>
          
        </div>

        <div className={style.descriptionBlock}>
          <img src="/Book2.png" alt="Second Book" className={style.bookImage} />
          <div className={style.textBlock}>
            <p className={style.titleBook}>The Dark Light</p>
            <p className={style.priceBook}>$ 86.11 USD</p>
            <p className={style.descriptionBook}>
              As the book contains
              <br />
              theoretical content as well as
              <br />
              solved questions.
            </p>
            <p className={style.printedBook}>Printed Book</p>
            <button className={style.orderBtn}>Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
