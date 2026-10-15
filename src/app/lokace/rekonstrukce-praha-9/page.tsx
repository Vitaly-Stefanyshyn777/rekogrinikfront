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
const PAGE_URL = "https://rekogrinik.cz/lokace/rekonstrukce-praha-9";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const ADDRESS = "Na Vackově 2895/5, 130 00 Praha 3";
const IMG = "/new";

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce Praha 9 | Domy, byty a koupelny na klíč | RekoGrinik",
  },
  description:
    "Rekonstrukce Praha 9 pro domy, byty a koupelny na klíč. Prosek, Vysočany, Libeň i Hrdlořezy. Od bourání po malování. Domluvte si bezplatné zaměření.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const helpWhen = [
  "Jste koupili starší byt a chcete jej připravit k nastěhování.",
  "Potřebujete modernizovat panelový byt nebo bytové jádro.",
  "Chcete změnit dispozici pomocí nových příček.",
  "Přebíráte novější byt a nevyhovuje vám jeho standard.",
  "Potřebujete obnovit podlahy, omítky nebo výmalbu.",
  "Plánujete rekonstrukci rodinného domu po místnostech či podlažích.",
  "Hledáte jednoho dodavatele pro více navazujících řemesel.",
];

// A card column is a run of blocks: plain text, a note set off by a rule, or a titled list.
type Block = string | { note: string } | { listTitle: string; list: string[] };

type Area = { id: string; chip: string; title: string; left: Block[]; right: Block[] };

const areas: Area[] = [
  {
    id: "prosek",
    chip: "Prosek",
    title: "Prosek a Střížkov",
    left: [
      "Na Proseku a v příslušné části Střížkova řeší majitelé často modernizaci panelových bytů. Typickým zadáním bývá koupelna, toaleta, nové podlahy, oprava stěn nebo celkové sjednocení interiéru.",
      {
        note: "Stěnu neposuzujeme pouze podle tloušťky nebo poklepu. Pokud není bezpečně potvrzené, že ji lze odstranit, vyžádáme potřebné podklady nebo doporučíme odborné posouzení.",
      },
      "U lokalit označovaných jako Střížkov je vhodné ověřit konkrétní adresu, protože katastrální území zasahuje do více městských částí. Případovou studii proto označíme jako „Praha 9“ jen tehdy, pokud tam zakázka skutečně leží.",
    ],
    right: [
      {
        listTitle: "U panelového bytu nejdříve potřebujeme zjistit:",
        list: [
          "Z čeho jsou jednotlivé konstrukce.",
          "Zda se má měnit dispozice.",
          "Jaký je stav bytového jádra.",
          "Kudy vedou společné instalace.",
          "Jaké podlahové vrstvy se v bytě nacházejí.",
          "Které práce musí zákazník oznámit správci.",
          "Jaká pravidla platí pro výtah a hlučné práce.",
        ],
      },
    ],
  },
  {
    id: "vysocany",
    chip: "Vysočany",
    title: "Vysočany a okolí Kolbenovy",
    left: [
      "Ve Vysočanech se potkávají starší domy s moderní rezidenční výstavbou na dříve průmyslově využívaných územích. Majitel staršího bytu může potřebovat kompletní obnovu, zatímco u novější jednotky bývá cílem spíše individuální úprava standardního provedení.",
      {
        note: "V novém nebo nedávno dokončeném domě je často zásadní provozní řád. Před dodávkou materiálu si ověřujeme možnost rezervovat výtah, příjezd do garáží, nosnost a rozměry výtahu i požadavky na ochranu společných prostor.",
      },
    ],
    right: [
      {
        listTitle: "V okolí Kolbenovy, Vysočanské a Freyovy realizujeme například:",
        list: [
          "Změny nenosných příček.",
          "Sádrokartonové podhledy a niky.",
          "Nové vinylové, laminátové nebo dřevěné podlahy.",
          "Úpravy koupelny.",
          "Opravy stěn po montáži technologií.",
          "Malování před nastěhováním.",
          "Dokončovací práce po jiném dodavateli.",
        ],
      },
    ],
  },
  {
    id: "liben",
    chip: "Libeň",
    title: "Libeň a Českomoravská",
    left: [
      "Část Libně náležející k Praze 9 zahrnuje starší i postupně obnovované interiéry. V okolí Českomoravské, O2 areny a Harfy je navíc potřeba dobře načasovat větší dodávky.",
      {
        note: "Ve dnech velkých akcí může být okolí O2 areny, Českomoravské a přilehlých komunikací dopravně vytíženější. Před dovozem podlah, obkladů nebo rozměrných desek proto doporučujeme zkontrolovat místní program a situaci na konkrétní trase.",
      },
    ],
    right: [
      {
        listTitle: "U staršího bytu v Libni se po odstranění původních vrstev mohou ukázat:",
        list: [
          "Nerovné nebo nesoudržné omítky.",
          "Rozdíly mezi podlahami jednotlivých pokojů.",
          "Dřívější zazdívky.",
          "Staré lepidlo pod krytinou.",
          "Poškození kolem instalačních prostupů.",
          "Několik generací povrchových úprav.",
        ],
      },
      {
        note: "Takový nález zdokumentujeme. Vysvětlíme, jak ovlivňuje další fázi, a před dodatečnou opravou s vámi domluvíme cenu i postup.",
      },
    ],
  },
  {
    id: "hrdlorezy",
    chip: "Hrdlořezy",
    title: "Hrdlořezy a Hloubětín",
    left: [
      "V Hrdlořezích a příslušné části Hloubětína se setkáváme s bytovými i rodinnými domy. U domu může rekonstrukce zahrnovat více místností, schodiště, technické zázemí nebo několik koupelen.",
      "Důležitá je možnost rozdělit projekt na funkční celky. Pokud se v domě během prací bydlí, můžeme podle podmínek nejdříve dokončit jednu část a následně pokračovat v další.",
      {
        note: "Hloubětín je administrativně rozdělený, proto i zde uvádíme označení Praha 9 pouze podle skutečné adresy realizace.",
      },
    ],
    right: [
      {
        listTitle: "Při plánování domu řešíme:",
        list: [
          "Přístup a uložení materiálu.",
          "Ochranu vstupu a venkovních povrchů.",
          "Pohyb mezi podlažími.",
          "Zachování jedné koupelny v provozu.",
          "Návaznost podlah na schodiště.",
          "Prostory pro nářadí a odpad.",
          "Pořadí mokrých a dokončovacích prací.",
        ],
      },
    ],
  },
];

