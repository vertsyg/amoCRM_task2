import styles from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <div className={styles.light_red} />
      <div className={styles.circle_red} />

      <div className={styles.main_title}>
        <h1>
          Зарабатывайте
          <br /> больше <br />
          <span>с WELBEX</span>
        </h1>
        <h2>
          Развиваем и контролируем
          <br /> продажи за вас
        </h2>
      </div>
      <div className={styles.main_info}>
        <h3>
          Вместе с{" "}
          <span>
            бесплатной
            <br /> консультацией
          </span>{" "}
          мы дарим:
        </h3>
        <div className={styles.gifts}>
          <div className={styles.gifts_item}>
            <p className={styles.gifts_item_title}>Виджеты</p>
            <p className={styles.gifts_item_info}>
              30 готовых
              <br /> решений
            </p>
          </div>
          <div className={styles.gifts_item}>
            <p className={styles.gifts_item_title}>Dashboard</p>
            <p className={styles.gifts_item_info}>
              с показателями
              <br /> вашего бизнеса
            </p>
          </div>
          <div className={styles.gifts_item}>
            <p className={styles.gifts_item_title}>Skype Аудит</p>
            <p className={styles.gifts_item_info}>
              отдела продаж
              <br />и CRM системы
            </p>
          </div>
          <div className={styles.gifts_item}>
            <p className={styles.gifts_item_title}>35 дней</p>
            <p className={styles.gifts_item_info}>
              использования <br /> CRM
            </p>
          </div>
          <p className={styles.gifts_item_mobile}>
            <span>—</span> Skype аудит
          </p>
          <p className={styles.gifts_item_mobile}>
            <span>—</span> 30 виджетов
          </p>
          <p className={styles.gifts_item_mobile}>
            <span>—</span> Dashboard
          </p>
          <p className={styles.gifts_item_mobile}>
            <span>—</span> Месяц аmoCRM
          </p>
        </div>
        <button>Получить консультацию</button>
      </div>
      <div className={styles.circle_red_mini} />
    </main>
  );
};

export default Main;
