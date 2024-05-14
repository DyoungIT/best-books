import style from "./AboutTheAuthor.module.css";

export function AboutTheAuthor() {
  return (
    <div className={style.mainContainer}>
      <div className={style.imgContainer}>
        <img src="./AuthorImg.png" />
      </div>
      <div className={style.aboutTheAuthor}>
        <div className={style.blockText}>
          <h2 className={style.title}>About The Author</h2>
          <p className={style.description}>
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers, where we discover
            new writers, where children get hooked on the thrill of reading that
            can last a lifetime.
          </p>
        </div>
        <div className={style.rating}>
          <div className={style.ratingBlock1}>
            <h2 className={style.ratingTitle}>02</h2>
            <p className={style.descriptionRating}>Books Published</p>
          </div>
          <div className={style.ratingBlock2}>
            <h2 className={style.ratingTitle}>4.5</h2>
            <p className={style.descriptionRating}>User Reviews</p>
          </div>
          <div className={style.ratingBlock3}>
            <h2 className={style.ratingTitle}>04</h2>
            <p className={style.descriptionRating}>Best Seller Awards</p>
          </div>
        </div>
        <div className={style.contactsAuthor}>
          <div>
            <img src="./QRCode.png" />
          </div>
          <div className={style.paragraphDesc}>
          <p className={style.authorName}>John Abraham , Ph.d</p>
          <p className={style.authorContact}>Mail: johnabraham@gmail.com</p>
          <p className={style.authorContact}>Phone: (+2) 123 545 9000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
