import styles from "./About.module.css";
import { TimeIcon, ShieldIcon, Icon3 } from "@/components/Icons/Icons";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>O nás</h2>

        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <p className={styles.intro}>
              Jmenuji se Maksym Hrynyk a jsem ředitelem společnosti RekoGrinik
              s.r.o. <br /> Naše společnost je nová, ale já i můj tým máme
              dlouholeté zkušenosti s rekonstrukcemi bytů a domů. <br />
              Garantujeme vysokou kvalitu provedení, dodržování termínů a
              poctivou komunikaci.
            </p>
          </div>

          <div className={styles.rightBlock}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon3 />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardContent}>
                  {" "}
                  <h3 className={styles.cardTitle}>Vysoká kvalita provedení</h3>
                  <p className={styles.cardDescription}>
                    Používáme pouze vysoce kvalitní materiály a moderní
                    technologie
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <TimeIcon />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Dodržování termínů</h3>
                <p className={styles.cardDescription}>
                  Projekty dokončujeme v dohodnutých termínech bez zpoždění
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <ShieldIcon />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Upřímná komunikace</h3>
                <p className={styles.cardDescription}>
                  Transparentní ceny, pravidelné zprávy o průběhu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
