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
const PAGE_URL = "https://rekogrinik.cz/lokace/rekonstrukce-praha-8";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const ADDRESS = "Na Vackově 2895/5, 130 00 Praha 3";
const IMG = "/new";

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce Praha 8 | Byty, domy a koupelny | RekoGrinik",
  },
  description:
    "Rekonstrukce Praha 8 pro byty, domy a koupelny na klíč. Karlín, Libeň, Kobylisy i Bohnice. Od zaměření po čisté předání. Domluvte si prohlídku.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

type Item = { text: string };

const offered: Item[] = [
  { text: "Kompletní rekonstrukce bytů na klíč." },
  { text: "Rekonstrukce rodinných domů a jejich interiérů." },
  { text: "Rekonstrukce koupelen a bytových jader." },
  { text: "Bourací a demontážní práce." },
  { text: "Zednické opravy a nové nenosné konstrukce." },
  { text: "Sádrokartonové příčky a podhledy." },
  { text: "Pokládku vinylu, laminátu a parket." },
  { text: "Štukování, malování a dokončovací práce." },
];

const prepChecks = [
  "Z jakých konstrukcí je objekt postaven.",
  "V jakém stavu jsou podlahy a omítky.",
  "Zda je byt po předchozí rekonstrukci.",
  "Které původní prvky mají zůstat.",
  "Jestli se bude měnit dispozice.",
  "Jak funguje přístup do domu.",
  "Zda lze používat výtah pro materiál.",
  "Jaká pravidla stanovuje SVJ nebo správce.",
  "Jestli bude nemovitost během prací obývaná.",
];

// A card column is a run of blocks: plain text, a note set off by a rule, or a titled list.
type Block = string | { note: string } | { listTitle: string; list: string[] };

type Area = { id: string; chip: string; title: string; left: Block[]; right: Block[] };

