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
const PAGE_URL = "https://rekogrinik.cz/lokace/rekonstrukce-praha-10";
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
    absolute: "Rekonstrukce Praha 10 na klíč | Byty, domy, koupelny | RekoGrinik",
  },
  description:
    "Rekonstrukce Praha 10 na klíč pro byty, domy a koupelny. Vršovice, Strašnice, Malešice i Záběhlice. Od bourání po předání. Domluvte si zaměření.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

type Item = { text: string };

const offered: Item[] = [
  { text: "Kompletní rekonstrukce bytů na klíč." },
  { text: "Celkové i etapové rekonstrukce domů." },
  { text: "Rekonstrukce koupelen a bytových jader." },
  { text: "Bourací a demontážní práce." },
  { text: "Zednické opravy, omítky a nové nenosné zdivo." },
  { text: "Sádrokartonové příčky, podhledy a niky." },
  { text: "Pokládku vinylu, laminátu a dřevěných podlah." },
  { text: "Štukování, malování a dokončovací práce." },
];

const consultChecks = [
  "Zda je nemovitost prázdná, nebo obývaná.",
  "Které místnosti musí zůstat přístupné.",
  "Jestli je k dispozici druhá koupelna či toaleta.",
  "Co se má zachovat a chránit.",
  "Které práce jsou technicky nezbytné.",
  "Co je možné rozdělit do samostatných etap.",
  "Jaké vybavení a materiály už máte vybrané.",
  "Kdy potřebujete prostor znovu plně používat.",
];

// A card column is a run of blocks: plain text, a note set off by a rule, or a titled
// list (bulleted, or numbered when the order matters).
type Block =
  | string
  | { note: string }
  | { listTitle: string; list: string[]; numbered?: boolean };

type Area = { id: string; chip: string; title: string; left: Block[]; right: Block[] };

