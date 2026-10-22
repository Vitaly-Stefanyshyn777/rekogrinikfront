/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import hub from "../sluzby/page.module.css";
import loc from "../lokace/page.module.css";
import byty from "../sluzby/rekonstrukce-bytu-praha/page.module.css";
import r from "./page.module.css";
import ScrollEffects from "../_shared/ScrollEffects";
import ProjectGallery, { type PhotoGroup } from "./ProjectGallery";
import { BUSINESS_ID, webPageSchema } from "@/utils/schema";
import { locationLinks } from "@/components/layout/navLinks";

// Page of a district we have a location page for, e.g. "Praha 9".
const districtHref = (district: string) =>
  locationLinks.find((l) => l.label === district)?.href;

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const PAGE_URL = "https://rekogrinik.cz/realizace";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const IMG = "/realizace";

export const metadata: Metadata = {
  title: { absolute: "Rekonstrukce před a po | realizace rekonstrukcí Praha | RekoGrinik" },
  description:
    "Rekonstrukce před a po: fotografie a video z našich realizací koupelen, bytů a domů v Praze. Podívejte se, jak pracujeme, a domluvte si bezplatnou prohlídku.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

type Project = {
  id: string;
  title: string;
  paragraphs: string[];
  // An item with href links to the matching service page.
  scope: (string | { text: string; href: string })[];
  photos: PhotoGroup[];
  // Optional walkthrough video (web-compressed MP4 + cover frame).
  // uploadDate (YYYY-MM-DD) and duration (ISO 8601, e.g. PT1M) feed the
  // VideoObject schema.
  video?: { src: string; poster: string; label: string; uploadDate: string; duration: string };
  // Where the job was done: street (no house number), optional neighbourhood
  // and city district. A district with its own page is linked.
  location?: { street: string; area?: string; district: string };
};

type Category = {
  id: string;
  chip: string;
  title: string;
  intro: string;
  service: { label: string; href: string };
  projects: Project[];
};

// Add a project: drop its photos into public/realizace and add an entry here.
const categories: Category[] = [
  {
    id: "koupelny",
    chip: "Koupelny",
    title: "Rekonstrukce koupelen",
    intro: "Koupelny předáváme hotové, od stavební přípravy po obklady, dlažbu a montáž vybavení.",
    service: { label: "Rekonstrukce koupelen Praha", href: "/sluzby/rekonstrukce-koupelen-praha" },
    projects: [
      {
        id: "koupelna-na-klic",
        location: { street: "Murgašova", district: "Praha 4" },
        title: "Kompletní rekonstrukce koupelny na klíč",
        paragraphs: [
          "Původní koupelnu jsme proměnili v moderní a praktický prostor se sprchovým koutem, závěsným WC a místem pro pračku.",
          "Zakázku jsme zajistili kompletně na klíč, od přípravy stěn, podlahy a rozvodů až po obklady, dlažbu a montáž vybavení.",
        ],
        scope: [
          "Příprava stěn a podlahy pod nové obklady.",
          "Sprchový kout se sprchovým žlábkem a pevnou matnou zástěnou.",
          "Závěsné WC s podomítkovým modulem.",
          "Zakrytí instalační šachty s revizními dvířky k měřičům.",
          "Velkoformátová dlažba a obklady s květinovým dekorem.",
          "Umyvadlo na dřevěné desce a místo pro pračku pod pracovní deskou.",
        ],
        photos: [
          {
            label: "Před",
            tone: "before",
            photos: [
              {
                src: `${IMG}/koupelna-na-klic-pred-1.webp`,
                alt: "Koupelna před rekonstrukcí, stěny bez obkladů a připravené rozvody",
              },
              {
                src: `${IMG}/koupelna-na-klic-pred-2.webp`,
                alt: "Otevřená instalační šachta s měřiči před rekonstrukcí koupelny",
              },
            ],
          },
          {
            label: "Po",
            tone: "after",
            photos: [
              {
                src: `${IMG}/koupelna-na-klic-po-1.webp`,
                alt: "Hotová koupelna se sprchovým koutem, matnou zástěnou a závěsným WC",
              },
              {
                src: `${IMG}/koupelna-na-klic-po-2.webp`,
                alt: "Umyvadlo na dřevěné desce, zrcadlo a sprchová zástěna po rekonstrukci",
              },
              {
                src: `${IMG}/koupelna-na-klic-po-3.webp`,
                alt: "Závěsné WC, revizní dvířka šachty a pračka pod pracovní deskou",
              },
              {
                src: `${IMG}/koupelna-na-klic-po-4.webp`,
                alt: "Sprchový kout se sprchovým žlábkem a obkladem s květinovým dekorem",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "byty",
    chip: "Byty",
    title: "Rekonstrukce bytů",
    intro: "Kompletní i částečné rekonstrukce bytů, od bourání po malování a předání.",
    service: { label: "Rekonstrukce bytů Praha", href: "/sluzby/rekonstrukce-bytu-praha" },
    projects: [
      {
        id: "byt-koupelna-zachod",
        location: { street: "Holečkova", district: "Praha 5" },
        video: {
          src: `${IMG}/byt-koupelna-zachod-video.mp4`,
          poster: `${IMG}/byt-koupelna-zachod-video.webp`,
          label: "Video prohlídka hotového bytu",
          uploadDate: "2026-10-15",
          duration: "PT1M",
        },
        title: "Rekonstrukce koupelny, záchodu a bytu",
        paragraphs: [
          "V bytě jsme kompletně předělali koupelnu i samostatný záchod. Původní obklady jsme odstranili až na zdivo, připravili podklady a vývody pro nové vybavení a položili nové obklady a dlažbu.",
          "V dalších místnostech jsme položili dřevěnou podlahu ve vzoru rybí kost, vymalovali a připravili kuchyň pro montáž nové linky.",
        ],
        scope: [
          {
            text: "Odstranění původních obkladů a příprava stěn i podlah.",
            href: "/sluzby/bouraci-prace-praha",
          },
          "Koupelna s vanou, velkoformátovým obkladem a dlažbou v dekoru terazzo.",
          "Sprchový kout se sprchovým žlábkem a skleněnou zástěnou.",
          "Záchod se závěsným WC a podomítkovým modulem.",
          "Umyvadla se skříňkami a nové vývody vody.",
          { text: "Dřevěná podlaha ve vzoru rybí kost.", href: "/sluzby/podlaharske-prace-praha" },
          "Obklad za kuchyňskou linku a malování.",
        ],
        photos: [
          {
            label: "Před",
            tone: "before",
            photos: [
              {
                src: `${IMG}/byt-koupelna-zachod-pred-1.webp`,
                alt: "Záchod před rekonstrukcí, stěny po odstranění původních obkladů",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-pred-2.webp`,
                alt: "Koupelna před rekonstrukcí se starými rozvody a odstraněnými obklady",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-pred-3.webp`,
                alt: "Koupelna před rekonstrukcí s ohřívačem vody a otlučenými stěnami",
              },
            ],
          },
          {
            label: "Po",
            tone: "after",
            photos: [
              {
                src: `${IMG}/byt-koupelna-zachod-po-1.webp`,
                alt: "Bílá koupelna s vanou, umyvadlem se skříňkou a dlažbou v dekoru terazzo",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-po-2.webp`,
                alt: "Umyvadlo se zásuvkovou skříňkou a bílý obklad po rekonstrukci",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-po-3.webp`,
                alt: "Záchod po rekonstrukci se závěsným WC a bílým obkladem",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-po-4.webp`,
                alt: "Koupelna se sprchovým koutem, skleněnou zástěnou a šedým obkladem",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-po-5.webp`,
                alt: "Velkoformátový šedý obklad a umyvadlo se skříňkou v dekoru dřeva",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-po-6.webp`,
                alt: "Kuchyň s dřevěnou podlahou ve vzoru rybí kost a novým obkladem",
              },
              {
                src: `${IMG}/byt-koupelna-zachod-po-7.webp`,
                alt: "Pokoj s dřevěnou podlahou ve vzoru rybí kost a vymalovanými stěnami",
              },
            ],
          },
        ],
      },
      {
        id: "panelovy-byt-prosek",
        location: { street: "Jetřichovická", area: "Prosek", district: "Praha 9" },
        title: "Rekonstrukce panelového bytu na Proseku",
        paragraphs: [
          "V panelovém bytě jsme odstranili původní bytové jádro i staré povrchy a na jeho místě vyzdili novou koupelnu z pórobetonových tvárnic.",
          "Před obkladem jsme koupelnu ošetřili hydroizolací, obložili ji mozaikou a dlažbou a osadili sprchový kout, umyvadlo se skříňkou a místo pro pračku.",
        ],
        scope: [
          "Odstranění původního bytového jádra a starých povrchů.",
          "Nové stěny koupelny z pórobetonových tvárnic.",
          "Hydroizolace podlahy a stěn v koupelně.",
          "Obklady s mozaikou a světlá dlažba.",
          "Sprchový kout s posuvnými skleněnými dveřmi.",
          "Umyvadlo se skříňkou a místo pro pračku.",
          "Oprava a příprava stěn a stropů v pokojích.",
        ],
        photos: [
          {
            label: "Před",
            tone: "before",
            photos: [
              {
                src: `${IMG}/byt-prosek-pred-1.webp`,
                alt: "Pokoj panelového bytu po odstranění starých povrchů, stěny a strop před opravou",
              },
              {
                src: `${IMG}/byt-prosek-pred-2.webp`,
                alt: "Pohled do vybouraného pokoje s okny, nářadím a materiálem na podlaze",
              },
              {
                src: `${IMG}/byt-prosek-pred-3.webp`,
                alt: "Prostor po odstranění původního bytového jádra v panelovém bytě",
              },
              {
                src: `${IMG}/byt-prosek-pred-4.webp`,
                alt: "Předsíň s vchodovými dveřmi a místem pro novou koupelnu",
              },
            ],
          },
          {
            label: "Během prací",
            tone: "before",
            photos: [
              {
                src: `${IMG}/byt-prosek-behem-1.webp`,
                alt: "Vyzdívání nových stěn koupelny z pórobetonových tvárnic vedle instalační šachty",
              },
              {
                src: `${IMG}/byt-prosek-behem-2.webp`,
                alt: "Koupelna s hydroizolací podlahy a stěn před pokládkou obkladů",
              },
            ],
          },
          {
            label: "Po",
            tone: "after",
            photos: [
              {
                src: `${IMG}/byt-prosek-po-1.webp`,
                alt: "Hotová koupelna se sprchovým koutem, pračkou a umyvadlem se skříňkou",
              },
              {
                src: `${IMG}/byt-prosek-po-2.webp`,
                alt: "Sprchový kout s posuvnými dveřmi a obklad s mozaikou vedle pračky",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "domy",
    chip: "Domy",
    title: "Rekonstrukce domů",
    intro: "Celkové i etapové rekonstrukce rodinných domů a jejich interiérů.",
    service: { label: "Rekonstrukce domů Praha", href: "/sluzby/rekonstrukce-domu-praha" },
    projects: [],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Realizace", item: PAGE_URL },
  ],
};

const abs = (path: string) => new URL(path, SITE_URL).href;

const webPageJsonLd = webPageSchema({
  type: "CollectionPage",
  url: PAGE_URL,
  name: "Realizace: rekonstrukce před a po",
  description:
    "Fotografie a video z realizací RekoGrinik před rekonstrukcí a po ní: koupelny, byty a domy v Praze.",
});

// Each project with its photos (and video, if any).
const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${PAGE_URL}#projekty`,
  name: "Realizace RekoGrinik",
  itemListElement: categories
    .flatMap((c) => c.projects)
    .map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        "@id": `${PAGE_URL}#${p.id}`,
        url: `${PAGE_URL}#${p.id}`,
        name: p.title,
        description: p.paragraphs.join(" "),
        creator: { "@id": BUSINESS_ID },
        ...(p.location && {
          locationCreated: {
            "@type": "Place",
            name: [p.location.street, p.location.area, p.location.district]
              .filter(Boolean)
              .join(", "),
            address: {
              "@type": "PostalAddress",
              streetAddress: p.location.street,
              addressLocality: p.location.district,
              addressCountry: "CZ",
            },
          },
        }),
        image: p.photos.flatMap((g) => g.photos).map((ph) => abs(ph.src)),
        ...(p.video && {
          video: {
            "@type": "VideoObject",
            name: `${p.title}: ${p.video.label.toLowerCase()}`,
            description: p.paragraphs[0],
            thumbnailUrl: abs(p.video.poster),
            contentUrl: abs(p.video.src),
            uploadDate: p.video.uploadDate,
            duration: p.video.duration,
            inLanguage: "cs-CZ",
          },
        }),
      },
    })),
};

export default function RealizacePage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageJsonLd, projectsJsonLd, breadcrumbJsonLd]),
        }}
      />

      {/* Hero */}
      <header id="uvod" className={`${styles.hero} ${styles.heroBlend} ${hub.heroCompact}`}>
        <div className={styles.heroMedia}>
          <img
            fetchPriority="high"
            src="/new/hero-koupelna-kvetinova.webp"
            alt="Hotová koupelna po kompletní rekonstrukci"
            style={{ objectPosition: "50% 58%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Realizace</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Realizace<span className={r.srOnly}>: </span>
              <span className={r.h1Sub}>Naše práce před a po</span>
            </h1>
            <p className={styles.heroText}>
              Podívejte se, jak vypadaly prostory před rekonstrukcí a jak je předáváme.
              Fotografie pocházejí z našich skutečných zakázek.
            </p>
            <nav aria-label="Kategorie realizací" className={r.chips}>
              {categories.map((c) => (
                <a key={c.id} href={`#${c.id}`} className={r.chip}>
                  {c.chip}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Categories */}
      {categories.map((c, ci) => (
        <section
          key={c.id}
          id={c.id}
          className={`${ci % 2 === 1 ? styles.white : ""} ${hub.anchor}`}
        >
          <div className={styles.container}>
            <div className={r.catHead}>
              <h2 className={styles.h2} data-reveal>
                {c.title}
              </h2>
              <p className={r.catIntro} data-reveal>
                {c.intro} <Link href={c.service.href}>{c.service.label} →</Link>
              </p>
            </div>

            {c.projects.length ? (
              c.projects.map((p) => (
                <article key={p.id} id={p.id} className={`${r.project} ${hub.anchor}`}>
                  <div className={r.projectInfo} data-reveal>
                    <div className={r.projectText}>
                      <h3 className={r.projectTitle}>{p.title}</h3>
                      {p.location && (
                        <p className={r.projectLocation}>
                          {p.location.street}, {p.location.area && `${p.location.area}, `}
                          {districtHref(p.location.district) ? (
                            <Link href={districtHref(p.location.district)!}>
                              {p.location.district}
                            </Link>
                          ) : (
                            p.location.district
                          )}
                        </p>
                      )}
                      {p.paragraphs.map((text) => (
                        <p key={text}>{text}</p>
                      ))}
                    </div>
                    <div>
                      <p className={r.scopeTitle}>Co jsme předělali</p>
                      <ul className={loc.checkLight}>
                        {p.scope.map((item) =>
                          typeof item === "string" ? (
                            <li key={item}>{item}</li>
                          ) : (
                            <li key={item.text}>
                              <Link className={r.scopeLink} href={item.href}>
                                {item.text}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                  <ProjectGallery groups={p.photos} />
                  {p.video && (
                    <div className={r.videoBlock}>
                      <p className={r.groupLabel}>Video</p>
                      <video
                        className={r.video}
                        controls
                        playsInline
                        preload="none"
                        poster={p.video.poster}
                        aria-label={p.video.label}
                      >
                        <source src={p.video.src} type="video/mp4" />
                      </video>
                      <p className={r.videoCaption}>{p.video.label}</p>
                    </div>
                  )}
                </article>
              ))
            ) : (
              <div className={r.empty} data-reveal>
                <p>
                  Fotografie z těchto realizací právě připravujeme. Mezitím se podívejte na
                  službu nebo nám rovnou popište, co plánujete.
                </p>
                {/* The service is already linked in the category intro above. */}
                <div className={r.emptyLinks}>
                  <Link href="/kontakt" className={byty.relatedLink}>
                    Poptat rekonstrukci
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Call to action */}
      <section id="kontakt" className={styles.dark}>
        <div className={`${styles.container} ${r.cta}`}>
          <div data-reveal>
            <h2 className={styles.h2}>Chcete podobný výsledek?</h2>
            <p>
              Popište nám, co plánujete. Přijedeme na bezplatnou prohlídku, prostor
              zaměříme a připravíme nabídku podle skutečného stavu.
            </p>
            <p>
              Podívejte se, <Link href="/etapy-prace">jak probíhá rekonstrukce</Link>{" "}
              krok za krokem, nebo si přečtěte{" "}
              <Link href="/recenze">zkušenosti našich zákazníků</Link>.
            </p>
          </div>
          <div className={r.ctaBtns} data-reveal>
            <Link href="/kontakt" className={styles.btnGold} data-cta="realizace_poptavka">
              Poptat rekonstrukci
            </Link>
            <a href={`tel:${PHONE}`} className={styles.btnGold} data-cta="realizace_phone">
              Zavolat {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