const areas: Area[] = [
  {
    id: "karlin",
    chip: "Karlín",
    title: "Karlín a Rohanský ostrov",
    left: [
      "V Karlíně přijímáme zakázky z okolí Karlínského náměstí, Křižíkovy, Pernerovy, Invalidovny i Rohanského nábřeží. Lokalita kombinuje starší činžovní zástavbu, administrativní objekty a novější rezidenční projekty.",
      "Ve starším bytě mohou být tématem nerovné omítky, původní podlahové vrstvy nebo několik předchozích stavebních úprav. V novějším domě jde častěji o přizpůsobení standardního interiéru konkrétním potřebám majitele – například o změnu příček, novou podlahu, vestavné niky nebo úpravu koupelny.",
      {
        note: "Akce v okolí Karlínského náměstí nebo Fora Karlín mohou místně ovlivnit provoz. Větší závoz proto plánujeme podle konkrétní adresy a situace, nikoli pouze podle názvu čtvrti.",
      },
    ],
    right: [
      {
        listTitle: "Před zahájením v Karlíně řešíme především:",
        list: [
          "Možnost zastavení a vyložení materiálu.",
          "Provoz v okolí Křižíkovy a Rohanského nábřeží.",
          "Rezervaci nebo ochranu výtahu.",
          "Pravidla recepce či správy budovy.",
          "Ochranu dokončených společných prostor.",
          "Časová omezení hlučných prací.",
          "Odvoz obalů a stavebního odpadu.",
        ],
      },
    ],
  },
  {
    id: "liben",
    chip: "Libeň",
    title: "Libeň, Palmovka a Invalidovna",
    left: [
      "V Libni pracujeme ve starších bytových domech, panelových objektech i modernizovaných interiérech. Zakázky přijímáme například v okolí Palmovky, Zenklovy ulice, Libeňského zámku a Invalidovny.",
      "U staršího bytu předem kontrolujeme, zda se mají zachovat původní dveře, podlahy nebo další prvky. Po odstranění krytin a obkladů se mohou objevit rozdílné skladby, starší opravy či nerovnosti, které před zahájením nebyly viditelné.",
      {
        note: "U rekonstrukce v blízkosti Palmovky bývá důležitá také logistika. Přístup k domu, průjezdnost ulice a možnost krátkodobého zastavení mohou ovlivnit dopravu suti i nového materiálu. Proto si podmínky ověřujeme už při první návštěvě.",
      },
    ],
    right: [
      {
        listTitle: "V Libni často řešíme:",
        list: [
          "Kompletní modernizaci staršího bytu.",
          "Rekonstrukci koupelny a toalety.",
          "Odstranění původních povrchů.",
          "Opravu zdiva a omítek.",
          "Nové sádrokartonové konstrukce.",
          "Vyrovnání podkladů a pokládku podlah.",
          "Dokončovací práce před nastěhováním.",
        ],
      },
    ],
  },
  {
    id: "kobylisy",
    chip: "Kobylisy",
    title: "Kobylisy, Ládví a Střížkov",
    left: [
      "V Kobylisích a okolí Ládví přijímáme kompletní rekonstrukce bytů i jednotlivé práce. V této části Prahy 8 se setkáváme s panelovými a dalšími bytovými domy, ve kterých je důležité respektovat konstrukční systém a pravidla domu.",
      {
        note: "U panelového bytu nelze rozhodovat o odstranění stěny pouze podle její tloušťky nebo zvuku při poklepu. Pokud není charakter konstrukce jednoznačný, musí být nejdříve ověřen z dokumentace nebo odborným posouzením.",
      },
    ],
    right: [
      {
        listTitle: "Častým zadáním bývá:",
        list: [
          "Rekonstrukce bytového jádra.",
          "Propojení koupelny a toalety, pokud to podmínky umožňují.",
          "Nové povrchy v celém bytě.",
          "Výměna podlahových krytin.",
          "Oprava stěn po instalacích.",
          "Sádrokartonové podhledy.",
          "Malování před nastěhováním nebo pronájmem.",
        ],
      },
    ],
  },
  {
    id: "bohnice",
    chip: "Bohnice a Čimice",
    title: "Bohnice, Čimice a Troja",
    left: [
      "V Bohnicích provádíme rekonstrukce panelových i dalších bytů. V Čimicích a okrajových částech Prahy 8 přijímáme také zakázky v rodinných domech.",
      "U bytu v Bohnicích může být hlavním tématem nové jádro, úprava dispozice nebo sjednocení podlah v celém interiéru. U domu v Čimicích se častěji řeší více místností, návaznost podlaží a možnost rozdělit rekonstrukci na etapy.",
    ],
    right: [
      {
        listTitle: "Při práci v rodinném domě plánujeme:",
        list: [
          "Která část zůstane během rekonstrukce přístupná.",
          "Kde bude uložen materiál.",
          "Jak ochráníme vstup, zahradu nebo venkovní dlažbu.",
          "Zda lze zachovat jednu koupelnu v provozu.",
          "Jak budou práce navazovat mezi podlažími.",
          "Kudy se bude odnášet stavební odpad.",
        ],
      },
    ],
  },
];

const needs = [
  { need: "Kompletně proměnit byt", label: "Rekonstrukce bytu na klíč" },
  { need: "Modernizovat celý dům", label: "Rekonstrukce domu nebo realizace po etapách" },
  { need: "Vybudovat novou koupelnu", label: "Rekonstrukce koupelny na klíč" },
  { need: "Odstranit příčku či povrchy", label: "Bourací práce" },
  { need: "Změnit vnitřní uspořádání", label: "Zednické a sádrokartonářské práce" },
  { need: "Obnovit podlahy", label: "Příprava podkladu a pokládka krytiny" },
  { need: "Opravit a dokončit stěny", label: "Omítky, štukování a malování" },
];

type ServiceCard = {
  title: string;
  paragraphs: string[];
  list?: Item[];
  after?: string;
  link?: { text: string; href: string };
};

