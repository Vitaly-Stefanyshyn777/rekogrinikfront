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
const PAGE_URL = "https://rekogrinik.cz/lokace/rekonstrukce-praha-1";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const ADDRESS = "Na Vackově 2895/5, 130 00 Praha 3";
const IMG = "/new";

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce Praha 1 | Byty, domy, koupelny | RekoGrinik",
  },
  description:
    "Rekonstrukce Praha 1 pro byty, domy a koupelny na klíč. Staré Město, Nové Město i Malá Strana. Od bourání po malování. Domluvte si bezplatné zaměření.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const offered = [
  { text: "Kompletní rekonstrukce bytů." },
  { text: "Rekonstrukce domů a dalších interiérů." },
  { text: "Rekonstrukce koupelen a bytových jader." },
  { text: "Bourací a demontážní práce." },
  { text: "Nové příčky a sádrokartonové konstrukce." },
  { text: "Zednické práce a opravy omítek." },
  { text: "Pokládku vinylu, laminátu a parket." },
  { text: "Malování, štukování a dokončovací práce." },
];

const centreChecks = [
  "Možnost zastavení a vykládky materiálu.",
  "Vzdálenost mezi vozidlem a domem.",
  "Patro a dostupnost výtahu.",
  "Šířku průchodu, schodiště a dveří.",
  "Ochranu společných chodeb.",
  "Pravidla domu pro hlučné práce.",
  "Místo pro dočasné uložení materiálu.",
  "Způsob odnosu a odvozu odpadu.",
  "Zachování původních prvků interiéru.",
  "Případná omezení památkové ochrany.",
];

const areas = [
  {
    id: "stare-mesto",
    title: "Staré Město a Josefov",
    paragraphs: [
      "Na Starém Městě a v Josefově přijímáme poptávky na kompletní rekonstrukce i jednotlivé práce. V okolí Staroměstského náměstí, Pařížské, Dlouhé, Národní nebo náměstí Republiky počítáme s hustým pěším provozem, návštěvníky centra a omezenými možnostmi delšího stání.",
    ],
    note: "V historickém objektu se do původních konstrukcí nezasahuje automaticky. Nejdříve ověříme rozsah plánovaných prací a upozorníme na situace, které vyžadují projekt, statika, souhlas správce nebo stanovisko příslušného orgánu.",
    listTitle: "U rekonstrukcí v této části Prahy je důležité předem naplánovat:",
    list: [
      "Čas příjezdu a vyložení materiálu.",
      "Přístup přes společné části domu.",
      "Ochranu historických či citlivých povrchů.",
      "Odnos suti bez poškození schodiště.",
      "Skladování materiálu uvnitř bytu.",
      "Komunikaci se správcem domu.",
    ],
  },
  {
    id: "nove-mesto",
    title: "Nové Město",
    paragraphs: [
      "V části Nového Města spadající do Prahy 1 pracujeme například v okolí Václavského náměstí, Národní třídy, Karlova náměstí a ulic navazujících na centrum.",
      "Zde se mohou potkávat byty k vlastnímu bydlení, dlouhodobé pronájmy, kancelářské interiéry a jednotky, které už prošly několika přestavbami. Před odstraněním starých povrchů proto potřebujeme vědět, co má v prostoru zůstat a na jaký standard má být interiér dokončen.",
    ],
    note: "V okolí Václavského náměstí a Národní třídy plánujeme dovoz materiálu s ohledem na místní provoz. Přesný postup vždy přizpůsobíme konkrétní ulici a možnostem domu.",
    listTitle: "Pomůžeme například s:",
    list: [
      "Kompletní proměnou staršího bytu.",
      "Úpravou dispozice pomocí nových příček.",
      "Rekonstrukcí koupelny.",
      "Odstraněním starých povrchů.",
      "Opravou zdiva a omítek.",
      "Novými podlahami.",
      "Malováním před nastěhováním nebo pronájmem.",
    ],
  },
  {
    id: "mala-strana",
    title: "Malá Strana a Hradčany",
    paragraphs: [
      "Na Malé Straně a Hradčanech bývají zásadní přístupové podmínky a ochrana původního charakteru interiéru. Úzké ulice, turistický provoz a omezené možnosti parkování mohou ovlivnit dopravu materiálu i odvoz odpadu.",
    ],
    note: "Citlivě zacházíme s původními podlahami, dveřmi, ostěním a dalšími částmi, které nemají být rekonstrukcí dotčené. Před bouráním musí být jednoznačně označeno, co se odstraní a co naopak chráníme.",
    listTitle:
      "U domu poblíž Malostranského náměstí, Újezdu, Kampy, Nerudovy ulice nebo Pohořelce předem kontrolujeme:",
    list: [
      "Kde lze bezpečně složit materiál.",
      "Jak dlouhá je odnosová trasa.",
      "Zda je v domě výtah.",
      "Které prvky interiéru musí zůstat zachované.",
      "Jestli jsou plánované úpravy pouze interiérové.",
      "Jaké podmínky stanovuje správce nebo vlastník domu.",
    ],
  },
];