const situations = [
  { need: "Starší byt před nastěhováním", label: "Kompletní rekonstrukce v jednom navazujícím plánu" },
  { need: "Obydlený panelový byt", label: "Etapová úprava nebo přesně oddělená pracovní zóna" },
  { need: "Nevyhovující bytové jádro", label: "Kompletní rekonstrukce koupelny a toalety" },
  { need: "Novější byt v základním standardu", label: "Individuální podlahy, příčky, osvětlení a povrchy" },
  { need: "Dům s více plánovanými změnami", label: "Rozdělení podle podlaží nebo funkčních zón" },
  { need: "Dobře fungující interiér s jedním problémem", label: "Samostatné řemeslo bez zbytečné celkové rekonstrukce" },
];

const serviceCards = [
  {
    title: "Kompletní byt",
    text: "Při kompletní rekonstrukci sladíme odstranění starých vrstev, nové konstrukce, koupelnu, podlahy a finální povrchy. Klíčové je pořadí – hotová práce se nemá znovu rozebírat kvůli detailu, který mohl být vyřešen dříve.",
    link: { text: "Více o rekonstrukcích bytů Praha →", href: service("rekonstrukce-bytu-praha") },
  },
  {
    title: "Dům nebo podlaží",
    text: "Rodinný dům lze podle stavu rekonstruovat najednou nebo po etapách. Předem určíme, které části musí zůstat dostupné a jak se bude materiál pohybovat mezi podlažími.",
    link: { text: "Prohlédnout rekonstrukce domů Praha →", href: service("rekonstrukce-domu-praha") },
  },
  {
    title: "Koupelna a jádro",
    text: "U koupelny potřebujeme před stavební přípravou znát konkrétní rozměry vany, sprchy, toalety, umyvadla a nábytku. Několik centimetrů může rozhodnout o otevírání dveří nebo pohodlném používání místnosti.",
    link: { text: "Zjistit více o rekonstrukcích koupelen →", href: service("rekonstrukce-koupelen-praha") },
  },
];

