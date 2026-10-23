/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../_shared/site.module.css";
import hub from "../../sluzby/page.module.css";
import loc from "../page.module.css";
import byty from "../../sluzby/rekonstrukce-bytu-praha/page.module.css";
import domy from "../../sluzby/rekonstrukce-domu-praha/page.module.css";
import koup from "../../sluzby/rekonstrukce-koupelen-praha/page.module.css";
import d from "../district.module.css";
import ScrollEffects from "../../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const HUB_URL = "https://rekogrinik.cz/lokace";
const PAGE_URL = "https://rekogrinik.cz/lokace/rekonstrukce-praha-3";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const ADDRESS = "Na Vackově 2895/5, 130 00 Praha 3";
const IMG = "/new";

// A file name is in /new; a path starting with "/" points elsewhere (e.g.
// project photos in /realizace).
const photo = (src: string) => (src.startsWith("/") ? src : `${IMG}/${src}`);

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce Praha 3 | Domy, byty a koupelny | RekoGrinik",
  },
  description:
    "Rekonstrukce Praha 3 pro domy, byty a koupelny na klíč. Žižkov, Jarov i Vinohrady. Od bourání po malování. Domluvte si bezplatné zaměření.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

type Item = { text: string };

const offered: Item[] = [
  { text: "Kompletní rekonstrukce bytů." },
  { text: "Rekonstrukce domů a jejich interiérů." },
  { text: "Rekonstrukce koupelen na klíč." },
  { text: "Bourací a demontážní práce." },
  { text: "Zednické práce a opravy omítek." },
  { text: "Sádrokartonové příčky a podhledy." },
  { text: "Pokládku vinylu, laminátu a parket." },
  { text: "Malování, štukování a dokončovací práce." },
];

const firstVisitChecks = [
  "Patro a dostupnost výtahu.",
  "Šířka vstupu a schodiště.",
  "Možnost zastavení a vykládky.",
  "Trasa pro přenášení materiálu.",
  "Ochrana společných prostor.",
  "Pravidla domu pro hlučné práce.",
  "Možnost dočasného uložení materiálu.",
  "Způsob odnosu a odvozu odpadu.",
];

// A card paragraph is plain text or a note set off by a rule.
type Para = string | { note: string };

type Area = {
  id: string;
  chip: string;
  title: string;
  left: Para[];
  right?: Para[];
  listTitle?: string;
  list?: string[];
};