const serviceCards: ServiceCard[] = [
  {
    title: "Kompletní rekonstrukce",
    paragraphs: [
      "U kompletní zakázky koordinujeme dohodnuté fáze jako jeden projekt. Nejprve potvrdíme budoucí dispozici, vybavení a požadovaný standard. Potom stanovíme pořadí bourání, hrubých úprav, povrchů a kompletace.",
    ],
    link: { text: "Více o rekonstrukcích bytů v Praze →", href: service("rekonstrukce-bytu-praha") },
  },
  {
    title: "Koupelny a bytová jádra",
    paragraphs: [
      "Při rekonstrukci koupelny řešíme nejen obklady, ale také přesné umístění vybavení, stavební připravenost, hydroizolaci a přístup k servisním místům.",
      "U panelového jádra nejdříve ověříme jeho konstrukci a návaznost na společné instalace. U malé koupelny doporučujeme vybrat konkrétní vybavení před definitivním umístěním vývodů.",
    ],
    link: { text: "Prohlédnout rekonstrukce koupelen Praha →", href: service("rekonstrukce-koupelen-praha") },
  },
  {
    title: "Samostatná řemesla",
    paragraphs: ["Objednat si můžete také jen:"],
    list: [
      { text: "Bourání a demontáž." },
      { text: "Zednickou opravu." },
      { text: "Novou nenosnou příčku." },
      { text: "Sádrokartonový podhled." },
      { text: "Vyrovnání podkladu a novou podlahu." },
      { text: "Štukování nebo malování." },
    ],
    after:
      "U samostatné práce předem určíme, v jakém stavu prostor přebíráme a jak bude připraven pro dalšího dodavatele.",
  },
];

const stripPhotos = [
  { src: "koupelna-dubova-skrinka.webp", alt: "Koupelna s dubovou skříňkou pod umyvadlem" },
  { src: "koupelna-kamen.webp", alt: "Koupelna s obkladem v dekoru kamene" },
  { src: "wc-a-sprcha.webp", alt: "Koupelna se sprchou a závěsným WC" },
];

const buildingTypes = [
  {
    title: "Starší činžovní byt",
    text: "Před zahájením kontrolujeme zejména původní omítky, podlahy, dveřní otvory a starší instalační zásahy. Ne všechno staré je nutné odstranit – zachováme prvky, které jsou v dobrém stavu a odpovídají vašemu záměru.",
  },
  {
    title: "Panelový byt",
    text: "Zaměřujeme se na konstrukční systém, stav bytového jádra, podlahové vrstvy a pravidla správce domu. Zásah do nejasné konstrukce se neprovádí bez potřebného ověření.",
  },
  {
    title: "Novější rezidenční projekt",
    text: "Důležitá bývá ochrana hotových chodeb a výtahu, provozní řád domu a rezervace času pro dopravu materiálu. Upravujeme zde například standardní koupelny, podlahy, příčky a dokončení stěn.",
  },
  {
    title: "Rodinný dům",
    text: "Plánujeme návaznost místností a podlaží, skladování materiálu i případné rozdělení realizace na etapy. Pokud se v domě bydlí, určíme, které části musí zůstat přístupné.",
  },
];

const protection = [
  "Zakrytí podlah a vstupních dveří.",
  "Ochranu výtahu a schodiště.",
  "Oddělení prašné pracovní zóny.",
  "Průběžný odnos stavebního odpadu.",
  "Uložení materiálu bez omezení sousedů.",
  "Dodržování pravidel pro hlučné práce.",
  "Úklid přístupové trasy.",
  "Koordinaci větších dodávek.",
];

const processSteps = [
  { title: "Pošlete adresu a fotografie", text: "Uveďte čtvrť, typ nemovitosti a hlavní požadavky." },
  { title: "Domluvíme prohlídku", text: "Mistr přijede do Karlína, Libně, Kobylis nebo jiné části Prahy 8." },
  { title: "Zaměříme prostor", text: "Zkontrolujeme také patro, výtah a přístup." },
  { title: "Upřesníme výsledek", text: "Stanovíme, co zůstane, co se odstraní a jaké práce budou navazovat." },
  { title: "Připravíme rozpočet", text: "Nabídka rozdělí realizaci na srozumitelné položky." },
  { title: "Potvrdíme materiály", text: "Ujasníme, co dodává RekoGrinik a co zajistí zákazník." },
  { title: "Naplánujeme práce", text: "Domluvíme pořadí, přístup a pravidla domu." },
  { title: "Provedeme realizaci", text: "Neočekávané nálezy nejdříve zdokumentujeme a probereme." },
  { title: "Předáme hotový rozsah", text: "Výsledek společně zkontrolujeme." },
];

