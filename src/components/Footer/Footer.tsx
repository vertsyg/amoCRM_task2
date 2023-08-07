import styles from "./Footer.module.css";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import viber from "../../assets/viber.svg";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className={styles.footer_nav}>
          <li className={styles.footer_nav_title}>
            <a href="#">О компании</a>
          </li>

          <li>
            <a href="#">Партнёрская программа</a>
          </li>
          <li>
            <a href="#">Вакансии</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={styles.footer_nav}>
          <li className={styles.footer_nav_title}>
            <a href="#">Меню</a>
          </li>
          <div className={styles.footer_nav_menu}>
            <div>
              <li>
                <a href="#">Расчёт стоимости</a>
              </li>
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
                <a href="#">Наши клиенты</a>
              </li>
            </div>

            <div>
              {" "}
              <li>
                <a href="#">Кейсы</a>
              </li>
              <li>
                <a href="#">Благодарственные письма</a>
              </li>
              <li>
                <a href="#">Сертификаты</a>
              </li>
              <li>
                <a href="#">Блог на Youtube</a>
              </li>
              <li>
                <a href="#">Вопрос / Ответ</a>
              </li>
            </div>
          </div>
        </ul>
      </nav>
      <nav>
        <ul className={styles.footer_nav}>
          <li className={styles.footer_nav_title}>
            <a href="#">Контакты</a>
          </li>
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <div className={styles.footer__links}>
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

          <li>
            <a href="https://goo.gl/maps/EGuiRF5wz6DFFFDWA">
              Москва, Путевой проезд 3с1, к 902
            </a>
          </li>
        </ul>
        <p className={styles.rights}>©WELBEX 2022. Все права защищены.</p>
        <a href="#" className={styles.conf}>
          Политика конфиденциальности
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
