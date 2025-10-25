import Image from "next/image";
import Link from "next/link";
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
                  <span className={styles.label}>Telefon:</span>{" "}
                  <a href="tel:+420608583115">+420 608 583 115</a>
                </p>
                <p>
                  <span className={styles.label}>E-mail:</span>{" "}
                  <a href="mailto:rekogrinikcz@gmail.com">
                    rekogrinikcz@gmail.com
                  </a>
                </p>
                <p>Praha, Česká republika</p>
              </div>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.instagram.com/rekogrinik_s.r.o?igsh=MTlxMHgyYW11N3B0bQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/people/Reko-Grinik/pfbid0q6E1En32P7nAGksiSXGWAVTnq6YLjTucb3ojg54P3kSZCKmREo9sy9J6nVtgPY2Ll/?mibextid=wwXIfr&rdid=gXud8dHHw3wa1RoV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16dayhFVJA%2F%3Fmibextid%3DwwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
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
          <Link href="/privacy" className={styles.legalLink}>
            Zásady ochrany osobních údajů
          </Link>
        </div>
      </div>
    </footer>
  );
}
