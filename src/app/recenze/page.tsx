/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import hub from "../sluzby/page.module.css";
import byty from "../sluzby/rekonstrukce-bytu-praha/page.module.css";
import r from "../realizace/page.module.css";
import c from "./page.module.css";
import ScrollEffects from "../_shared/ScrollEffects";
import { reviewsData } from "@/components/sections/reviewsData";
import { webPageSchema } from "@/utils/schema";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const PAGE_URL = "https://rekogrinik.cz/recenze";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const IMG = "/new";

export const metadata: Metadata = {
  title: { absolute: "Zkušenosti zákazníků | recenze | RekoGrinik" },
  description:
    "Zkušenosti zákazníků s RekoGrinik: recenze klientů, kteří nám svěřili rekonstrukci bytu, koupelny, kanceláře nebo provozovny v Praze.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Recenze", item: PAGE_URL },
  ],
};

// No Review/AggregateRating markup: Google ignores (and can penalise) star
// ratings a business publishes about itself on its own site.
const webPageJsonLd = webPageSchema({
  url: PAGE_URL,
  name: "Recenze: zkušenosti zákazníků RekoGrinik",
  description:
    "Zkušenosti zákazníků, kteří RekoGrinik svěřili rekonstrukci bytu, koupelny, kanceláře nebo provozovny v Praze.",
});

// The reviews mention flats, bathrooms and other interiors in Prague.
const serviceLinks = [
  { label: "Rekonstrukce bytů", href: "/sluzby/rekonstrukce-bytu-praha" },
  { label: "Rekonstrukce koupelen", href: "/sluzby/rekonstrukce-koupelen-praha" },
  { label: "Rekonstrukce domů", href: "/sluzby/rekonstrukce-domu-praha" },
  { label: "Všechny služby", href: "/sluzby" },
  { label: "Oblasti, kde pracujeme", href: "/lokace" },
];

export default function RecenzePage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageJsonLd, breadcrumbJsonLd]),
        }}
      />

      {/* Hero */}
      <header className={`${styles.hero} ${hub.heroCompact}`}>
        <img
          fetchPriority="high"
          src={`${IMG}/koupelna-dubova-skrinka.webp`}
          alt="Hotová koupelna s dubovou skříňkou po rekonstrukci"
          className={styles.cover}
          style={{ objectPosition: "50% 50%" }}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Recenze</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Recenze<span className={r.srOnly}>: </span>
              <span className={r.h1Sub}>Co říkají naši zákazníci</span>
            </h1>
            <p className={styles.heroText}>
              Reálné recenze od spokojených klientů, kteří nám svěřili své projekty.
            </p>
          </div>
        </div>
      </header>

      {/* Reviews */}
      <section>
        <div className={styles.container}>
          <ul className={c.grid} data-reveal-group>
            {reviewsData.map((review) => (
              <li key={review.name}>
                <figure className={c.card}>
                  <div className={c.stars} role="img" aria-label="Hodnocení 5 z 5">
                    ★★★★★
                  </div>
                  <blockquote className={c.quote}>
                    <p>{review.quote}</p>
                  </blockquote>
                  <p className={c.project}>{review.project}</p>
                  <figcaption className={c.person}>
                    <span className={c.avatar} aria-hidden="true">
                      {review.avatar}
                    </span>
                    <span>
                      <strong>{review.name}</strong>
                      <span>{review.position}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <nav aria-label="Související stránky" className={c.related} data-reveal>
            <p>Podívejte se také, jak pracujeme:</p>
            <Link href="/realizace" className={byty.relatedLink}>
              Realizace před a po
            </Link>
            <Link href="/etapy-prace" className={byty.relatedLink}>
              Etapy práce
            </Link>
          </nav>
          <nav
            aria-label="Služby a oblasti"
            className={`${c.related} ${c.relatedNext}`}
            data-reveal
          >
            <p>Co pro zákazníky nejčastěji děláme:</p>
            {serviceLinks.map((l) => (
              <Link key={l.href} href={l.href} className={byty.relatedLink}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Call to action */}
      <section className={styles.dark}>
        <div className={`${styles.container} ${r.cta}`}>
          <div data-reveal>
            <h2 className={styles.h2}>
              Jste připraveni se přidat k našim spokojeným zákazníkům?
            </h2>
            <p>
              Získejte bezplatnou konzultaci a zjistěte, jak můžeme proměnit váš prostor.
            </p>
          </div>
          <div className={r.ctaBtns} data-reveal>
            <Link href="/kontakt" className={styles.btnGold} data-cta="recenze_konzultace">
              Získejte bezplatnou konzultaci
            </Link>
            <a href={`tel:${PHONE}`} className={styles.btnGold} data-cta="recenze_phone">
              Zavolat {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