const needs = [
  { need: "Kompletní proměna staršího bytu", label: "Rekonstrukce bytu na klíč" },
  { need: "Nová koupelna nebo bytové jádro", label: "Rekonstrukce koupelny" },
  { need: "Odstranění příčky a starých povrchů", label: "Bourací práce" },
  { need: "Nové příčky nebo podhledy", label: "Zednické a sádrokartonářské práce" },
  { need: "Obnova starých stěn", label: "Opravy omítek, štukování a malování" },
  { need: "Nová krytina v celém bytě", label: "Podlahářské práce" },
  { need: "Dokončení bytu před nastěhováním", label: "Malování, lišty a závěrečné úpravy" },
];

const stripPhotos = [
  { src: "koupelna-bojler-bourani.webp", alt: "Odstraněný obklad a původní instalace během bouracích prací" },
  { src: "koupelna-mramor-vana.webp", alt: "Dokončená koupelna s vanou a obkladem v mramorovém dekoru" },
  { src: "koupelna-dubova-skrinka.webp", alt: "Koupelna s dubovou skříňkou pod umyvadlem" },
];

const visitChecks = [
  "Praskliny a nesoudržné omítky.",
  "Rozdíly ve výškách podlah.",
  "Stav okolí instalačních prostupů.",
  "Starší zazdívky a dodatečné úpravy.",
  "Viditelné stopy po vlhkosti.",
  "Rovinnost stěn určených pod nábytek nebo obklady.",
  "Napojení nových a zachovaných povrchů.",
];

const logistics = [
  {
    title: "Přístup do domu",
    text: "Před zahájením si ověříme patro, výtah, šířku dveří a možnost manipulace s delšími nebo těžšími prvky. Materiál objednáváme s ohledem na skutečnou cestu od vozidla až do bytu.",
  },
  {
    title: "Vykládka materiálu",
    text: "Staré Město, Josefov, Malá Strana i okolí Václavského náměstí mají rozdílné dopravní podmínky. Čas a způsob vykládky proto nepotvrzujeme obecně pro celou Prahu 1, ale podle konkrétní adresy.",
  },
  {
    title: "Ochrana domu",
    text: "Podle potřeb zakryjeme trasu přes chodbu, schodiště nebo výtah. Citlivé povrchy chráníme před nárazy, prachem a stavebním odpadem.",
  },
  {
    title: "Hlučné práce",
    text: "Bourání a vrtání plánujeme v souladu s pravidly konkrétního domu. Před zahájením doporučujeme zjistit, zda SVJ nebo správce nestanovuje vlastní časový režim.",
  },
  {
    title: "Odvoz odpadu",
    text: "Suť a demontované materiály průběžně třídíme podle dohodnutého způsobu odvozu. Materiál nenecháváme bez domluvy ve společných chodbách ani na veřejném prostranství.",
  },
];

const processSteps = [
  { title: "Pošlete nám poptávku", text: "Uveďte adresu, typ nemovitosti, požadované práce a plánovaný termín." },
  { title: "Připojíte fotografie", text: "Pomůže celkový pohled na místnost, detaily poškození a půdorys, pokud ho máte." },
  { title: "Přijedeme na místo", text: "Prostor zaměříme a zkontrolujeme přístup, výtah i možnosti vykládky." },
  { title: "Upřesníme rozsah", text: "Označíme zachované konstrukce, bourané části a požadované dokončení." },
  { title: "Připravíme rozpočet", text: "Nabídka rozdělí práci na konkrétní a srozumitelné položky." },
  { title: "Naplánujeme realizaci", text: "Potvrdíme materiály, pořadí profesí a pravidla domu." },
  { title: "Provedeme práce", text: "Důležité změny nebo neočekávané nálezy řešíme před pokračováním." },
  { title: "Prostor předáme", text: "Hotový rozsah společně zkontrolujeme." },
];