const areas: Area[] = [
  {
    id: "vrsovice",
    chip: "Vršovice",
    title: "Vršovice",
    left: [
      "Ve Vršovicích přijímáme poptávky z okolí Vršovického náměstí, Moskevské, Krymské, Kodaňské, Vršovické ulice, stadionu v Edenu i dalších částí čtvrti.",
      "U starších bytů se mohou vyskytovat vysoké stropy, původní dveře, několik vrstev nátěrů, rozdílné skladby podlah nebo omítky opravované v různých obdobích. Neznamená to, že je nutné automaticky odstranit všechny původní prvky. Před rekonstrukcí rozlišíme, co lze zachovat a co už nevyhovuje plánovanému výsledku.",
      {
        note: "Část Vršovic patří do městské památkové zóny. Pokud mají práce ovlivnit chráněné konstrukce nebo vzhled budovy, je vhodné předem ověřit konkrétní podmínky.",
      },
    ],
    right: [
      {
        listTitle: "Ve Vršovicích často dává smysl řešit:",
        list: [
          "Kompletní proměnu bytu před nastěhováním.",
          "Nové uspořádání koupelny a toalety.",
          "Opravu původních omítek.",
          "Sjednocení výšek podlah.",
          "Zachování a ochranu původních dveří či parket.",
          "Nové příčky a úložné niky.",
          "Malování a dokončení před pronájmem.",
        ],
      },
      {
        note: "V okolí stadionu v Edenu může dopravu ovlivnit program sportovních a kulturních akcí. Větší dovoz podlah, desek nebo obkladů proto plánujeme podle konkrétní adresy a místní situace.",
      },
    ],
  },
  {
    id: "strasnice",
    chip: "Strašnice",
    title: "Strašnice",
    left: [
      "Strašnice kombinují bytové domy, vilovou zástavbu i rodinné domy. Zakázka poblíž metra Strašnická tak může vyžadovat jinou organizaci než rekonstrukce domu směrem k Zahradnímu Městu.",
      "U rodinných domů řešíme také návaznost mezi podlažími, schodiště, technické prostory a možnost rozdělit projekt do etap. Pokud se v domě během prací bydlí, připravíme pořadí tak, aby podle možností zůstala část zázemí použitelná.",
      {
        note: "Při dopravě materiálu kontrolujeme nejen místo pro zastavení, ale také vstupní bránu, šířku cesty a možnost chránit venkovní dlažbu či zahradní prvky.",
      },
    ],
    right: [
      {
        listTitle: "V bytech provádíme například:",
        list: [
          "Rekonstrukce koupelen.",
          "Nové podlahy v několika místnostech.",
          "Opravy stěn po starších instalacích.",
          "Demontáž původní kuchyně.",
          "Sádrokartonové podhledy.",
          "Malování celého interiéru.",
        ],
      },
    ],
  },
  {
    id: "malesice",
    chip: "Malešice",
    title: "Malešice",
    left: [
      "V Malešicích se setkáváme s panelovými, cihlovými i dalšími bytovými domy. Častým zadáním je modernizace bytu před nastěhováním, nové bytové jádro nebo výměna podlah a povrchů v celém interiéru.",
      {
        note: "Do nejasné stěny nezasahujeme pouze podle vzhledu. Pokud není bezpečně potvrzené, že lze konstrukci odstranit, je potřeba vycházet z dokumentace nebo odborného posouzení.",
      },
      {
        note: "Malešická ulice je zároveň důležitou dopravní trasou a nachází se zde také městský sběrný dvůr. Aktuální podmínky převzetí odpadu je však vždy potřeba ověřit podle druhu materiálu, množství a toho, kdo jej na místo přiváží.",
      },
    ],
    right: [
      {
        listTitle: "Před úpravou panelového bytu ověřujeme:",
        list: [
          "Konstrukční systém domu.",
          "Stav a skladbu bytového jádra.",
          "Polohu společných instalací.",
          "Výšky podlah mezi pokoji.",
          "Možnosti budoucího kotvení.",
          "Přístup k uzávěrům a revizním místům.",
          "Pravidla správce pro hlučné práce.",
          "Podmínky používání výtahu.",
        ],
      },
    ],
  },
  {
    id: "zabehlice",
    chip: "Záběhlice a Michle",
    title: "Záběhlice a část Michle",
    left: [
      "V Záběhlicích přijímáme zakázky v bytech i rodinných domech. U domů se často řeší více místností, koupelny v různých podlažích, schodiště a postupná modernizace bez nutnosti vyklidit celou nemovitost najednou.",
      "Tento postup může omezit zásah do každodenního života, vyžaduje však pečlivé plánování. Některé přípravné práce se mohou opakovat a je potřeba předem zajistit, aby na sebe jednotlivé etapy technicky i vzhledově navazovaly.",
      {
        note: "Michle zasahuje do více správních částí. Lokální označení „Praha 10“ proto používáme jen tehdy, když ho potvrzuje skutečná adresa zakázky.",
      },
    ],
    right: [
      {
        listTitle: "U etapové rekonstrukce může být vhodné:",
        numbered: true,
        list: [
          "Nejprve dokončit jednu koupelnu nebo obytnou část.",
          "Přesunout provoz domácnosti do hotové zóny.",
          "Pokračovat v dalších místnostech.",
          "Společné povrchy a návaznosti dokončit v závěrečné etapě.",
        ],
      },
    ],
  },
];