const stripPhotos = [
  { src: "koupelna-mozaika-wc-pracka.webp", alt: "Koupelna s mozaikou, WC a místem pro pračku" },
  { src: "lodzie-podlaha.webp", alt: "Nová podlaha na lodžii" },
  { src: "koupelna-umyvadlo-u-dveri.webp", alt: "Dokončená koupelna s umyvadlem u dveří" },
];

const panelChecks = [
  "Skladbu bytového jádra.",
  "Umístění instalačních šachet.",
  "Přístup k uzávěrům a revizním místům.",
  "Výšky podlah mezi místnostmi.",
  "Stav stěn po odstranění původních vrstev.",
  "Možnosti budoucího kotvení.",
  "Rozměry koupelny po vytvoření nových povrchů.",
  "Cestu materiálu přes dům.",
];

const newerFlatHelp = [
  "Nahrazením základní podlahové krytiny.",
  "Vytvořením pracovního koutu.",
  "Novou příčkou mezi pokoji.",
  "Podhledem pro osvětlení.",
  "Úpravou koupelnového nábytku.",
  "Doplněním úložných nik.",
  "Omyvatelnými povrchy v chodbě.",
  "Dokončením interiéru před nastěhováním.",
];

const trades = [
  { label: "Bourací práce", text: "Demontáž vybavení, odstranění nenosných příček a starých povrchů." },
  { label: "Zednické práce", text: "Nové dozdívky, omítky, opravy a příprava otvorů." },
  { label: "Sádrokarton", text: "Příčky, podhledy, niky a zakrytí vybraných instalací." },
  { label: "Podlahářské práce", text: "Příprava podkladu a pokládka vinylu, laminátu nebo parket." },
  { label: "Malířské práce", text: "Opravy stěn, štukování, malování a dokončení." },
  { label: "Koupelny", text: "Stavební příprava, povrchy a montáž dohodnutého vybavení." },
];

const offerChecks = [
  "Patro a dostupnost výtahu.",
  "Rozměry dveří a chodeb.",
  "Možnost zastavení u domu.",
  "Trasu pro odnos starého materiálu.",
  "Pravidla pro hlučné práce.",
  "Místo pro dočasné uložení dodávek.",
  "Viditelný stav povrchů.",
  "Návaznost na zachované části.",
  "Dostupné výkresy a dokumentaci.",
  "Požadovaný stav při předání.",
];

const transport = [
  { place: "Prosek", text: "Předem ověřujeme vjezd, parkování u domu a možnost použít výtah." },
  { place: "Vysočany", text: "U nových projektů kontrolujeme pravidla recepce, garáží a zásobování." },
  { place: "Českomoravská", text: "Dopravu plánujeme s ohledem na program O2 areny a místní provoz." },
  { place: "Kolbenova", text: "U větších materiálů prověřujeme příjezd k objektu a místo vykládky." },
  { place: "Starší Libeň", text: "Počítáme s užšími průchody a rozdílným stavem společných prostor." },
  { place: "Rodinné domy", text: "Chráníme brány, chodníky, zahradní prvky a venkovní dlažbu." },
];

const processSteps = [
  { title: "Popíšete nám záměr", text: "Pošlete adresu, fotografie a základní představu." },
  { title: "Prohlédneme nemovitost", text: "Zaměříme prostor a zkontrolujeme přístup." },
  { title: "Určíme priority", text: "Rozlišíme nezbytné práce od volitelných změn." },
  { title: "Prověříme návaznosti", text: "Ujasníme dispozici, materiály a budoucí vybavení." },
  { title: "Připravíme rozpočet", text: "Položky rozdělíme podle skutečného rozsahu." },
  { title: "Potvrdíme organizaci", text: "Domluvíme přístup, hlučné práce, materiál a odvoz." },
  { title: "Provedeme sjednané fáze", text: "Změny mimo nabídku nejdříve projednáme." },
  { title: "Zkontrolujeme výsledek", text: "Dokončený rozsah společně projdeme." },
];

const servedAreas = [
  "Prosek",
  "Vysočany",
  "Hrdlořezy",
  "Libeň (část Prahy 9)",
  "Střížkov (část Prahy 9)",
  "Hloubětín (část Prahy 9)",
];

