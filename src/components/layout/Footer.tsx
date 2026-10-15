import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  TelegramIcon,
} from "@/components/Icons/Icons";
import { pageLinks, serviceLinks, type NavLink } from "./navLinks";

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav className={styles.servicesSection} aria-label={title}>
      <div className={styles.servicesContent}>
        <h5>{title}</h5>
        <ul className={styles.servicesList}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.mainContent}>
        <div className={styles.contentSection}>
          <div className={styles.brandSection}>
            <div className={styles.brandIcon}>
              <Image
                src="/vector-2.svg"
                alt="RekoGrinik"
                width={72}
                height={72}
              />
            </div>
            <div className={styles.brandText}>
              <p className={styles.brandName}>RekoGrinik s.r.o.</p>
              <p className={styles.tagline}>
                Profesionální opravy a renovace v Praze
              </p>
            </div>
          </div>

          <div className={styles.rightBlocks}>
            <div className={styles.contactsSection}>
              <h5>Kontakty</h5>
              <div className={styles.contactInfo}>
                <p>
                  <span className={styles.label}>Telefon:</span>{" "}
                  <a href="tel:+420776352237">+420 776 352 237</a>
                </p>
                <p>
                  <span className={styles.label}>E-mail:</span>{" "}
                  <a href="mailto:rekogrinikcz@gmail.com">
                    rekogrinikcz@gmail.com
                  </a>
                </p>
                <p>
                  <span className={styles.label}>Adresa:</span> Na Vackově
                  2895/5, 130 00 Praha 3
                </p>
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
                  href="https://wa.me/420776352237"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon />
                </a>
                <a
                  href="https://t.me/+420776352237"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <TelegramIcon />
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

            <FooterColumn
              title="Navigace"
              links={[
                pageLinks.home,
                { label: "Všechny služby", href: pageLinks.services.href },
                pageLinks.locations,
                pageLinks.process,
                pageLinks.realizace,
                pageLinks.reviews,
                pageLinks.contact,
              ]}
            />
            <FooterColumn title="Služby" links={serviceLinks} />
          </div>
        </div>

        {/* Google Business Profile map (RekoGrinik s.r.o., Na Vackově) */}
        <iframe
          className={styles.map}
          title="Mapa – RekoGrinik s.r.o., Na Vackově 2895/5, Praha 3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.898253057244!2d14.482293777420129!3d50.08819181337993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c546cda720659%3A0x140985d460c24916!2sRekoGrinik%20s.r.o.!5e0!3m2!1scs!2scz!4v1792063812875!5m2!1scs!2scz"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className={styles.bottomRule}>
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>
              © {new Date().getFullYear()} RekoGrinik s.r.o. Všechna práva
              vyhrazena.
            </p>
          </div>
          <a
            className={styles.credit}
            href="https://mmavencreative.com/"
            target="_blank"
            rel="noopener"
          >
            SEO a web od
            <Image
              src="/mmaven-logo.png"
              alt=""
              width={33}
              height={24}
              className={styles.creditLogo}
            />
            <strong>MMaven Creative</strong>
          </a>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Zásady ochrany osobních údajů
            </Link>
            {/* CookieYes reopens its preference centre from this class */}
            <a href="#" className={`${styles.legalLink} cky-banner-element`}>
              Nastavení cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
