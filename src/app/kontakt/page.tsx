/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import hub from "../sluzby/page.module.css";
import loc from "../lokace/page.module.css";
import byty from "../sluzby/rekonstrukce-bytu-praha/page.module.css";
import k from "./page.module.css";
import ScrollEffects from "../_shared/ScrollEffects";
import RequestForm from "@/components/forms/RequestForm";
import { locationLinks } from "@/components/layout/navLinks";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const PAGE_URL = "https://rekogrinik.cz/kontakt";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const ADDRESS = "Na Vackově 2895/5, 130 00 Praha 3";
const IMG = "/new";

export const metadata: Metadata = {
  title: { absolute: "Poptávka rekonstrukce | kontakt | RekoGrinik" },
  description:
    "Poptávka rekonstrukce v Praze: vyplňte formulář nebo volejte +420 776 352 237. Ozveme se a domluvíme bezplatnou návštěvu mistra.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const sendUs = [
  "Přesnou adresu.",
  "Přibližnou velikost prostoru.",
  "Popis požadovaných změn.",
  "Preferované období realizace.",
];

const mainServices = [
  { label: "Rekonstrukce bytů na klíč", href: "/sluzby/rekonstrukce-bytu-praha" },
  { label: "Rekonstrukce rodinných domů", href: "/sluzby/rekonstrukce-domu-praha" },
  { label: "Nová koupelna na klíč", href: "/sluzby/rekonstrukce-koupelen-praha" },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}#business`,
  name: "RekoGrinik",
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Na Vackově 2895/5",
    postalCode: "130 00",
    addressLocality: "Praha 3",
    addressCountry: "CZ",
  },
  areaServed: { "@type": "City", name: "Praha" },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${PAGE_URL}#webpage`,
  name: "Kontakt – RekoGrinik",
  url: PAGE_URL,
  about: { "@id": `${SITE_URL}#business` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: PAGE_URL },
  ],
};

export default function KontaktPage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      {[businessJsonLd, contactPageJsonLd, breadcrumbJsonLd].map((json) => (
        <script
          key={json["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}

      {/* Hero */}
      <header id="uvod" className={`${styles.hero} ${styles.heroBlend} ${k.hero}`}>
        <div className={styles.heroMedia}>
          <img
            fetchPriority="high"
            src={`${IMG}/hero-koupelna-pruhy.webp`}
            alt="Nová koupelna se sprchovým koutem a umyvadlem"
            style={{ objectPosition: "50% 55%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact} ${k.heroInner}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Kontakt</span>
          </nav>
          <div className={`${styles.heroContent} ${k.heroCenter}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Kontakt<span className={k.srOnly}> – </span>
              <span className={k.h1Sub}>Pojďme probrat vaši rekonstrukci</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Contact details + form */}
      <section id="formular" className={`${styles.container} ${hub.anchor}`}>
        <div className={k.formSection}>
          <div className={k.infoCol} data-reveal>
            <div className={loc.contactCard}>
              <p className={loc.contactName}>RekoGrinik</p>
              <dl>
                <div className={loc.contactRow}>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${PHONE}`} className={k.bigLink} data-cta="kontakt_phone">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div className={loc.contactRow}>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={`mailto:${EMAIL}`} className={k.bigLink} data-cta="kontakt_email">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div className={loc.contactRow}>
                  <dt>Kontaktní adresa</dt>
                  <dd className={k.addressDd}>
                    <span>{ADDRESS}</span>
                    <span className={k.addressNote}>
                      Osobní schůzku na kontaktní adrese si prosím domluvte předem.
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <div className={k.checkCol}>
              <p className={loc.checkTitle}>Do poptávky nám pošlete:</p>
              <ul className={loc.checkLight}>
                {sendUs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={k.formCard} data-reveal>
            <h2 className={k.formTitle}>Nezávazně poptat rekonstrukci</h2>
            <RequestForm formId="kontakt_page" classes={k} redirectTo="/dekujeme" />
          </div>
        </div>
      </section>

      {/* Where to find us */}
      <section id="kde-nas-najdete" className={styles.white}>
        <div className={`${styles.container} ${k.findUs}`}>
          <div className={k.findText} data-reveal>
            <h2 className={styles.h2}>Kde nás najdete</h2>
            <p>
              Kontaktní adresa RekoGrinik je Na Vackově 2895/5 na Praze 3. Na zaměření a
              realizace vyjíždíme po celé Praze. Pro přípravu rekonstrukce je obvykle
              vhodnější setkat se přímo v upravované nemovitosti.
            </p>
            <a
              className={loc.btnOutlineGreen}
              href="https://www.google.com/maps/search/?api=1&query=Na+Vackov%C4%9B+2895%2F5%2C+130+00+Praha+3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobrazit kontaktní adresu v Google Maps →
            </a>
          </div>
          <div className={k.areas} data-reveal>
            <p className={loc.checkTitle}>Oblasti, kde pracujeme</p>
            <nav aria-label="Oblasti, kde pracujeme" className={k.areaLinks}>
              {locationLinks.map((l) => (
                <Link key={l.href} href={l.href} className={byty.relatedLink}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className={`${loc.checkTitle} ${k.groupGap}`}>Naše hlavní služby</p>
            <nav aria-label="Naše hlavní služby" className={k.areaLinks}>
              {mainServices.map((l) => (
                <Link key={l.href} href={l.href} className={byty.relatedLink}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