const reasons = [
  "Zajišťujeme kompletní rekonstrukce i dílčí zakázky.",
  "Přijedeme na zaměření přímo do Prahy 8.",
  "Připravíme podrobný rozpočet před zahájením.",
  "Myslíme na návaznost jednotlivých řemesel.",
  "Chráníme zachované i společné prostory.",
  "Rozlišujeme viditelný stav od problémů, které se mohou ukázat až po demontáži.",
  "Neprovádíme dodatečné práce bez předchozí domluvy.",
  "Rekonstrukci můžeme dovést od bourání po malování a předání.",
];

const servedAreas = [
  "Karlín",
  "Libeň",
  "Kobylisy",
  "Bohnice",
  "Čimice",
  "Střížkov (příslušná část)",
  "Troja (příslušná část)",
];

const faqs = [
  {
    q: "Provádíte rekonstrukce bytů v Karlíně?",
    a: "Ano. Realizujeme zde kompletní rekonstrukce i samostatné práce. Před nabídkou ověříme přístup, parkování, pravidla domu a rozsah projektu.",
  },
  {
    q: "Jezdíte také do Kobylis a Bohnic?",
    a: "Ano. V Kobylisích a Bohnicích rekonstruujeme byty, koupelny a bytová jádra a provádíme také jednotlivá řemesla.",
  },
  {
    q: "Rekonstruujete rodinné domy v Čimicích?",
    a: "Ano. Kompletní nebo etapovou rekonstrukci domu připravíme podle jeho stavu, rozsahu a toho, zda se v něm bude během prací bydlet.",
  },
  {
    q: "Máte pobočku v Praze 8?",
    a: "Ne. Kontaktní adresa RekoGrinik je Na Vackově 2895/5 v Praze 3. Praha 8 je oblast, kam za zákazníky vyjíždíme.",
  },
  {
    q: "Zajistíte rekonstrukci od bourání po malování?",
    a: "Ano. Dohodnutý rozsah může zahrnovat demontáže, nové konstrukce, opravy povrchů, koupelnu, podlahy, malování a konečné předání.",
  },
  {
    q: "Provádíte také jen jednu práci?",
    a: "Ano. Můžete si objednat sádrokartonářské, malířské, bourací, podlahářské nebo zednické práce bez kompletní rekonstrukce.",
  },
  {
    q: "Umíte rekonstruovat panelový byt?",
    a: "Ano. Nejdříve ale ověříme konstrukční řešení bytu, stav jádra a požadavky správce. Do nejasné nebo nosné konstrukce nezasahujeme bez potřebných podkladů.",
  },
  {
    q: "Jak chráníte výtah a chodby?",
    a: "Ochranu společných prostor navrhneme podle pravidel domu a přístupové trasy. Může zahrnovat zakrytí podlah, stěn výtahu a dalších citlivých míst.",
  },
  {
    q: "Co když se po demontáži objeví poškozená omítka nebo podlaha?",
    a: "Stav zdokumentujeme, vysvětlíme jeho dopad a připravíme řešení. Práce mimo původní rozsah nejdříve odsouhlasíme.",
  },
  {
    q: "Je první návštěva zdarma?",
    a: "Ano. Termín návštěvy domluvíme předem a na místě upřesníme rozsah potřebný pro přípravu nabídky.",
  },
];

