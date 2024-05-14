import style from "./bestBooks.module.css";

export function BestBooks() {
  return (
    <div className={style.mainContainer}>
      <div className={style.title}>
        <h1>Trusted By The Best</h1>
      </div>
      <div className={style.cartBestBooks}>
        <div className={style.cart}>
            <img src="./BestBook1.png" alt="Amazen Corp." />
            <h2>Amazen Corp.</h2>
            <p>They has been helping readers,<br/> music lovers, 
            and videophiles<br/>find quality material.</p>
        </div>
        <div className={style.cart}>
        <img src="./BestBook2.png" alt="Megan Books" />
            <h2>Megan Books</h2>
            <p>We help physical bookstores<br/>manage their overstock 
            to<br/>the book inventory.</p>
        </div>
        <div className={style.cart}>
        <img src="./BestBook3.png" alt="Megank" />
            <h2>Megank</h2>
            <p>Bookstore serving up the full<br/>
             spectrum of Black literature<br/>and wine black books.</p>
        </div>
        <div className={style.cart}>
        <img src="./BestBook4.png" alt="Urban Store" />
            <h2>Urban Store</h2>
            <p>We also carry the latest records,<br/>
            issues of all of your favorite<br/>comic books.</p>
        </div>
      </div>
    </div>
  );
}
