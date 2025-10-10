import styles from "./Stats.module.css";
import {
  ApartmentIcon,
  UsersIcon,
  TimeIcon,
  MedalIcon,
} from "@/components/Icons/Icons";

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2>Naše úspěchy v číslech</h2>
          <p>Číslo skin odráží naši oddanost integritě a profesionalitě</p>
        </div>

        <div className={styles.cards4}>
          <div className={styles.card}>
            <ApartmentIcon />
            <div className={styles.numberRow}>
              <p className={styles.number}>127</p>
              <p className={styles.unit}>+</p>
            </div>
            <p className={styles.cardTitle}>Dokončené projekty</p>
            <span>Byty a stánky</span>
          </div>
          <div className={styles.card}>
            <UsersIcon />
            <div className={styles.numberRow}>
              <p className={styles.number}>98</p>
              <p className={styles.unit}>%</p>
            </div>
            <p className={styles.cardTitle}>Spokojení klienti</p>
            <span>Doporučte nás</span>
          </div>
          <div className={styles.card}>
            <TimeIcon />
            <div className={styles.numberRow}>
              <p className={styles.number}>5</p>
              <p className={styles.unit}>+</p>
            </div>
            <p className={styles.cardTitle}>Dlouholeté zkušenosti</p>
            <span>Na pražském trhu</span>
          </div>
          <div className={styles.card}>
            <MedalIcon />
            <div className={styles.numberRow}>
              <p className={styles.number}>3</p>
              <p className={styles.unit}>roky</p>
            </div>
            <p className={styles.cardTitle}>Záruky</p>
            <span>na veškeré práce</span>
          </div>
        </div>

        <div className={styles.reasonBox}>
          <h3>Proč si zákazníci vybírají RekoGrinik?</h3>
          <div className={styles.reasons}>
            <div className={styles.reason}>
              <h4>💼 Profesionalita</h4>
              <p>Kvalifikovaní řemeslníci s dlouholetými zkušenostmi</p>
            </div>
            <div className={styles.reason}>
              <h4>⏰ Dochvilnost</h4>
              <p>Vždy dodržujeme dohodnuté termíny</p>
            </div>
            <div className={styles.reason}>
              <h4>🔧 Kvalita</h4>
              <p>Používáme pouze osvědčené materiály</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