// Services for the bottom list; the other three are linked in the text.
const related = [
  { label: "Bourací práce", href: service("bouraci-prace-praha") },
  { label: "Zednické práce", href: service("zednicke-prace-praha") },
  { label: "Sádrokartonářské práce", href: service("sadrokartonarske-prace-praha") },
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
  areaServed: [
    { "@type": "AdministrativeArea", name: "Praha 8" },
    ...["Karlín", "Libeň", "Kobylisy", "Bohnice", "Čimice"].map((name) => ({ "@type": "Place", name })),
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce Praha 8",
  description: "Kompletní a částečné rekonstrukce bytů, domů a koupelen v Praze 8.",
  serviceType: "Rekonstrukce na klíč",
  provider: { "@id": `${SITE_URL}#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 8" },
  url: PAGE_URL,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Oblasti působnosti", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce Praha 8", item: PAGE_URL },
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

function Blocks({ items }: { items: Block[] }) {
  return items.map((b) => {
    if (typeof b === "string") return <p key={b}>{b}</p>;
    if ("note" in b)
      return (
        <p key={b.note} className={byty.scopeNote}>
          {b.note}
        </p>
      );
    return (
      <div key={b.listTitle} className={d.cardCol}>
        <p className={byty.scopeListTitle}>{b.listTitle}</p>
        <ul className={styles.bullets}>
          {b.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  });
}

export default function RekonstrukcePraha8Page() {
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
          src={`${IMG}/koupelna-mramor-vana.webp`}
          alt="Koupelna s vanou a mramorovým obkladem po rekonstrukci"
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
            <span aria-current="page">Praha 8</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Rekonstrukce Praha 8<span className={d.srOnly}> – </span>
              <span className={d.h1Sub}>byty, domy a koupelny na klíč</span>
            </h1>
            <p className={styles.heroText}>
              Plánujete rekonstrukci bytu v Karlíně, novou koupelnu v Kobylisích nebo
              modernizaci domu v Čimicích? RekoGrinik provádí kompletní i částečné
              rekonstrukce v Praze 8. Přijedeme přímo na místo, prostor zaměříme a
              navrhneme postup podle skutečného stavu nemovitosti.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="praha8_hero_phone"
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
      <section className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <div className={d.introCol} data-reveal>
          <p className={styles.introLead}>
            Zajistíme kompletní realizaci od prvních demontáží až po podlahy, malování a
            předání. Pokud nepotřebujete rekonstruovat celý interiér, můžete si objednat
            také jedno konkrétní řemeslo.
          </p>
          <p className={byty.darkBox} style={{ fontSize: 18 }}>
            Naším cílem není doporučit stejný postup pro každou nemovitost. Jinak se
            připravuje rekonstrukce staršího bytu u Palmovky, jinak panelového bytu v
            Bohnicích a jinak novější jednotky na Rohanském nábřeží.
          </p>
        </div>
        <div className={domy.listCol} data-reveal>
          <p className={loc.checkTitle}>V Praze 8 provádíme:</p>
          <ul className={`${loc.checkLight} ${d.checkLinks}`}>
            {offered.map((item) => (
              <li key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* One district, many renovation types */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Jedna městská část, různé typy rekonstrukcí</h2>
              <p className={d.strongLead}>
                Praha 8 spojuje čtvrti s velmi odlišným charakterem. Karlín a část Libně
                přímo navazují na centrum, zatímco Kobylisy, Bohnice nebo Čimice mají jiné
                typy zástavby i podmínky pro dopravu materiálu.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Stejně velké byty tak mohou vyžadovat zcela jiný rozsah prací. Konečnou
                nabídku proto připravujeme až po upřesnění zadání a posouzení prostoru.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>
                Rozdíl není pouze ve stáří domu. Pro přípravu zakázky potřebujeme vědět:
              </p>
              <ol className={domy.numList}>
                {prepChecks.map((item, i) => (
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
              Kde v Praze 8 pracujeme
            </h2>
            <nav aria-label="Čtvrti Prahy 8" className={d.goldChips} data-reveal>
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
                    <Blocks items={a.left} />
                  </div>
                  <div className={d.cardCol}>
                    <Blocks items={a.right} />
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* TODO: Střížkov i Troja zasahují do více městských částí. Realizace a případové studie označujte jako „Praha 8“ jen podle skutečné adresy. */}
        </div>
      </section>

      {/* Services */}
      <section id="sluzby" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
          Co v Praze 8 realizujeme
        </h2>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush} ${d.needTable}`}>
            <thead>
              <tr>
                <th>Váš záměr</th>
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
          Rekonstruujete rodinný dům v Kobylisích nebo Bohnicích? Přečtěte si, jak postupujeme
          při{" "}
          <Link href={service("rekonstrukce-domu-praha")}>rekonstrukci celého domu</Link>.
        </p>
      </section>

      {/* Photo strip — TODO: nahradit skutečnými realizacemi z Prahy 8. Lokální alt texty
          (např. „Kompletní rekonstrukce staršího bytu v Karlíně v Praze 8“) používat jen
          u doložené realizace. */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={`${IMG}/${p.src}`} alt={p.alt} />
        ))}
      </div>

      {/* Building types */}
      <section className={styles.white}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
            Jak přistupujeme k různým domům
          </h2>
          <div className={d.cols} data-reveal-group>
            {buildingTypes.map((t, i) => (
              <article key={t.title} className={d.colGreen}>
                <span className={d.colNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics and protection */}
      <section className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={d.darkText} data-reveal>
              <h2 className={styles.h2}>Logistika a ochrana domu</h2>
              <p className={d.darkLead}>
                Dobře provedená rekonstrukce nesmí zbytečně poškodit okolní prostory. Při
                vstupní návštěvě proto procházíme celou cestu od vozidla až do místa
                realizace.
              </p>
              <p className={byty.scopeNote}>
                Pokud se během rekonstrukce v části bytu nebo domu bydlí, domluvíme hranici
                pracovní zóny. U rozsáhlých demontáží však může být bezpečnější dotčený
                prostor dočasně uvolnit.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={`${loc.checkTitle} ${d.goldTitle}`}>Podle zakázky řešíme:</p>
              <ol className={`${domy.numList} ${d.numDark}`}>
                {protection.map((item, i) => (
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

      {/* Process */}
      <section id="postup" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak probíhá spolupráce
        </h2>
        <ol className={`${styles.steps} ${d.steps9}`} data-reveal-group>
          {processSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
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
        {/* TODO: Nevkládat smyšlené výroky zákazníků. Doplnit blok „Realizace v Praze 8“ se skutečnými projekty (lokalita, typ nemovitosti, výchozí stav, rozsah, komplikace, řešení, fotky před/během/po). */}
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
            <p className={`${loc.mapHint} ${d.inlineLinks}`}>
              Praha 8 je naší výjezdovou oblastí. Nemáme zde samostatnou pobočku a za
              zákazníky přijíždíme přímo na místo plánované rekonstrukce. Kontaktní místo
              najdete v sousední <Link href="/lokace/rekonstrukce-praha-3">Praze 3</Link>.
            </p>
            <div className={d.tagBlock}>
              <p className={d.tagLabel}>Obsluhované lokality v Praze 8</p>
              <ul className={d.greenTags}>
                {servedAreas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <a
              className={loc.btnOutlineGreen}
              href="https://www.google.com/maps/search/?api=1&query=Na+Vackov%C4%9B+2895%2F5%2C+130+00+Praha+3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobrazit kontaktní místo v Google Maps →
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
              <a className={styles.btnGold} href={`tel:${PHONE}`} data-cta="praha8_map_phone">
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
          src={`${IMG}/koupelna-zrcadlo.webp`}
          alt="Dokončená koupelna se zrcadlem"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat rekonstrukci v Praze 8</h2>
            <p>
              Plánujete rekonstrukci bytu, domu nebo koupelny v Karlíně, Libni,
              Kobylisích, Bohnicích či Čimicích? Pošlete nám adresu, několik fotografií a
              stručný popis požadované změny.
            </p>
            <p>
              Přijedeme prostor zaměřit, zkontrolujeme přístup a připravíme nabídku podle
              skutečného stavu a dohodnutého výsledku.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="praha8_contact_zamereni"
            >
              Domluvit bezplatné zaměření v Praze 8
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
