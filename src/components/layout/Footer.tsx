import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FacebookIcon, InstagramIcon } from "@/components/Icons/Icons";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <div className={styles.brandSection}>
            <div className={styles.brandIcon}>
              <Image
                src="/Logo-2.svg"
                alt="RekoGrinik"
                width={93}
                height={93}
              />
            </div>
            <p className={styles.tagline}>
              Profesionální opravy a renovace v Praze
            </p>
          </div>

          <div className={styles.rightBlocks}>
            <div className={styles.contactsSection}>
              <h5>Kontakty</h5>
              <div className={styles.contactInfo}>
                <p>
                  <span className={styles.label}>Telefon:</span> +420 608 583
                  115
                </p>
                <p>
                  <span className={styles.label}>E-mail:</span>{" "}
                  rekogrinikcz@gmail.com
                </p>
                <p>Praha, Česká republika</p>
              </div>
              <div className={styles.socialIcons}>
                <InstagramIcon />
                <FacebookIcon />
              </div>
            </div>

            <div className={styles.servicesSection}>
              <div className={styles.servicesContent}>
                <h5>Služby</h5>
                <div className={styles.servicesList}>
                  <p>Rekonstrukce bytů</p>
                  <p>Koupelny</p>
                  <p>Sádrokartonářské práce</p>
                  <p>Malířské práce</p>
                  <p>Obklady</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} RekoGrinik s.r.o. Všechna práva
            vyhrazena.
          </p>
        </div>
        <div className={styles.legalLinks}>
          <p>Zásady ochrany osobních údajů</p>
          <p>GDPR</p>
        </div>
      </div>
    </footer>
  );
}
