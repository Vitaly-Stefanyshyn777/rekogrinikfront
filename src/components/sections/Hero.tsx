import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ height: "812px", minHeight: "812px" }}
    >
      <div className={styles.overlay}>
        <div className={styles.centerText}>
          <div className={styles.logo}>
            <img
              src="/Logo-Hero.svg?v=hero"
              alt="RekoGrinik"
              width="94"
              height="94"
            />
          </div>
          <div className={styles.textBlock}>
            <h1>
              RekoGrinik – Rekonstrukce <br />
              bytů a domů v Praze
            </h1>
            <p>Kompletní rekonstrukce na klíč, pevné rozpočty a termíny</p>
          </div>

          <div className={styles.actions}>
            <Link href="#consult" className={styles.primaryBtn}>
              Bezplatná konzultace
            </Link>
            <Link href="#more" className={styles.secondaryBtn}>
              Více informací
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