const reasons = [
  "Zajistíme kompletní rekonstrukci i samostatnou práci.",
  "Přijedeme přímo na adresu realizace v Praze 1.",
  "Před bouráním označíme zachované a odstraňované části.",
  "Připravíme položkový rozsah prací.",
  "Koordinujeme návaznost jednotlivých profesí.",
  "Myslíme na přístup, vykládku a společné prostory.",
  "Řešíme rekonstrukci od demontáže po finální malování.",
  "Netvrdíme, že máme v Praze 1 neexistující provozovnu.",
];

const faqs = [
  {
    q: "Provádíte rekonstrukce na Starém Městě?",
    a: "Ano. Před přípravou nabídky ověříme adresu, přístup do domu, možnost vykládky a pravidla konkrétního objektu.",
  },
  {
    q: "Přijedete také na Malou Stranu a Hradčany?",
    a: "Ano. V těchto lokalitách je potřeba věnovat zvýšenou pozornost dopravě materiálu, parkování, úzkým průchodům a případné památkové ochraně.",
  },
  {
    q: "Máte provozovnu v Praze 1?",
    a: "Ne. Kontaktní adresa RekoGrinik je Na Vackově 2895/5 v Praze 3. Praha 1 je oblast, kam vyjíždíme za zákazníky.",
  },
  {
    q: "Rekonstruujete historické byty?",
    a: "Ano, možnost a rozsah realizace ale závisí na konkrétním domě. U chráněných prvků nebo významnějších zásahů musí být předem ověřeny příslušné podmínky.",
  },
  {
    q: "Zajistíte kompletní rekonstrukci bytu?",
    a: "Ano. Dohodnutý rozsah může začít demontáží a bouráním a pokračovat přes nové konstrukce, povrchy a podlahy až po malování a předání.",
  },
  {
    q: "Mohu objednat jen jednu práci?",
    a: "Ano. Samostatně lze poptat bourací, zednické, sádrokartonářské, podlahářské nebo malířské práce.",
  },
  {
    q: "Jak řešíte parkování a vykládku v centru?",
    a: "Podmínky prověříme podle konkrétní ulice. Předem domluvíme čas příjezdu, velikost vozidla a cestu materiálu do bytu.",
  },
  {
    q: "Ochráníte výtah a schodiště?",
    a: "Ochranu společných prostor lze zahrnout do rozsahu zakázky. Konkrétní požadavky projdeme se zákazníkem a případně se správcem domu.",
  },
  {
    q: "Co když se po bourání objeví skrytý problém?",
    a: "Nález zdokumentujeme, vysvětlíme jeho vliv a domluvíme řešení. Práce mimo odsouhlasený rozsah neprovádíme automaticky bez předchozí dohody.",
  },
  {
    q: "Musím informovat SVJ nebo správce?",
    a: "Plánované stavební úpravy v bytě je potřeba předem projednat nebo oznámit podle jejich charakteru a pravidel domu. U zásahů do společných či nosných konstrukcí mohou být nutné další podklady.",
  },
];