const sendUs = [
  "Adresu realizace.",
  "Několik fotografií.",
  "Přibližnou velikost prostoru.",
  "Popis toho, co chcete změnit.",
  "Preferovaný termín.",
];

const faqs = [
  {
    q: "Provádíte kompletní rekonstrukce bytů na Proseku?",
    a: "Ano. Rozsah může zahrnovat bytové jádro, povrchy, podlahy, nové nenosné konstrukce a finální malování.",
  },
  {
    q: "Pracujete také ve Vysočanech?",
    a: "Ano. Přijímáme zakázky ve starších domech i novějších rezidenčních projektech ve Vysočanech.",
  },
  {
    q: "Rekonstruujete panelová bytová jádra?",
    a: "Ano. Nejdříve ověříme konstrukci, společné instalace, plánované uspořádání a požadavky správce domu.",
  },
  {
    q: "Umíte upravit i nový byt u Kolbenovy?",
    a: "Ano. Provádíme například nové podlahy, sádrokartonové konstrukce, malování, niky a úpravy koupelny.",
  },
  {
    q: "Rekonstruujete rodinné domy v Hrdlořezích?",
    a: "Ano. Dům můžeme řešit jako celý projekt nebo jej rozdělit podle podlaží a funkčních částí.",
  },
  {
    q: "Máte pobočku v Praze 9?",
    a: "Ne. Skutečná kontaktní adresa RekoGrinik je Na Vackově 2895/5 v Praze 3. Za zákazníky v Praze 9 přijíždíme.",
  },
  {
    q: "Mohu si objednat jen podlahu nebo malování?",
    a: "Ano. Kromě kompletních rekonstrukcí provádíme také jednotlivé podlahářské, malířské, bourací, zednické a sádrokartonářské práce.",
  },
  {
    q: "Jak řešíte dopravu v okolí O2 areny?",
    a: "Větší dodávky plánujeme podle konkrétní adresy a místního provozu. Ve dnech akcí ověřujeme vhodný čas a příjezdovou trasu.",
  },
  {
    q: "Co se stane, když po odstranění podlahy objevíte špatný podklad?",
    a: "Stav zdokumentujeme a navrhneme vhodnou přípravu. Dodatečný rozsah nejdříve technicky a cenově odsouhlasíme.",
  },
  {
    q: "Je první návštěva zdarma?",
    a: "Ano. Termín domluvíme předem a návštěvu využijeme k zaměření a upřesnění rozsahu nabídky.",
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
    { "@type": "AdministrativeArea", name: "Praha 9" },
    ...["Prosek", "Vysočany", "Hrdlořezy"].map((name) => ({ "@type": "Place", name })),
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce Praha 9",
  description: "Kompletní a částečné rekonstrukce bytů, domů a koupelen v Praze 9.",
  serviceType: "Rekonstrukce na klíč",
  provider: { "@id": `${SITE_URL}#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 9" },
  url: PAGE_URL,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Oblasti působnosti", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce Praha 9", item: PAGE_URL },
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

function NumList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ol className={`${domy.numList} ${className ?? ""}`}>
      {items.map((item, i) => (
        <li key={item}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export default function RekonstrukcePraha9Page() {
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
          src={`${IMG}/koupelna-beton.webp`}
          alt="Koupelna s obkladem v betonovém dekoru po rekonstrukci"
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
            <span aria-current="page">Praha 9</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Rekonstrukce Praha 9<span className={d.srOnly}> – </span>
              <span className={d.h1Sub}>od panelového bytu po moderní interiér</span>
            </h1>
            <p className={styles.heroText}>
              Byt na Proseku, novější interiér u Kolbenovy a rodinný dům v Hrdlořezích
              mohou mít stejnou podlahovou plochu, ale úplně jiné technické potřeby. Proto
              nezačínáme univerzálním balíčkem. Nejdříve si prostor prohlédneme, zjistíme
              váš cíl a teprve potom sestavíme odpovídající rozsah.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="praha9_hero_phone"
              >
                Domluvit bezplatné zaměření v Praze 9
              </a>
            </div>
            <p className={loc.heroContact}>
              Pro domluvení návštěvy zavolejte na{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <div className={d.introCol} data-reveal>
          <p className={`${styles.introLead} ${d.inlineLinks}`}>
            RekoGrinik provádí rekonstrukce v Praze 9 od prvních demontáží až po konečné
            dokončení. Zajistíme kompletní rekonstrukci bytu, domu nebo koupelny na klíč.
            Objednat si můžete také samostatné{" "}
            bourací,{" "}
            zednické,{" "}
            sádrokartonářské,{" "}
            podlahářské či{" "}
            malířské práce.
          </p>
          <p className={byty.darkBox} style={{ fontSize: 18 }}>
            Na začátku přijedeme přímo na adresu realizace. Zaměříme potřebné části,
            ověříme přístup a projdeme s vámi požadovaný výsledek.
          </p>
        </div>
        <div className={domy.listCol} data-reveal>
          <p className={loc.checkTitle}>Pomůžeme vám, pokud:</p>
          <ul className={loc.checkLight}>
            {helpWhen.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Districts */}
      <section id="lokality" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={`${loc.areasHead} ${d.areasHeadTight}`}>
            <h2 className={styles.h2} data-reveal>
              Každá část Prahy 9 potřebuje jiný přístup
            </h2>
            <nav aria-label="Čtvrti Prahy 9" className={d.goldChips} data-reveal>
              {areas.map((a) => (
                <a key={a.id} className={d.goldChip} href={`#${a.id}`}>
                  {a.chip}
                </a>
              ))}
            </nav>
          </div>
          <p className={d.areasIntro} data-reveal>
            Praha 9 není jeden stavebně jednotný celek. Vedle panelových sídlišť zde stojí
            starší bytové domy, rodinné domy, bývalé průmyslové objekty i rozsáhlé nové
            rezidenční projekty. Podoba zakázky se proto mění podle konkrétní adresy a typu
            stavby.
          </p>
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
        </div>
      </section>

      {/* Services */}
      <section id="sluzby" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.sectionHead} style={{ marginBottom: 48 }}>
          <h2 className={styles.h2} data-reveal>
            Jakou rekonstrukci plánujete
          </h2>
          <p className={styles.lead} data-reveal>
            Rozsah vybíráme podle toho, čeho chcete dosáhnout, nikoli podle předem
            připraveného balíčku.
          </p>
        </div>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush} ${d.needTable}`}>
            <thead>
              <tr>
                <th>Výchozí situace</th>
                <th>Doporučený přístup</th>
              </tr>
            </thead>
            <tbody>
              {situations.map((n) => (
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
              <p>{c.text}</p>
              <div className={d.colLinks}>
                <Link href={c.link.href}>{c.link.text}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Photo strip — TODO: nahradit skutečnými realizacemi z Prahy 9. Lokální alt texty
          (např. „Kompletní rekonstrukce panelového bytu na Proseku v Praze 9“) používat
          jen u fotografie z ověřené zakázky. */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={`${IMG}/${p.src}`} alt={p.alt} />
        ))}
      </div>

      {/* Panel flats */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Specializace na panelové byty</h2>
              <p className={d.strongLead}>
                Panelový byt si zaslouží samostatnou přípravu. Nejde jen o výměnu
                umakartového jádra nebo novou podlahu. Je potřeba zohlednit konstrukční
                systém domu, společné instalace, stav podkladu a pravidla správce.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Pokud je byt obývaný, domluvíme, zda lze zakázku rozdělit na části. U
                kompletního bourání jádra však musí zákazník počítat s dočasnou
                nedostupností koupelny a toalety.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Před návrhem kontrolujeme především:</p>
              <NumList items={panelChecks} />
            </div>
          </div>
        </div>
      </section>

      {/* Newer flats */}
      <section className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Úpravy novějších bytů</h2>
            <p className={d.strongLead}>
              Také nový byt může potřebovat rekonstrukční firmu. Často nejde o opravu
              opotřebení, ale o přizpůsobení prostoru konkrétnímu životnímu stylu.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              U novějšího domu dbáme na provozní pravidla, rezervaci výtahu a ochranu
              hotových chodeb. Před zahájením také ověříme, zda plánovaný zásah neovlivní
              záruku jiné části bytu nebo zařízení.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Pomáháme například s:</p>
            <ul className={loc.checkLight}>
              {newerFlatHelp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trades under one lead */}
      <section className={styles.dark}>
        <div className={styles.container}>
          <div className={loc.areasHead}>
            <h2 className={styles.h2} data-reveal>
              Služby pod jedním vedením
            </h2>
            <p className={d.headAside} data-reveal>
              RekoGrinik může zajistit celý sjednaný projekt i samostatnou část.
            </p>
          </div>
          <ul className={d.linkCards} data-reveal-group>
            {trades.map((t) => (
              <li key={t.label}>
                <strong>{t.label}</strong>
                <span>{t.text}</span>
              </li>
            ))}
          </ul>
          <p className={d.darkNote} data-reveal>
            Výhodou společného vedení je kontrola návazností. Výška nové podlahy souvisí s
            dveřmi, rozměr příčky ovlivňuje nábytek a poloha koupelnového vybavení určuje
            přípravu stěn.
          </p>
        </div>
      </section>

      {/* Pre-offer checks */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Co prověřujeme před nabídkou</h2>
              <p className={d.strongLead}>
                Při první návštěvě neřešíme pouze vzhled interiéru. Kontrolujeme i
                praktické podmínky zakázky.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Vlastník bytu má plánované stavební úpravy uvnitř jednotky předem oznámit
                osobě odpovědné za správu domu. U zásahů do společných nebo nosných částí
                mohou být vyžadovány další podklady.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Kontrolujeme:</p>
              <NumList items={offerChecks} />
            </div>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={d.darkText} data-reveal>
              <h2 className={styles.h2}>Doprava materiálu v Praze 9</h2>
              <p className={d.darkLead}>
                Praha 9 má dobrou dopravní dostupnost, jednotlivé lokality se však při
                zásobování výrazně liší.
              </p>
              <p className={byty.scopeNote}>
                Nevytváříme univerzální tvrzení typu „přijedeme za deset minut“. Konkrétní
                dopravu určujeme podle adresy, času a aktuálního provozu.
              </p>
            </div>
            <dl className={d.goldDl} data-reveal>
              {transport.map((t) => (
                <div key={t.place}>
                  <dt>{t.place}</dt>
                  <dd>{t.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak zakázku připravíme
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
        {/* TODO: doplnit sekci „Naše práce v Praze 9“ se skutečnými případovými studiemi (ověřená čtvrť, typ domu, stav, rozsah, problém, řešení, fotky před/během/po, skutečná recenze se souhlasem). Smyšlené reference nepoužívat. */}
      </section>

      {/* Contact point + map */}
      <section id="mapa" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={loc.mapCol} data-reveal>
            <h2 className={styles.h2}>Kontaktní údaje a mapa</h2>
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
              Na Praze 9 nemáme samostatnou provozovnu. Jde o obsluhovanou oblast, do které
              přijíždíme na prohlídky, zaměření a samotné realizace.
            </p>
            <p className={`${loc.mapHint} ${d.inlineLinks}`}>
              Osobní návštěvu kontaktní adresy{" "}
              <Link href="/lokace/rekonstrukce-praha-3">Na Vackově</Link> si domluvte
              předem. Pro přípravu nabídky je obvykle užitečnější schůzka přímo ve vašem
              bytě nebo domě.
            </p>
            <div className={d.tagBlock}>
              <p className={d.tagLabel}>Obsluhované lokality v Praze 9</p>
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
              <a className={styles.btnGold} href={`tel:${PHONE}`} data-cta="praha9_map_phone">
                Domluvit zaměření v Praze 9
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
          src={`${IMG}/sprchovy-kout-mozaika.webp`}
          alt="Sprchový kout s mozaikovým obkladem"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat rekonstrukci v Praze 9</h2>
            <p>
              Plánujete rekonstrukci na Proseku, ve Vysočanech, Libni, Hrdlořezích nebo v
              části Střížkova či Hloubětína patřící pod Prahu 9?
            </p>
            <p className={d.contactListTitle}>Pošlete nám:</p>
            <ul className={styles.bullets}>
              {sendUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Ozveme se a domluvíme prohlídku přímo na místě.</p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="praha9_contact_zamereni"
            >
              Domluvit bezplatné zaměření v Praze 9
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