const situations = [
  { need: "Prázdný byt před nastěhováním", label: "Kompletní realizace v jednom navazujícím plánu" },
  { need: "Obydlený byt s několika úpravami", label: "Oddělené místnosti a kratší pracovní etapy" },
  { need: "Dům se dvěma koupelnami", label: "Postupné dokončení tak, aby jedna zůstala dostupná" },
  { need: "Starší byt s nejistým podkladem", label: "První etapa demontáže a kontrola odkrytého stavu" },
  { need: "Jeden konkrétní problém", label: "Samostatné řemeslo bez celkové rekonstrukce" },
  { need: "Novější byt v základním provedení", label: "Úprava podlah, příček, osvětlení a povrchů" },
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
    title: "Rekonstrukce bytů",
    paragraphs: [
      "Kompletní rekonstrukci koordinujeme jako jeden celek. Bourání musí odpovídat budoucí dispozici, poloha příček vybavení a výška podlah dveřím i přechodům.",
    ],
    link: { text: "Více o rekonstrukcích bytů Praha →", href: service("rekonstrukce-bytu-praha") },
  },
  {
    title: "Rekonstrukce domů",
    paragraphs: [
      "U domu plánujeme návaznost místností a podlaží, technické zázemí, přístup i možnost realizovat práce postupně.",
    ],
    link: { text: "Prohlédnout rekonstrukce domů Praha →", href: service("rekonstrukce-domu-praha") },
  },
  {
    title: "Koupelny na klíč",
    paragraphs: [
      "Koupelnu připravíme od demontáže původních prvků přes stavební úpravy až po povrchy a montáž sjednaného vybavení. Před přípravou vývodů potřebujeme znát přesné rozměry vany, sprchy, umyvadla, toalety a nábytku.",
    ],
    link: { text: "Zjistit více o rekonstrukcích koupelen →", href: service("rekonstrukce-koupelen-praha") },
  },
  {
    title: "Samostatná řemesla",
    paragraphs: ["Objednat můžete také pouze:"],
    list: [
      { text: "Bourací a demontážní práce." },
      { text: "Zednické opravy nebo novou nenosnou příčku." },
      { text: "Sádrokartonový podhled či niku." },
      { text: "Opravu a vyrovnání stěn." },
      { text: "Pokládku vinylu, laminátu nebo parket." },
      { text: "Štukování a malování." },
    ],
    after:
      "Před dílčí realizací jasně stanovíme, v jakém stavu prostor přebíráme a co bude hotové při jeho předání.",
  },
];

const stripPhotos = [
  { src: "koupelna-bourani.webp", alt: "Bourání původní koupelny" },
  { src: "koupelna-pruhy-celek.webp", alt: "Nová koupelna se sprchovým koutem, umyvadlem a pračkou" },
  { src: "veranda-dlazba.webp", alt: "Nová dlažba na verandě rodinného domu" },
];

const livingChecks = [
  "Kudy budou procházet pracovníci.",
  "Kde se bude skladovat materiál.",
  "Které dveře zůstanou přístupné.",
  "Zda lze oddělit prašnou část.",
  "Kdy budou přerušené instalace.",
  "Jestli bude možné používat kuchyň nebo koupelnu.",
  "Jak ochráníme vybavení, které zůstává v interiéru.",
];

const protectedParts = [
  "Vstupní dveře a zárubně.",
  "Zachované podlahy.",
  "Okna a parapety.",
  "Vestavěný nábytek.",
  "Radiátory.",
  "Schodiště a výtah.",
  "Společné chodby.",
  "Přístupovou trasu.",
];

const processSteps = [
  { title: "Pošlete základní údaje", text: "Adresu, fotografie, velikost a požadované změny." },
  { title: "Prohlédneme prostor", text: "Zkontrolujeme viditelný stav i místní logistiku." },
  { title: "Stanovíme priority", text: "Oddělíme nutné opravy od volitelných vylepšení." },
  { title: "Upřesníme materiály", text: "Potvrdíme vybavení a výrobky důležité pro stavební přípravu." },
  { title: "Připravíme rozpočet", text: "Nabídka popíše práce a odpovědnost za dodávky." },
  { title: "Naplánujeme provoz", text: "Domluvíme přístup, hlučné práce a případné etapy." },
  { title: "Provedeme realizaci", text: "Neočekávané nálezy nejdříve zdokumentujeme." },
  { title: "Dokončené práce zkontrolujeme", text: "Projdeme sjednaný rozsah a předáme prostor." },
];

const transport = [
  { place: "Vršovice", text: "Ověřujeme provoz v okolí Vršovické, Moskevské a Edenu." },
  { place: "Kubánské náměstí", text: "V exponovaných časech kontrolujeme místní provoz a možnosti krátkodobé vykládky." },
  { place: "Strašnice", text: "U bytových domů řešíme parkování a přístup k výtahu; u domů průjezd bránou." },
  { place: "Malešice", text: "Počítáme s provozem na Malešické a přilehlých komunikacích." },
  { place: "Záběhlice", text: "U rodinných domů prověřujeme umístění materiálu a ochranu venkovních ploch." },
];