// Services for the bottom list; the other three are linked in the text.
const related = [
  { label: "Rekonstrukce koupelen", href: service("rekonstrukce-koupelen-praha") },
  { label: "Rekonstrukce domů", href: service("rekonstrukce-domu-praha") },
  { label: "Bourací práce", href: service("bouraci-prace-praha") },
  { label: "Sádrokartonářské práce", href: service("sadrokartonarske-prace-praha") },
  { label: "Podlahářské práce", href: service("podlaharske-prace-praha") },
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
  areaServed: { "@type": "AdministrativeArea", name: "Praha 1" },
  knowsAbout: [
    "Rekonstrukce bytů",
    "Rekonstrukce domů",
    "Rekonstrukce koupelen",
    "Bourací práce",
    "Sádrokartonářské práce",
    "Zednické práce",
    "Podlahářské práce",
    "Malířské práce",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce Praha 1",
  serviceType: "Kompletní a částečné rekonstrukce",
  provider: { "@id": `${SITE_URL}#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 1" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Oblasti působnosti", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce Praha 1", item: PAGE_URL },
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function RekonstrukcePraha1Page() {
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
      <header className={`${styles.hero} ${hub.heroCompact}`}>
        <img
          fetchPriority="high"
          src={`${IMG}/koupelna-bourani.webp`}
          alt="Bourací práce před rekonstrukcí koupelny"
          className={styles.cover}
          style={{ objectPosition: "50% 50%" }}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/lokace">Oblasti působnosti</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Praha 1</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Rekonstrukce Praha 1</h1>
            <h2 className={styles.heroSub}>Byty, domy a koupelny na klíč</h2>
            <p className={styles.heroText}>
              Plánujete rekonstrukci bytu na Starém Městě, nové koupelny poblíž
              Václavského náměstí nebo kompletní úpravu interiéru na Malé Straně? V
              centru Prahy nestačí dobře zvládnout samotné řemeslo. Důležitá je také
              příprava zásobování, ochrana společných prostor, pravidla domu a
              ohleduplnost k sousedům.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="praha1_hero_phone"
              >
                Domluvit prohlídku prostoru
              </a>
            </div>
            <p className={loc.heroContact}>
              Zavolejte na <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a> a domluvte si
              prohlídku prostoru.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <div className={d.introCol} data-reveal>
          <p className={styles.introLead}>
            RekoGrinik provádí rekonstrukce v Praze 1 od prvotního zaměření přes
            bourací a přípravné práce až po finální malování a předání. Můžete nás
            oslovit kvůli kompletní rekonstrukci na klíč i jedné konkrétní práci.
          </p>
          <p className={byty.darkBox} style={{ fontSize: 18 }}>
            Nemáme pobočku v Praze 1 a netvrdíme opak. Naše kontaktní adresa je v Praze
            3 a za zákazníky v Praze 1 přijíždíme přímo na místo plánované
            rekonstrukce.
          </p>
        </div>
        <div className={domy.listCol} data-reveal>
          <p className={loc.checkTitle}>Realizujeme:</p>
          <ul className={`${loc.checkLight} ${d.checkLinks}`}>
            {offered.map((item) => (
              <li key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Centre rules */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Rekonstrukce v centru má svá pravidla</h2>
              <p className={d.strongLead}>
                Byt v centru může mít vysoké stropy, masivní zdivo, původní dřevěné
                podlahy nebo několik vrstev starších úprav. Stav konstrukcí však
                neposuzujeme pouze podle adresy a stáří domu. O skutečném rozsahu
                rozhodne prohlídka konkrétního prostoru.
              </p>
              <p>
                Některé domy poblíž Staroměstského náměstí, Malostranského náměstí nebo
                Hradčan vyžadují podstatně pečlivější logistiku než novější bytový
                projekt. Materiál nemusí být možné složit přímo před domem a větší kusy
                se nemusí vejít do výtahu ani na schodiště.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Proto se na přístup a manipulaci ptáme ještě před přípravou finální
                nabídky.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>
                Před zahájením rekonstrukce v Praze 1 řešíme zejména:
              </p>
              <ol className={domy.numList}>
                {centreChecks.map((item, i) => (
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
              Kde v Praze 1 pracujeme
            </h2>
            <nav aria-label="Čtvrti Prahy 1" className={d.goldChips} data-reveal>
              {areas.map((a) => (
                <a key={a.id} className={d.goldChip} href={`#${a.id}`}>
                  {a.title}
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
                    {a.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <p className={byty.scopeNote}>{a.note}</p>
                  </div>
                  <div className={d.cardCol}>
                    <p className={byty.scopeListTitle}>{a.listTitle}</p>
                    <Bullets items={a.list} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we do here */}
      <section id="sluzby" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
          Co v Praze 1 realizujeme
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
        <div className={d.afterTable}>
          <p data-reveal>
            U kompletní rekonstrukce koordinujeme dohodnuté práce jako jeden celek. U
            dílčí zakázky si přesně stanovíme, v jakém stavu prostor přebíráme a jak má
            vypadat při předání.
          </p>
          <p className={d.inlineLinks} data-reveal>
            Ve starších domech v centru často začínáme opravou omítek a zdiva, na což
            se zaměřují naše{" "}
            <Link href={service("zednicke-prace-praha")}>zednické práce</Link>. Štuky a finální povrchy
            obnovíme v rámci{" "}
            <Link href={service("malirske-prace-praha")}>malířských prací a štukování</Link>. Plánujete
            celkovou proměnu? Přečtěte si, jak probíhá{" "}
            <Link href={service("rekonstrukce-bytu-praha")}>rekonstrukce bytu na klíč</Link>.
          </p>
        </div>
      </section>

      {/* Photo strip */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={`${IMG}/${p.src}`} alt={p.alt} />
        ))}
      </div>

      {/* Older flats */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Rekonstrukce staršího bytu</h2>
              <p className={d.strongLead}>
                Ve starším bytě se skutečný stav části konstrukcí často ukáže až po
                odstranění obkladu, původní podlahy nebo nesoudržné omítky. Proto
                rozlišujeme mezi tím, co lze spolehlivě ocenit předem, a opravami
                závislými na odkrytém stavu.
              </p>
              <p>
                Nález po demontáži automaticky neopravujeme bez domluvy. Stav
                zdokumentujeme, vysvětlíme dopad na další práce a navrhneme řešení.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                U původních parket, dveří nebo dalších hodnotných prvků musí být předem
                rozhodnuto, zda se mají odstranit, renovovat nebo pouze chránit. Tuto
                informaci zaznamenáme do rozsahu zakázky, aby nedošlo k nedorozumění
                během bourání.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Během vstupní prohlídky sledujeme například:</p>
              <ul className={loc.checkLight}>
                {visitChecks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local logistics */}
      <section className={styles.dark}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
            Jak řešíme místní logistiku
          </h2>
          <div className={d.cols} data-reveal-group>
            {logistics.map((l) => (
              <article key={l.title} className={d.colGold}>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.white} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={styles.h2} data-reveal>
            Jak probíhá spolupráce
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
        </div>
      </section>

      {/* Why us */}
      <section className={styles.container}>
        <h2 className={styles.h2} data-reveal>
          Proč si vybrat RekoGrinik
        </h2>
        <ul className={byty.reasonGrid} data-reveal-group>
          {reasons.map((r) => (
            <li key={r} className={`${byty.reasonCard} ${d.reasonWhite}`}>
              {r}
            </li>
          ))}
        </ul>
        {/* TODO: nahradit skutečnou případovou studií z Prahy 1 (lokalita, typ domu, rozsah, komplikace, řešení, fotografie před a po), jakmile bude k dispozici souhlas zákazníka. */}
      </section>

      {/* Contact point + map */}
      <section id="mapa" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={loc.mapCol} data-reveal>
            <h2 className={styles.h2}>Kontaktní adresa a mapa</h2>
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
              Kontaktní adresa se nachází v Praze 3. Do Prahy 1 přijíždíme na zaměření a
              realizaci za zákazníkem. Osobní návštěvu na adrese Na Vackově si domluvte
              předem.
            </p>
            <a
              className={loc.btnOutlineGreen}
              href="https://www.google.com/maps/dir/?api=1&destination=Na+Vackov%C4%9B+2895%2F5%2C+130+00+Praha+3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Získat trasu ke kontaktní adrese →
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
            <figcaption className={d.mapCaption}>
              Obsluhujeme celou Prahu 1 – přijedeme přímo na místo rekonstrukce.
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
          src={`${IMG}/koupelna-mramor-vana.webp`}
          alt="Koupelna s vanou po dokončené rekonstrukci"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat rekonstrukci v Praze 1</h2>
            <p>
              Plánujete rekonstrukci na Starém Městě, Novém Městě, Josefově, Malé
              Straně nebo Hradčanech? Pošlete nám adresu, fotografie a stručný popis
              toho, co chcete změnit.
            </p>
            <p>
              Přijedeme prostor prohlédnout, zaměříme důležité části a zkontrolujeme
              místní podmínky. Následně připravíme nabídku podle skutečného rozsahu
              prací.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="praha1_contact_poptavka"
            >
              Poptat rekonstrukci v Praze 1
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