const areas: Area[] = [
  {
    id: "zizkov",
    chip: "Žižkov a Vítkov",
    title: "Žižkov a okolí Vítkova",
    left: [
      "Na Žižkově přijímáme poptávky z okolí Hartigovy ulice, Seifertovy, Olšanského náměstí, Tachovského náměstí, Vítkova i dalších míst na Praze 3.",
      "Ve starších domech se při rekonstrukci mohou objevit vysoké stropy, několik vrstev původních nátěrů, nerovné podlahy nebo omítky opravované v různých obdobích. Neznamená to, že každý žižkovský byt potřebuje kompletní odstranění všech povrchů. Rozsah určíme až po kontrole jejich skutečného stavu.",
      {
        note: "Pokud se mají zachovat původní parkety, dveře nebo jiné prvky, označíme je před zahájením a zahrneme jejich ochranu do domluveného postupu.",
      },
    ],
    listTitle: "Při práci v hustě zastavěných ulicích řešíme předem:",
    list: [
      "Kde lze vyložit materiál.",
      "Zda se rozměrné prvky vejdou na schodiště.",
      "Jak chránit vstupní prostory domu.",
      "Kam průběžně ukládat zabalený odpad.",
      "Kdy lze provádět hlučné bourání a vrtání.",
      "Jak zachovat přístup sousedům.",
    ],
  },
  {
    id: "jarov",
    chip: "Jarov, Ohrada a Vackov",
    title: "Jarov, Ohrada a Vackov",
    left: [
      "Na Jarově, Ohradě a Vackově se setkáváme se staršími bytovými domy, panelovými objekty i novějšími rezidenčními projekty. Každý typ stavby vyžaduje jiný přístup k demontáži, novým konstrukcím i povrchům.",
      {
        note: "V panelových domech je naopak důležité respektovat konstrukční systém a pravidla správce. Do stěny se nezasahuje pouze podle jejího vzhledu nebo poklepu. Pokud není jednoznačné, zda je konstrukce nosná nebo společná, je potřeba její charakter nejdříve odborně ověřit.",
      },
      "Na Vackově máme kontaktní adresu, díky čemuž je Praha 3 přirozeným těžištěm našeho působení.",
    ],
    listTitle: "V novějších domech bývá častým požadavkem:",
    list: [
      "Úprava dispozice pomocí sádrokartonu.",
      "Výměna standardní podlahy za kvalitnější krytinu.",
      "Malování a opravy po montáži nábytku.",
      "Přestavba koupelny podle potřeb domácnosti.",
      "Příprava nik, podhledů a osvětlení.",
      "Dokončení bytu před nastěhováním.",
    ],
  },
  {
    id: "vinohrady",
    chip: "Vinohrady",
    title: "Vinohrady a okolí Jiřího z Poděbrad",
    left: [
      "Přijímáme také zakázky v části Vinohrad patřící pod Prahu 3, například v okolí náměstí Jiřího z Poděbrad, Flory a přilehlých ulic.",
      "V těchto lokalitách se často pracuje v činžovních bytech s velkými okny, vyššími stropy a původními stavebními prvky. Před zahájením je důležité rozhodnout, co se má zachovat, renovovat nebo nahradit.",
    ],
    right: [
      {
        note: "Provoz kolem náměstí Jiřího z Poděbrad mohou od středy do soboty ovlivňovat pravidelné farmářské trhy, takže větší vykládku materiálu je vhodné plánovat podle konkrétní adresy a aktuálního provozu.",
      },
      {
        note: "Části Žižkova a Vinohrad zároveň leží v městské památkové zóně. U zásahů ovlivňujících chráněné konstrukce nebo vzhled domu proto může být nutné předem ověřit příslušné podmínky.",
      },
    ],
  },
];

const needs = [
  { need: "Kompletně proměnit starší byt", label: "Rekonstrukce bytu na klíč" },
  { need: "Modernizovat rodinný dům", label: "Rekonstrukce domu nebo vybraných podlaží" },
  { need: "Vybudovat novou koupelnu", label: "Rekonstrukce koupelny na klíč" },
  { need: "Změnit dispozici interiéru", label: "Bourací, zednické a sádrokartonářské práce" },
  { need: "Obnovit poškozené povrchy", label: "Opravy omítek, štukování a malování" },
  { need: "Vyměnit krytinu v celém bytě", label: "Podlahářské práce" },
  { need: "Připravit byt před nastěhováním", label: "Malování, podlahy a dokončovací práce" },
];

type ServiceCard = {
  title: string;
  paragraphs: string[];
  listTitle?: string;
  list?: Item[];
  after?: string;
  link?: Item & { href: string };
};