const sendUs = [
  "Přesnou adresu.",
  "Fotografie současného stavu.",
  "Přibližnou velikost prostoru.",
  "Popis požadovaných změn.",
  "Preferované období realizace.",
  "Informaci, zda budete v nemovitosti během prací bydlet.",
];

const faqs = [
  {
    q: "Provádíte rekonstrukce bytů ve Vršovicích?",
    a: "Ano. Přijímáme kompletní rekonstrukce i jednotlivé práce. Rozsah stanovíme podle stavu bytu a plánovaného výsledku.",
  },
  {
    q: "Rekonstruujete rodinné domy ve Strašnicích?",
    a: "Ano. Dům můžeme řešit jako jeden projekt nebo rozdělit realizaci podle místností, podlaží či funkčních částí.",
  },
  {
    q: "Jezdíte také do Malešic a Záběhlic?",
    a: "Ano. Praha 10 je naší obsluhovanou oblastí a na zaměření přijedeme přímo na konkrétní adresu.",
  },
  {
    q: "Umíte rekonstruovat panelový byt?",
    a: "Ano. Nejdříve prověříme konstrukční řešení, stav bytového jádra, podlahy a požadavky správce domu.",
  },
  {
    q: "Lze během rekonstrukce bydlet doma?",
    a: "U menší nebo etapové realizace to někdy možné je. Rozhoduje rozsah bourání, dostupnost koupelny a možnost bezpečně oddělit pracovní zónu.",
  },
  {
    q: "Zajistíte projekt od bourání po malování?",
    a: "Ano. Dohodnutý rozsah může zahrnovat demontáže, nové konstrukce, koupelnu, opravy podkladů, podlahy i finální výmalbu.",
  },
  {
    q: "Mohu objednat pouze jednu práci?",
    a: "Ano. Samostatně provádíme bourací, zednické, sádrokartonářské, podlahářské a malířské práce.",
  },
  {
    q: "Co když se po odstranění omítky objeví další poškození?",
    a: "Stav zdokumentujeme a vysvětlíme jeho dopad. Opravu mimo původní nabídku nejdříve technicky i cenově odsouhlasíme.",
  },
  {
    q: "Máte pobočku na Praze 10?",
    a: "Ne. Kontaktní adresa RekoGrinik je Na Vackově 2895/5 na Praze 3. Praha 10 je oblast, kam vyjíždíme.",
  },
  {
    q: "Je první návštěva mistra bezplatná?",
    a: "Ano. Termín si domluvíme předem a návštěvu využijeme k zaměření a přípravě přesnější nabídky.",
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
    { "@type": "AdministrativeArea", name: "Praha 10" },
    ...["Vršovice", "Strašnice", "Malešice", "Záběhlice"].map((name) => ({ "@type": "Place", name })),
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce Praha 10",
  description: "Kompletní a částečné rekonstrukce bytů, domů a koupelen na Praze 10.",
  serviceType: "Rekonstrukce na klíč",
  provider: { "@id": `${SITE_URL}#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 10" },
  url: PAGE_URL,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Oblasti působnosti", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce Praha 10", item: PAGE_URL },
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
        {b.numbered ? (
          <NumList items={b.list} className={d.numDark} />
        ) : (
          <ul className={styles.bullets}>
            {b.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  });
}

export default function RekonstrukcePraha10Page() {
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
            src={`${IMG}/hero-roubenka.webp`}
            alt="Nová dlažba v interiéru rodinného domu"
            style={{ objectPosition: "50% 62%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/lokace">Oblasti působnosti</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Praha 10</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Rekonstrukce Praha 10<span className={d.srOnly}> – </span>
              <span className={d.h1Sub}>byty, domy a koupelny od návrhu po předání</span>
            </h1>
            <p className={styles.heroText}>
              Potřebujete kompletně proměnit starší byt ve Vršovicích, vybudovat novou
              koupelnu v Malešicích nebo postupně modernizovat rodinný dům ve Strašnicích?
              RekoGrinik zajišťuje rekonstrukce na Praze 10 v rozsahu odpovídajícím
              skutečnému stavu nemovitosti i tomu, jak ji během prací potřebujete používat.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="praha10_hero_phone"
              >
                Domluvit návštěvu mistra
              </a>
            </div>
            <p className={loc.heroContact}>
              Domluvte si návštěvu mistra na telefonu{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <div className={d.introCol} data-reveal>
          <p className={styles.introLead}>
            Postaráme se o kompletní realizaci od demontáže původních prvků přes nové
            konstrukce a povrchy až po podlahy, malování a konečné předání. Pokud celý
            interiér rekonstrukci nepotřebuje, můžete si objednat také jedno samostatné
            řemeslo.
          </p>
          <p className={byty.darkBox} style={{ fontSize: 18 }}>
            Každou zakázku začínáme prohlídkou na místě. Potřebujeme vidět nejen místnosti
            určené k úpravě, ale také přístup do domu, výtah, schodiště a části, které mají
            během rekonstrukce zůstat v provozu.
          </p>
        </div>
        <div className={domy.listCol} data-reveal>
          <p className={loc.checkTitle}>Na Praze 10 nabízíme:</p>
          <ul className={`${loc.checkLight} ${d.checkLinks}`}>
            {offered.map((item) => (
              <li key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How you live */}
      <section id="typy-bydleni" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Rekonstrukce podle toho, jak bydlíte</h2>
              <p className={d.strongLead}>
                Stejná služba nemusí znamenat stejný postup. Prázdný byt před nastěhováním
                lze organizovat jinak než domácnost, která potřebuje během prací používat
                kuchyň, jednu ložnici nebo část domu.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Výsledkem je realistický plán, který bere v úvahu nejen jednotlivá řemesla,
                ale také každodenní fungování domácnosti.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Při první konzultaci proto zjišťujeme:</p>
              <NumList items={consultChecks} />
            </div>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section id="lokality" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={loc.areasHead}>
            <h2 className={styles.h2} data-reveal>
              Kde na Praze 10 pracujeme
            </h2>
            <nav aria-label="Čtvrti Prahy 10" className={d.goldChips} data-reveal>
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
        </div>
      </section>

      {/* Complete, partial or in stages */}
      <section id="etapy" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.sectionHead} style={{ marginBottom: 48 }}>
          <h2 className={styles.h2} data-reveal>
            Kompletně, částečně, nebo po etapách
          </h2>
          <p className={styles.lead} data-reveal>
            Rozhodnutí závisí na stavu nemovitosti, rozpočtu a možnosti prostor během
            realizace uvolnit.
          </p>
        </div>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush} ${d.needTable}`}>
            <thead>
              <tr>
                <th>Situace</th>
                <th>Vhodný přístup</th>
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
        <p className={`${byty.darkBox} ${d.boxAfter}`} data-reveal>
          U etapové rekonstrukce upozorníme také na možná omezení. Stejný dekor podlahy
          nebo série obkladů nemusí být později dostupná a opakované zakrývání či přesuny
          vybavení mohou zvýšit náročnost.
        </p>
      </section>

      {/* Services */}
      <section id="sluzby" className={`${styles.white} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
            Co pro vás zajistíme
          </h2>
          <div className={d.cols} data-reveal-group>
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
        </div>
      </section>

      {/* Photo strip — TODO: nahradit skutečnými realizacemi z Prahy 10. Místní název v
          alt textu (např. „Kompletní rekonstrukce staršího bytu ve Vršovicích na Praze 10“)
          používat jen u fotografie z ověřené realizace. */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={photo(p.src)} alt={p.alt} />
        ))}
      </div>

      {/* Living on site */}
      <section id="bydleni-behem-prace" className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={d.darkText} data-reveal>
              <h2 className={styles.h2}>Lze během rekonstrukce bydlet</h2>
              <p className={d.darkLead}>
                Částečné bydlení během rekonstrukce někdy možné je, ale nemělo by se
                slibovat bez prohlídky prostoru. Záleží na prašnosti, rozsahu bourání,
                dostupnosti vody, elektřiny, toalety a bezpečném oddělení pracovní zóny.
              </p>
              <p className={byty.scopeNote}>
                U kompletní rekonstrukce malého bytu bývá zpravidla praktičtější prostor
                dočasně uvolnit. U rodinného domu nebo většího bytu lze častěji vytvořit
                oddělenou obytnou část.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={`${loc.checkTitle} ${d.goldTitle}`}>Předem si ujasníme:</p>
              <NumList items={livingChecks} className={d.numDark} />
            </div>
          </div>
        </div>
      </section>

      {/* Protecting kept parts */}
      <section id="ochrana" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Jak chráníme zachované části</h2>
              <p className={d.strongLead}>
                Ne všechno musí být během rekonstrukce odstraněno. Pokud mají zůstat
                původní parkety, dveře, vestavěný nábytek nebo hotová část interiéru,
                zahrneme jejich ochranu do přípravy.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Před demontáží označíme, co má zůstat a co se odstraní. U prvků určených k
                opětovnému použití se domluví šetrnější postup a místo bezpečného uložení.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Podle zakázky chráníme:</p>
              <ul className={loc.checkLight}>
                {protectedParts.map((item) => (
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
          Od první návštěvy k předání
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
        <p className={`${byty.darkBox} ${d.boxAfter} ${d.boxAfterSteps}`} data-reveal>
          Vlastník jednotky má plánovanou stavební úpravu uvnitř bytu předem oznámit osobě
          odpovědné za správu domu. U zásahu do společných nebo nosných konstrukcí mohou
          být vyžadovány další podklady.
        </p>
      </section>

      {/* Transport */}
      <section id="logistika" className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={d.darkText} data-reveal>
              <h2 className={styles.h2}>Místní doprava a zásobování</h2>
              <p className={d.darkLead}>
                Konkrétní trasu plánujeme podle adresy, typu materiálu a podmínek domu.
              </p>
              <p className={byty.scopeNote}>
                Neslibujeme univerzální dobu příjezdu. Reálný čas a způsob dopravy závisí na
                konkrétní adrese, dopravní situaci a rozsahu dodávky.
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
          {/* TODO: doplnit blok „Rekonstrukce realizované na Praze 10“ se skutečnými případovými studiemi (ověřená čtvrť, typ nemovitosti, výchozí stav, cíl, provedené práce, komplikace, řešení, fotky před/během/po, autentická recenze se souhlasem). Nevytvářet smyšlené příběhy ani citace. */}
        </div>
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
              Praha 10 je oblast, kam vyjíždíme na zaměření a realizace. Nemáme zde druhou
              pobočku ani další kontaktní adresu.
            </p>
            <p className={`${loc.mapHint} ${d.inlineLinks}`}>
              Osobní schůzku na adrese{" "}
              <Link href="/lokace/rekonstrukce-praha-3">Na Vackově</Link> si domluvte
              předem. Pro přípravu rekonstrukce je obvykle vhodnější setkat se přímo v
              upravované nemovitosti.
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
          <figure className={d.mapFigure} data-reveal="zoom">
            <iframe
              title="Mapa – RekoGrinik, Na Vackově 2895/5, Praha 3"
              // Embedded by the Google Business Profile place ID (cid) so the listing card shows.
              src="https://maps.google.com/maps?cid=1443832302751861014&z=16&hl=cs&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={loc.map}
            />
            <figcaption className={`${d.mapCta} ${d.mapCtaStack}`}>
              <span className={d.mapCtaText}>
                Za zákazníky na Praze 10 přijíždíme přímo na místo rekonstrukce.
              </span>
              <a className={styles.btnGold} href={`tel:${PHONE}`} data-cta="praha10_map_phone">
                Domluvit zaměření
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
          src={`${IMG}/dum-schodiste-dekorativni-omitka.webp`}
          alt="Schodiště v rodinném domě a stěny s dekorativní omítkou"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat rekonstrukci na Praze 10</h2>
            <p>
              Plánujete rekonstrukci ve Vršovicích, Strašnicích, Malešicích, Záběhlicích
              nebo v části Michle patřící pod Prahu 10?
            </p>
            <p className={d.contactListTitle}>Pošlete nám:</p>
            <ul className={styles.bullets}>
              {sendUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Domluvíme návštěvu, prostor zaměříme a připravíme nabídku podle skutečného rozsahu.</p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="praha10_contact_zamereni"
            >
              Domluvit bezplatné zaměření na Praze 10
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
