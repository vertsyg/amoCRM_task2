import logo from "../../assets/logo_welbex.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import viber from "../../assets/viber.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.light_purple} />
      <div className={styles.circle_purple} />
      <a href="#" className={styles.logo}>
        <img src={logo} alt="Welbex" />
        <p>
          крупный интегратор CRM
          <br /> в Росcии и ещё 8 странах
        </p>
      </a>
      <nav>
        <ul className={styles.header_nav}>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Виджеты</a>
          </li>
          <li>
            <a href="#">Интеграции</a>
          </li>
          <li>
            <a href="#">Кейсы</a>
          </li>
          <li>
            <a href="#">Сертификаты</a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__contacts}>
        <a href="tel:+75555555555">+7 555 555-55-55</a>
        <a href="#">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="#">
          <img src={viber} alt="viber" />
        </a>
        <a href="#">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </header>
  );
};

export default Header;