const serviceCards: ServiceCard[] = [
  {
    title: "Kompletní rekonstrukce bytů",
    paragraphs: [
      "U kompletní rekonstrukce koordinujeme jednotlivé fáze jako jeden projekt. Nejdříve potvrdíme budoucí dispozici a vybavení, potom naplánujeme demontáž, hrubé úpravy, povrchy a dokončení.",
    ],
    listTitle: "Součástí může být:",
    list: [
      { text: "Vyklizení dohodnutých prvků." },
      { text: "Odstranění příček a starých povrchů." },
      { text: "Nové zdivo nebo sádrokartonové konstrukce." },
      { text: "Stavební příprava koupelny a kuchyně." },
      { text: "Oprava stěn a podlah." },
      { text: "Pokládka nové krytiny." },
      { text: "Štukování a malování." },
      { text: "Závěrečné dokončení a úklid." },
    ],
    link: { text: "Více o rekonstrukcích bytů v Praze →", href: service("rekonstrukce-bytu-praha") },
  },
  {
    title: "Koupelny na klíč",
    paragraphs: [
      "U koupelny společně řešíme rozmístění sanitárního vybavení, rozměry nábytku, obklady, stavební přípravu a návaznost na okolní místnosti. V malém prostoru může několik centimetrů ovlivnit otevírání dveří, sprchové zástěny nebo skříňky.",
      "Před realizací proto doporučujeme potvrdit konkrétní modely vany, sprchy, umyvadla a dalšího vybavení.",
    ],
    link: { text: "Prohlédnout rekonstrukce koupelen →", href: service("rekonstrukce-koupelen-praha") },
  },
  {
    title: "Jednotlivé práce",
    paragraphs: ["Nemusíte objednávat celý projekt. Samostatně lze poptat:"],
    list: [
      { text: "Sádrokartonovou příčku nebo podhled." },
      { text: "Opravu omítek a zdiva." },
      { text: "Odstranění staré podlahy." },
      { text: "Pokládku vinylu, laminátu nebo parket." },
      { text: "Malování pokoje nebo celého bytu." },
      { text: "Bourání nenosné příčky po potřebném ověření." },
      { text: "Demontáž koupelny nebo kuchyně." },
    ],
    after:
      "U samostatné práce předem stanovíme, v jakém stavu prostor přebíráme a jak má být připraven pro následující řemeslo.",
  },
];

const stripPhotos = [
  { src: "byt-obyvaci-prostor-podlaha.webp", alt: "Obývací pokoj s novou podlahou po kompletní rekonstrukci" },
  { src: "koupelna-kvetinovy-obklad-pracka.webp", alt: "Koupelna se sprchovým koutem, závěsným WC a pračkou" },
  { src: "veranda-schody-dlazba.webp", alt: "Nové vstupní schody s dlažbou u rodinného domu" },
];

const afterDemolition = [
  "Poškozený nebo nerovný podklad.",
  "Starší zazdívka.",
  "Nezakreslené vedení instalace.",
  "Prasklina zakrytá předchozí opravou.",
  "Výškový rozdíl mezi místnostmi.",
  "Nesoudržná omítka.",
  "Stopa po dřívějším zatékání.",
];

const occupiedHouseTips = [
  "Informovat správce nebo SVJ.",
  "Ověřit povolené hodiny hlučných prací.",
  "Domluvit používání výtahu.",
  "Uvolnit přístupovou trasu.",
  "Odstranit citlivé předměty.",
  "Určit místo pro materiál.",
  "Zajistit přístup k uzávěrům a rozvaděči.",
];

const processSteps = [
  { title: "Kontaktujete nás", text: "Pošlete adresu, fotografie a stručný popis plánovaných změn." },
  { title: "Přijedeme na prohlídku", text: "Zaměříme prostor a ověříme přístup i logistické podmínky." },
  { title: "Upřesníme zadání", text: "Rozdělíme požadavky na nezbytné práce, praktická zlepšení a vzhledové preference." },
  { title: "Připravíme rozpočet", text: "Nabídka popíše jednotlivé práce a dohodnuté ceny." },
  { title: "Potvrdíme materiály", text: "Ujasníme si, co dodává RekoGrinik a co zajišťuje zákazník." },
  { title: "Naplánujeme pořadí", text: "Hrubé práce musí předcházet povrchům a dokončení." },
  { title: "Provedeme rekonstrukci", text: "Důležité změny a nálezy řešíme průběžně." },
  { title: "Předáme prostor", text: "Výsledek společně projdeme a zkontrolujeme sjednaný rozsah." },
];

