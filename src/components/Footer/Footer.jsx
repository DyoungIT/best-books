import style from "./Footer.module.css";

export function Footer() {
  return (
    <div>

        <div className={style.linkBtn}>
          <img className={style.mainLogo} src="/Book.png" />
          <p className={style.textLogo}>Pages</p>
          <button>
            <img src="./FacebookLight.svg" />
          </button>
          <button>
            <img src="./TwitterLight.svg" />
          </button>
          <button>
            <img src="./LinkedInLight.svg" />
          </button>
          <button>
            <img src="./Instagram.svg" />
          </button>
        </div>
      
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className={style.footer}>@My Best Project 2024</div>
    </div>
  );
}
