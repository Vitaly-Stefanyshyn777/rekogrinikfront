import styles from "./page.module.css";

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Політика конфіденційності</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Загальні положення</h2>
          <p>
            Ця політика конфіденційності описує, як RekoGrinik збирає,
            використовує та захищає вашу особисту інформацію при використанні
            нашого веб-сайту та послуг.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Збір інформації</h2>
          <p>Ми збираємо наступні типи інформації:</p>
          <ul>
            <li>
              <strong>Контактна інформація:</strong> ім'я, телефон, email,
              адреса
            </li>
            <li>
              <strong>Технічна інформація:</strong> IP-адреса, тип браузера,
              операційна система
            </li>
            <li>
              <strong>Інформація про використання:</strong> сторінки, які ви
              відвідуєте, час проведений на сайті
            </li>
            <li>
              <strong>Файли та документи:</strong> завантажені вами зображення
              та документи
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Використання інформації</h2>
          <p>Ваша інформація використовується для:</p>
          <ul>
            <li>Надання послуг з реконструкції</li>
            <li>Зв'язку з вами щодо ваших запитів</li>
            <li>Покращення якості наших послуг</li>
            <li>Відправки важливих повідомлень</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Захист даних</h2>
          <p>
            Ми впроваджуємо відповідні технічні та організаційні заходи для
            захисту вашої особистої інформації від несанкціонованого доступу,
            зміни, розкриття або знищення.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            5. Передача даних третім особам
          </h2>
          <p>
            Ми не продаємо, не обмінюємо та не передаємо вашу особисту
            інформацію третім особам без вашої згоди, за винятком випадків,
            необхідних для надання послуг або виконання правових вимог.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Ваші права</h2>
          <p>Ви маєте право:</p>
          <ul>
            <li>Отримати копію ваших особистих даних</li>
            <li>Виправити неточну інформацію</li>
            <li>Видалити ваші дані</li>
            <li>Обмежити обробку ваших даних</li>
            <li>Відкликати згоду на обробку даних</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Cookies</h2>
          <p>
            Наш веб-сайт використовує cookies для покращення функціональності та
            аналізу використання. Ви можете налаштувати ваш браузер для відмови
            від cookies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Зміни в політиці</h2>
          <p>
            Ми можемо оновлювати цю політику конфіденційності. Будь-які зміни
            будуть опубліковані на цій сторінці з оновленою датою.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Контактна інформація</h2>
          <p>
            Якщо у вас є питання щодо цієї політики конфіденційності, будь
            ласка, зв'яжіться з нами:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> info@rekogrinik.cz
            </li>
            <li>
              <strong>Телефон:</strong> +420 XXX XXX XXX
            </li>
            <li>
              <strong>Адреса:</strong> Прага, Чехія
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.lastUpdated}>
            <strong>Останнє оновлення:</strong>{" "}
            {new Date().toLocaleDateString("uk-UA")}
          </p>
        </section>
      </div>
    </div>
  );
}