const reasons = [
  "Máme skutečnou kontaktní adresu na Praze 3.",
  "Přijedeme přímo do vašeho bytu nebo domu.",
  "Zvládneme kompletní projekt i jednotlivé řemeslo.",
  "Před zahájením připravíme podrobný rozpočet.",
  "Plánujeme návaznosti mezi jednotlivými pracemi.",
  "Chráníme zachované a společné prostory.",
  "Neočekávaný stav nejdříve zdokumentujeme a probereme.",
  "Rekonstrukci můžeme dovést od bourání až po malování.",
];

const faqs = [
  {
    q: "Opravdu sídlíte na Praze 3?",
    a: "Ano. Kontaktní adresa RekoGrinik je Na Vackově 2895/5, 130 00 Praha 3. Osobní schůzku je potřeba domluvit předem.",
  },
  {
    q: "Provádíte rekonstrukce bytů na Žižkově?",
    a: "Ano. Přijímáme kompletní i částečné rekonstrukce bytů na Žižkově, Jarově, Vackově a v dalších částech Prahy 3.",
  },
  {
    q: "Pracujete také na Vinohradech?",
    a: "Ano, obsluhujeme část Vinohrad spadající pod Prahu 3. Dostupnost konkrétního termínu ověříme podle adresy a rozsahu.",
  },
  {
    q: "Zajistíte kompletní rekonstrukci na klíč?",
    a: "Ano. Dohodnutý rozsah může zahrnovat bourání, nové konstrukce, koupelnu, podlahy, opravy povrchů, malování i konečné předání.",
  },
  {
    q: "Mohu objednat pouze jednu práci?",
    a: "Ano. Samostatně lze poptat například sádrokarton, malování, bourání, podlahářské nebo zednické práce.",
  },
  {
    q: "Rekonstruujete také panelové byty?",
    a: "Ano. Postup vždy stanovíme podle skutečného konstrukčního systému, stavu bytu a plánovaných změn.",
  },
  {
    q: "Jak řešíte výtah a společné chodby?",
    a: "Před zahájením ověříme přístup a požadavky správce. Ochranu výtahu, schodiště a přístupové trasy lze zahrnout do nabídky.",
  },
  {
    q: "Co když se po bourání ukáže poškozený podklad?",
    a: "Stav zdokumentujeme, vysvětlíme jeho dopad a navrhneme řešení. Dodatečnou opravu nejdříve cenově a technicky odsouhlasíme.",
  },
  {
    q: "Musím rekonstrukci hlásit SVJ?",
    a: "Plánovanou stavební úpravu uvnitř jednotky je potřeba předem oznámit osobě odpovědné za správu domu. U zásahů do společných nebo nosných částí mohou být požadovány další podklady.",
  },
  {
    q: "Je první prohlídka bezplatná?",
    a: "Ano. Domluvte si termín, abychom mohli prostor zaměřit a připravit odpovídající nabídku.",
  },
];

// Services for the bottom list; the other three are linked in the text.
const related = [
  { label: "Rekonstrukce domů", href: service("rekonstrukce-domu-praha") },
  { label: "Bourací práce", href: service("bouraci-prace-praha") },
  { label: "Zednické práce", href: service("zednicke-prace-praha") },
  { label: "Podlahářské práce", href: service("podlaharske-prace-praha") },
  { label: "Malířské práce", href: service("malirske-prace-praha") },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}#business`,
  name: "RekoGrinik",
  url: SITE_URL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Na Vackově 2895/5",
    postalCode: "130 00",
    addressLocality: "Praha 3",
    addressCountry: "CZ",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 3" },
  knowsAbout: [
    "Rekonstrukce bytů",
    "Rekonstrukce domů",
    "Rekonstrukce koupelen",
    "Sádrokartonářské práce",
    "Malířské práce",
    "Bourací práce",
    "Podlahářské práce",
    "Zednické práce",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce Praha 3",
  serviceType: "Kompletní a částečné rekonstrukce",
  provider: { "@id": `${SITE_URL}#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 3" },
  url: PAGE_URL,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Oblasti působnosti", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce Praha 3", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function Paras({ items }: { items: Para[] }) {
  return items.map((p) =>
    typeof p === "string" ? (
      <p key={p}>{p}</p>
    ) : (
      <p key={p.note} className={byty.scopeNote}>
        {p.note}
      </p>
    ),
  );
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`${styles.bullets} ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function RekonstrukcePraha3Page() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      {[businessJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((json) => (
        <script
          key={json["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}

      {/* Hero */}
      <header id="uvod" className={`${styles.hero} ${styles.heroBlend} ${hub.heroCompact}`}>
        <div className={styles.heroMedia}>
          <img
            fetchPriority="high"
            src={`${IMG}/hero-koupelna-pruhy-celek.webp`}
            alt="Nová koupelna se sprchovým koutem, umyvadlem a pračkou"
            style={{ objectPosition: "50% 55%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/lokace">Oblasti působnosti</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Praha 3</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Rekonstrukce Praha 3<span className={d.srOnly}> – </span>
              <span className={d.h1Sub}>byty, domy a koupelny na klíč</span>
            </h1>
            <p className={styles.heroText}>
              Plánujete rekonstrukci bytu na Žižkově, novou koupelnu na Jarově nebo úpravu
              domu v okolí Vackova? RekoGrinik sídlí na Praze 3 a zajišťuje zde kompletní i
              částečné rekonstrukce.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="praha3_hero_phone"
              >
                Domluvit bezplatnou návštěvu mistra
              </a>
            </div>
            <p className={loc.heroContact}>
              Zavolejte na <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a> a domluvte si
              bezplatnou návštěvu mistra.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <div className={d.introCol} data-reveal>
          <p className={styles.introLead}>
            Postaráme se o celý dohodnutý rozsah – od demontáže původního vybavení a
            odstranění starých povrchů přes nové konstrukce až po podlahy, malování a
            konečné předání. Pokud nepotřebujete kompletní rekonstrukci, můžete si objednat
            také jednu samostatnou práci.
          </p>
          <p className={byty.darkBox} style={{ fontSize: 18 }}>
            Na začátku přijedeme prostor prohlédnout, provedeme potřebné zaměření a
            upřesníme, co má zůstat a co se má změnit. Následně připravíme podrobný
            rozpočet, abyste před zahájením znali sjednaný rozsah i cenu jednotlivých
            položek.
          </p>
        </div>
        <div className={domy.listCol} data-reveal>
          <p className={loc.checkTitle}>Provádíme:</p>
          <ul className={`${loc.checkLight} ${d.checkLinks}`}>
            {offered.map((item) => (
              <li key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local firm */}
      <section id="mistni-firma" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Rekonstrukce od místní firmy z Prahy 3</h2>
              <p className={d.strongLead}>
                Naše kontaktní adresa je {ADDRESS}. Osobní schůzku si domluvte předem – u
                rekonstrukcí je stejně nejdůležitější, abychom přijeli přímo do vašeho bytu
                nebo domu.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                V praxi může být rozdíl mezi rekonstrukcí v činžovním domě pod Vítkovem a
                novějším bytem na Vackově výraznější než rozdíl mezi dvěma stejně velkými
                byty. Proto konečný postup nestanovujeme jen podle výměry nebo fotografie.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>
                Při první návštěvě nekontrolujeme jen místnosti určené k rekonstrukci.
                Zajímá nás také:
              </p>
              <ol className={domy.numList}>
                {firstVisitChecks.map((item, i) => (
                  <li key={item}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section id="lokality" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={loc.areasHead}>
            <h2 className={styles.h2} data-reveal>
              Kde na Praze 3 pracujeme
            </h2>
            <nav aria-label="Čtvrti Prahy 3" className={d.goldChips} data-reveal>
              {areas.map((a) => (
                <a key={a.id} className={d.goldChip} href={`#${a.id}`}>
                  {a.chip}
                </a>
              ))}
            </nav>
          </div>
          <div className={`${byty.scopeGrid} ${d.cardStack}`} data-reveal-group>
            {areas.map((a, i) => (
              <article key={a.id} id={a.id} className={`${byty.scopeCard} ${d.areaCard}`}>
                <span className={byty.scopeNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={byty.scopeTitle}>{a.title}</h3>
                <div className={d.cardWideBody}>
                  <div className={d.cardCol}>
                    <Paras items={a.left} />
                  </div>
                  <div className={d.cardCol}>
                    {a.right && <Paras items={a.right} />}
                    {a.list && (
                      <>
                        <p className={byty.scopeListTitle}>{a.listTitle}</p>
                        <Bullets items={a.list} />
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="sluzby" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
          Co pro vás zrekonstruujeme
        </h2>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush} ${d.needTable}`}>
            <thead>
              <tr>
                <th>Potřeba</th>
                <th>Vhodná služba</th>
              </tr>
            </thead>
            <tbody>
              {needs.map((n) => (
                <tr key={n.need}>
                  <td>{n.need}</td>
                  <td>
                    {n.label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`${d.cols} ${d.tableToCols}`} data-reveal-group>
          {serviceCards.map((c) => (
            <article key={c.title} className={d.colGreen}>
              <h3>{c.title}</h3>
              {c.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {c.listTitle && <p className={d.listTitleGreen}>{c.listTitle}</p>}
              {c.list && (
                <ul className={`${styles.bullets} ${d.bulletsLight}`}>
                  {c.list.map((item) => (
                    <li key={item.text}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
              {c.after && <p>{c.after}</p>}
              {c.link && (
                <div className={d.colLinks}>
                  <Link href={c.link.href}>{c.link.text}</Link>
                </div>
              )}
            </article>
          ))}
        </div>
        <p className={`${d.inlineNote} ${d.inlineLinks}`} data-reveal>
          Potřebujete rozdělit pokoj, vytvořit pracovnu nebo snížit strop? Podívejte se na{" "}
          <Link href={service("sadrokartonarske-prace-praha")}>sádrokartonové příčky a podhledy</Link>.
        </p>
      </section>

      {/* Photo strip — TODO: nahradit skutečnými realizacemi z Prahy 3. Lokální alt texty
          (např. „Kompletní rekonstrukce bytu na Žižkově na Praze 3“) používat jen u fotek
          ze skutečné zakázky. */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={photo(p.src)} alt={p.alt} />
        ))}
      </div>

      {/* Older houses */}
      <section id="starsi-domy" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Co řešíme ve starších domech</h2>
              <p className={d.strongLead}>
                U staršího bytu nelze všechno určit pouze pohledem na hotové povrchy. Pod
                podlahou se mohou nacházet rozdílné skladby a pod obkladem mohou být
                nesoudržné omítky nebo několik vrstev lepidel.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Nález zdokumentujeme a vysvětlíme jeho vliv na další práce. Opravu mimo
                původně dohodnutý rozsah neprovádíme automaticky bez předchozího
                odsouhlasení.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Po demontáži se může ukázat:</p>
              <ul className={loc.checkLight}>
                {afterDemolition.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak probíhá realizace
        </h2>
        <ol className={`${styles.steps} ${d.steps8}`} data-reveal-group>
          {processSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Occupied building */}
      <section id="bydleni-behem-prace" className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={d.darkText} data-reveal>
              <h2 className={styles.h2}>Jak pracujeme v obývaném domě</h2>
              <p className={d.darkLead}>
                Při rekonstrukci v obývaném bytovém domě nejsou důležité jen samotné
                místnosti. Stavební práce ovlivňují také sousedy a společné části.
              </p>
              <p className={byty.scopeNote}>
                Vlastník má plánovanou stavební úpravu uvnitř jednotky předem oznámit osobě
                odpovědné za správu domu.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={`${loc.checkTitle} ${d.goldTitle}`}>
                Před zahájením proto doporučujeme:
              </p>
              <ol className={`${domy.numList} ${d.numDark}`}>
                {occupiedHouseTips.map((item, i) => (
                  <li key={item}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="proc-my" className={styles.container}>
        <h2 className={styles.h2} data-reveal>
          Proč místní volí RekoGrinik
        </h2>
        <ul className={byty.reasonGrid} data-reveal-group>
          {reasons.map((r) => (
            <li key={r} className={`${byty.reasonCard} ${d.reasonWhite}`}>
              {r}
            </li>
          ))}
        </ul>
        {/* TODO: doplnit skutečné zkušenosti zákazníků z Prahy 3 a fotografie projektů se souhlasem s publikováním. Smyšlené reference sem nepatří. */}
      </section>

      {/* Contact point + map */}
      <section id="mapa" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={loc.mapCol} data-reveal>
            <h2 className={styles.h2}>Kontaktní místo a mapa</h2>
            <div className={loc.contactCard}>
              <p className={loc.contactName}>RekoGrinik</p>
              <dl>
                <div className={loc.contactRow}>
                  <dt>Kontaktní adresa</dt>
                  <dd>{ADDRESS}</dd>
                </div>
                <div className={loc.contactRow}>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <p className={loc.mapHint}>
              Osobní schůzku na kontaktní adrese si domluvte předem. Pro zaměření přijedeme
              přímo na místo rekonstrukce.
            </p>
            <a
              className={loc.btnOutlineGreen}
              href="https://www.google.com/maps/dir/?api=1&destination=Na+Vackov%C4%9B+2895%2F5%2C+130+00+Praha+3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Získat trasu v Google Maps →
            </a>
          </div>
          <figure className={d.mapFigure} data-reveal="zoom">
            <iframe
              title="Mapa – RekoGrinik, Na Vackově 2895/5, Praha 3"
              // Embedded by the Google Business Profile place ID (cid) so the listing card shows.
              src="https://maps.google.com/maps?cid=1443832302751861014&z=16&hl=cs&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={loc.map}
            />
            <figcaption className={d.mapCta}>
              <a className={styles.btnGold} href={`tel:${PHONE}`} data-cta="praha3_map_phone">
                Domluvit návštěvu mistra
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${styles.container} ${styles.faq} ${hub.anchor}`}>
        <h2 className={styles.faqTitle} data-reveal>
          Časté otázky
        </h2>
        <div className={styles.faqList} data-reveal-group>
          {faqs.map(({ q, a }) => (
            <details key={q} className={styles.faqItem}>
              <summary>
                {q}
                <span className={styles.faqPlus}>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related pages */}
      <nav aria-label="Služby v této oblasti" className={byty.related} data-reveal-group>
        <span className={byty.relatedLabel}>Služby, které zde nabízíme</span>
        {related.map((r) => (
          <Link key={r.href} href={r.href} className={byty.relatedLink}>
            {r.label}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-umyvadlo-u-dveri.webp`}
          alt="Dokončená koupelna s umyvadlem u dveří"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat rekonstrukci na Praze 3</h2>
            <p>
              Plánujete rekonstrukci bytu, domu nebo koupelny na Žižkově, Jarově, Vackově
              či Vinohradech? Pošlete nám adresu, fotografie a stručný popis požadovaných
              změn.
            </p>
            <p>
              Přijedeme prostor prohlédnout, zkontrolujeme přístup a připravíme podrobný
              rozpočet podle skutečného stavu.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="praha3_contact_zamereni"
            >
              Domluvit bezplatné zaměření
            </Link>
          </div>
          <dl className={styles.contactList} data-reveal-group>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href={`tel:${PHONE}`} className={styles.contactBig}>
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
