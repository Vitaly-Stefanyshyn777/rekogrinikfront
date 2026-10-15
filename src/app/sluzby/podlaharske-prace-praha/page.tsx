/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../_shared/site.module.css";
import hub from "../page.module.css";
import loc from "../../lokace/page.module.css";
import byty from "../rekonstrukce-bytu-praha/page.module.css";
import domy from "../rekonstrukce-domu-praha/page.module.css";
import koup from "../rekonstrukce-koupelen-praha/page.module.css";
import s from "./page.module.css";
import ScrollEffects from "../../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const HUB_URL = "https://rekogrinik.cz/sluzby";
const PAGE_URL = "https://rekogrinik.cz/sluzby/podlaharske-prace-praha";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const IMG = "/new";

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Podlahářské práce Praha | Vinyl, laminát a parkety | RekoGrinik",
  },
  description:
    "Podlahářské práce Praha: vinyl, laminát a parkety. Kontrola podkladu, přesná pokládka, lišty i čisté předání. Domluvte si bezplatné zaměření.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const baseChecks = [
  "Rovinnost plochy.",
  "Pevnost a soudržnost povrchu.",
  "Zbytkovou vlhkost.",
  "Praskliny a poškozená místa.",
  "Zbytky lepidel, barev a stavebních směsí.",
  "Výšku podlahy v sousedních místnostech.",
  "Polohu dilatačních spár.",
  "Typ případného podlahového vytápění.",
  "Návaznost na dveře, schody a vestavěný nábytek.",
];

const vinylRooms = [
  "Obývacích pokojů propojených s kuchyní.",
  "Chodeb a vstupních částí.",
  "Dětských pokojů.",
  "Pracoven.",
  "Ložnic.",
  "Interiérů, kde je žádoucí nízká konstrukční výška.",
];

const laminateChecks = [
  "Stav a rovinnost podkladu.",
  "Vhodnou podložku.",
  "Směr pokládky.",
  "Rozložení první a poslední řady.",
  "Posunutí čelních spojů.",
  "Obvodovou dilataci.",
  "Napojení mezi místnostmi.",
  "Dokončení u zárubní a topných trubek.",
  "Soklové lišty a přechodové profily.",
];

const woodChecks = [
  "Druh a konstrukci výrobku.",
  "Rozměry jednotlivých dílců.",
  "Směr nebo vzor pokládky.",
  "Vlhkost podkladu a prostředí.",
  "Kompatibilitu s podlahovým vytápěním.",
  "Způsob připevnění.",
  "Potřebné dilatace.",
  "Budoucí provozní podmínky.",
  "Návaznost na schody a další dřevěné prvky.",
];

const stripPhotos = [
  { src: "veranda-dlazba.webp", alt: "Nová dlažba na zasklené verandě rodinného domu" },
  { src: "roubenka-dlazba.webp", alt: "Velkoformátová dlažba při rekonstrukci roubeného domu" },
  { src: "roubenka-dlazba-sokl.webp", alt: "Dlažba se soklem u roubené stěny" },
];

const baseStates = [
  ["Rovný, pevný a suchý podklad", "Vyčištění a příprava podle systému podlahy"],
  ["Menší lokální poškození", "Oprava jednotlivých míst"],
  ["Výraznější nerovnosti", "Broušení nebo vyrovnání vhodnou hmotou"],
  ["Nesoudržný povrch", "Odstranění slabých vrstev a nová příprava"],
  ["Praskliny", "Posouzení příčiny a odpovídající oprava"],
  ["Nadměrná vlhkost", "Odložení pokládky nebo řešení podle technického návrhu"],
  ["Staré lepidlo či mastnota", "Mechanické odstranění a důkladné vyčištění"],
  ["Pohyblivý dřevěný podklad", "Zpevnění nebo úprava konstrukce"],
];

const heightChecks = [
  "Celkovou výšku nové skladby.",
  "Prostor pod dveřními křídly.",
  "Polohu zárubní.",
  "Výšku sousedních krytin.",
  "Hranu dlažby v koupelně.",
  "Vstupní dveře a práh.",
  "Výšku soklu kuchyňské linky.",
  "Francouzská okna a balkonové dveře.",
  "Schodové hrany.",
  "Topné trubky a další prostupy.",
];

const processSteps = [
  {
    title: "Zaměření prostoru",
    text: "Změříme místnosti, dveřní otvory, výklenky a přechody. Nepracujeme pouze s výměrou z půdorysu, protože skutečný prostor nemusí být dokonale pravoúhlý.",
  },
  {
    title: "Posouzení podkladu",
    text: "Zkontrolujeme jeho rovinnost, pevnost, čistotu a další vlastnosti důležité pro vybranou krytinu. U minerálních podkladů podle potřeby ověříme zbytkovou vlhkost.",
  },
  {
    title: "Návrh skladby",
    text: "Určíme, zda bude podlaha plovoucí nebo lepená, jaká příprava podkladu je nutná a které systémové materiály budou potřeba.",
  },
  {
    title: "Rozvržení podlahy",
    text: "Před prvním řezem promyslíme směr pokládky, šířku krajních dílců a návaznost mezi místnostmi. U parketových vzorů je přesné založení obzvlášť důležité.",
  },
  {
    title: "Příprava prostoru",
    text: "Odstraníme dohodnutou původní krytinu, opravíme podklad a uklidíme prach a nečistoty. Mokré nebo nedostatečně vyschlé vrstvy nepřekrýváme novou podlahou.",
  },
  {
    title: "Aklimatizace materiálu",
    text: "Materiál uložíme podle pokynů výrobce. Doba a způsob se liší podle typu krytiny; u dřeva má aklimatizace zásadní význam pro omezení pozdějšího pohybu.",
  },
  {
    title: "Pokládka",
    text: "Podlahu instalujeme zvoleným systémem a průběžně kontrolujeme spoje, směr, napojení i vzhled jednotlivých dílců.",
  },
  {
    title: "Lišty a přechody",
    text: "Po položení dokončíme sjednané soklové lišty, rohy, koncovky a profily. Detaily mají zakrýt potřebné spáry, nikoli bránit přirozenému pohybu plovoucí podlahy.",
  },
  {
    title: "Kontrola a předání",
    text: "Hotovou plochu projdeme, odstraníme pracovní nečistoty a vysvětlíme podmínky prvního používání. U lepené podlahy respektujeme dobu vytvrzení systému.",
  },
];

const heatingChecks = [
  "Typ vytápění.",
  "Skladbu a stav potěru.",
  "Zbytkovou vlhkost.",
  "Protokol topné zkoušky, pokud je relevantní.",
  "Maximální povrchovou teplotu povolenou výrobcem.",
  "Tepelný odpor krytiny a podložky.",
  "Polohu dilatačních celků.",
];

const rooms = [
  ["Obývací pokoj", "Důležitý je vzhled velké plochy, akustika a návaznost na kuchyň."],
  ["Kuchyně", "Sledujeme odolnost, údržbu, možné působení vody a vztah k pevně instalované lince."],
  ["Chodba", "Podlaha čelí nečistotám, vlhkým botám a vyššímu mechanickému namáhání."],
  ["Ložnice", "Rozhoduje pohodlí, kročejový hluk a příjemný povrch."],
  ["Dětský pokoj", "Praktická je snadná údržba a odolnost vůči běžnému provozu."],
  ["Koupelna", "Krytina musí být výrobcem schválená pro dané prostředí a správně dokončená u stěn a prostupů."],
  ["Pracovna", "Počítáme s pohybem kolečkové židle a bodovým zatížením nábytku."],
];

const priceFactors = [
  ["Typ podlahy", "Liší se systém pokládky, nářadí i materiály"],
  ["Stav podkladu", "Může vyžadovat broušení, opravy nebo vyrovnání"],
  ["Členitost místnosti", "Zvyšuje počet řezů a detailů"],
  ["Vzor pokládky", "Některé vzory vyžadují přesnější založení a více času"],
  ["Dveře a prostupy", "Ovlivňují množství dokončovacích detailů"],
  ["Lišty a profily", "Liší se materiálem i způsobem montáže"],
  ["Odstranění staré podlahy", "Přidává demontáž, odnos a nakládání s odpadem"],
  ["Přístup do objektu", "Patro, výtah a parkování ovlivňují manipulaci"],
];

const prepareList = [
  "Adresu a typ nemovitosti.",
  "Přibližnou plochu místností.",
  "Fotografie původní podlahy.",
  "Informaci, zda se bude stará krytina odstraňovat.",
  "Vybraný nebo zvažovaný typ nové podlahy.",
  "Technický list výrobku, pokud už je koupený.",
  "Informaci o podlahovém vytápění.",
  "Požadavek na lišty a přechody.",
  "Informaci o vestavěném nábytku.",
  "Termín dokončení ostatních stavebních prací.",
  "Patro, výtah a možnosti vykládky.",
  "Požadovaný termín pokládky.",
];

const faqs = [
  {
    q: "Jaké podlahy pokládáte?",
    a: "Pokládáme laminátové, vinylové a dřevěné podlahy včetně parket. Konkrétní výrobek a systém nejdříve posoudíme podle podkladu a místnosti.",
  },
  {
    q: "Připravíte také nerovný podklad?",
    a: "Ano, přípravu lze zahrnout do nabídky. Potřebný rozsah určíme po odstranění původní krytiny a kontrole podkladu.",
  },
  {
    q: "Může se nová podlaha položit na starou?",
    a: "Někdy ano, ale pouze pokud je původní vrstva pevná, rovná, suchá a vhodná pro daný systém. Současně musíme zkontrolovat výslednou výšku.",
  },
  {
    q: "Je podložka schopná vyrovnat nerovnou podlahu?",
    a: "Běžná podložka nenahrazuje řádné vyrovnání podkladu. Některé výrobky vyrovnají pouze velmi omezené nerovnosti a musí být kompatibilní s krytinou.",
  },
  {
    q: "Jak dlouho musí podlaha před pokládkou aklimatizovat?",
    a: "Záleží na materiálu a pokynech výrobce. Zejména u dřeva je důležité přizpůsobení podmínkám místnosti, které nelze nahradit univerzální časovou hodnotou.",
  },
  {
    q: "Pokládáte podlahu na podlahové vytápění?",
    a: "Ano, pokud jsou krytina, podložka nebo lepidlo a celá skladba pro daný systém vhodné. Před pokládkou ověříme technické požadavky.",
  },
  {
    q: "Montujete také soklové lišty?",
    a: "Ano, montáž dohodnutých soklových lišt, rohů, koncovek a přechodových profilů lze zahrnout do realizace.",
  },
  {
    q: "Kdy se podlaha pokládá během rekonstrukce?",
    a: "Pokládá se po dokončení a vyschnutí mokrých či výrazně prašných prací. Přesné pořadí se přizpůsobí typu krytiny a navazujícím montážím.",
  },
  {
    q: "Poskytujete na práci záruku?",
    a: "Ano. RekoGrinik na webu uvádí tříletou záruku na provedené práce. Konkrétní podmínky a rozsah se uvedou v předávací dokumentaci.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji realizujeme podlahářské práce v Praze 1, 2, 3, 8, 9 a 10. Další lokality posuzujeme podle místa a rozsahu zakázky.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["3", "8", "9", "10"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Podlahářské práce Praha",
  description:
    "Pokládka vinylových, laminátových a dřevěných podlah včetně přípravy podkladu, lišt a přechodových profilů.",
  serviceType: "Podlahářské práce",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}#business`,
    name: "RekoGrinik s.r.o.",
    url: SITE_URL,
    telephone: PHONE,
  },
  areaServed: ["Praha 1", "Praha 2", "Praha 3", "Praha 8", "Praha 9", "Praha 10"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pokládka podlahových krytin",
    itemListElement: [
      "Pokládka vinylových podlah",
      "Pokládka laminátových podlah",
      "Pokládka parket a dřevěných podlah",
      "Příprava podkladu a montáž lišt",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Podlahářské práce Praha", item: PAGE_URL },
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

function TwoColTable({ head, rows }: { head: [string, string]; rows: string[][] }) {
  return (
    <div className={koup.tableScroll} data-reveal>
      <table className={`${byty.typeTable} ${koup.tableFlush}`}>
        <thead>
          <tr>
            <th>{head[0]}</th>
            <th>{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td>{a}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PodlaharskePracePage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      {[serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((json) => (
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
          src={`${IMG}/lodzie-podlaha.webp`}
          alt="Zasklená lodžie s novou podlahou po rekonstrukci bytu"
          className={styles.cover}
          style={{ objectPosition: "50% 50%" }}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Podlahářské práce</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Podlahářské práce Praha</h1>
            <h2 className={styles.heroSub}>Vinyl, laminát a parkety</h2>
            <p className={styles.heroText}>
              Nová podlaha změní vzhled celého interiéru. Aby však zůstala rovná,
              stabilní a příjemná při každodenním používání, nestačí pouze rozbalit
              lamely a začít je skládat. O výsledku rozhoduje především stav podkladu,
              správně zvolená skladba a přesné dokončení detailů.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="podlaharske_hero_phone"
              >
                Domluvit bezplatné zaměření
              </a>
            </div>
            <p className={loc.heroContact}>
              Domluvte si bezplatné zaměření na telefonu{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <p className={styles.introLead} data-reveal>
          Provádíme podlahářské práce v Praze při rekonstrukcích bytů a domů i jako
          samostatnou službu. Pokládáme laminátové, vinylové a dřevěné podlahy včetně
          parket. Podle konkrétní zakázky zajistíme také odstranění původní krytiny,
          přípravu podkladu, instalaci lišt a dokončení přechodů.
        </p>
        <div className={styles.stack} data-reveal>
          <p>
            Před vytvořením nabídky přijedeme prostor zaměřit. Zkontrolujeme podklad,
            výškové rozdíly, dveře, přechody a podmínky v jednotlivých místnostech.
            Společně také upřesníme způsob používání podlahy, požadovaný materiál a
            návaznost na další práce.
          </p>
          <p>
            Cílem není jen podlahu položit. Chceme, aby správně navazovala na celý
            interiér, neomezovala otevírání dveří,{" "}
            <strong className={styles.accent}>nevytvářela zbytečné výškové schody</strong>{" "}
            a odpovídala provozu konkrétní místnosti.
          </p>
        </div>
      </section>

      {/* Under the surface */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Dobrá podlaha začíná pod povrchem</h2>
              <p className={s.strongLead}>
                Nejdůležitější část hotové podlahy většinou není vidět. Pod vinylovou
                lamelou, laminátem nebo parketou se nachází podklad, který musí být
                dostatečně rovný, pevný, suchý, čistý a vhodný pro zvolený systém.
              </p>
              <p>
                Nová krytina sama o sobě větší nerovnosti nevyrovná. Podložka pod
                plovoucí podlahu také nenahrazuje opravu nevyhovujícího podkladu.
                Výrobce vinylových podlah Gerflor výslovně upozorňuje, že podložka
                nerovnosti nevyhlazuje a může je naopak zvýraznit.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                U nového potěru nebo podkladu po rozsáhlé opravě nestačí posoudit
                vyschnutí pohledem či dotykem. Přípustnou zbytkovou vlhkost určujeme
                podle podkladu, typu krytiny, způsobu pokládky a technického předpisu
                konkrétního výrobce.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Před pokládkou proto sledujeme:</p>
              <ol className={domy.numList}>
                {baseChecks.map((item, i) => (
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

      {/* Floor types */}
      <section id="podlahy" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
            Jaké podlahy pokládáme
          </h2>
          <div className={`${byty.scopeGrid} ${s.cardStack}`} data-reveal-group>
            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>01</span>
              <h3 className={byty.scopeTitle}>Vinylové podlahy</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Vinyl se používá v bytech i rodinných domech díky širokému výběru
                    dekorů, příjemnému povrchu a snadné údržbě. Nejde však o jeden
                    univerzální výrobek. Rozlišujeme například lepený vinyl a zámkové
                    dílce pokládané plovoucím způsobem.
                  </p>
                  <p>
                    Lepený vinyl vytváří nízkou a kompaktní skladbu. Velmi přesně však
                    kopíruje podklad, takže vyžaduje důkladnou přípravu. Nerovnost,
                    zrnko nebo stopa po stěrce mohou zůstat na tenké krytině viditelné.
                  </p>
                  <p>
                    Zámkový vinyl se skládá plovoucím způsobem. Je důležité použít
                    skladbu schválenou výrobcem a ověřit, zda má konkrétní výrobek
                    integrovanou podložku. Přidání další nevhodné vrstvy může ovlivnit
                    funkci spojů a stabilitu podlahy.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeNote}>
                    Pro vinyl musí být podklad rovný, suchý, tuhý a čistý. Kompatibilitu
                    krytiny s podlahovým vytápěním nebo vlhčím provozem je nutné ověřit
                    podle konkrétního produktu, nikoli pouze podle obecného označení
                    „vinyl“.
                  </p>
                  <p className={byty.scopeListTitle}>Vinyl často doporučujeme do:</p>
                  <Bullets items={vinylRooms} />
                </div>
              </div>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>02</span>
              <h3 className={byty.scopeTitle}>Laminátové podlahy</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Laminát nabízí široký výběr vzhledu a obvykle se instaluje plovoucím
                    způsobem. Jednotlivé dílce nejsou pevně přilepené k podkladu, ale
                    vzájemně spojené zámkovým systémem.
                  </p>
                  <p>
                    Pod podlahu se používá podložka odpovídající konkrétnímu výrobku a
                    požadavkům místnosti. Ovlivňuje akustiku, stabilitu, ochranu před
                    vlhkostí i chování podlahy při chůzi. U podlahového vytápění musí
                    být vhodná také z hlediska tepelného odporu.
                  </p>
                  <p className={byty.scopeNote}>
                    Požadavky na dilatační spáry se mohou lišit podle výrobku, velikosti
                    plochy, dveřních otvorů a rozdílů teplot mezi místnostmi. U
                    některých laminátových systémů jsou například samostatné dilatace
                    potřebné při přechodu mezi vytápěnou a nevytápěnou plochou nebo
                    směrem ke koupelně.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>Při pokládce laminátu řešíme:</p>
                  <Bullets items={laminateChecks} />
                </div>
              </div>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>03</span>
              <h3 className={byty.scopeTitle}>Parkety a dřevěné podlahy</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Dřevo vnáší do interiéru přirozený vzhled, ale reaguje na změny
                    teploty a vlhkosti. Proto vyžaduje stabilní podmínky před pokládkou,
                    během ní i při následném používání.
                  </p>
                  <p>
                    Dřevěné dílce je potřeba uložit do prostoru tak, aby se přizpůsobily
                    místním klimatickým podmínkám. Přesnou dobu a způsob aklimatizace
                    vždy určují pokyny výrobce. Montážní návody běžně požadují také
                    suchý, pevný, čistý a rovný podklad a kontrolu jeho zbytkové
                    vlhkosti.
                  </p>
                  <p className={byty.scopeNote}>
                    Dřevěnou podlahu nepokládáme do prostoru, kde stále probíhají mokré
                    a prašné stavební práce. Nové omítky, potěry a další materiály musí
                    být dostatečně vyschlé.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>
                    U parket a dřevěných podlah posuzujeme:
                  </p>
                  <Bullets items={woodChecks} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={`${IMG}/${p.src}`} alt={p.alt} />
        ))}
      </div>

      {/* Checking the base */}
      <section className={styles.container}>
        <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
          <h2 className={styles.h2} data-reveal>
            Jak kontrolujeme podklad
          </h2>
          <p className={styles.lead} data-reveal>
            Před pokládkou potřebujeme zjistit, zda je možné novou krytinu položit
            přímo, nebo zda bude nutná oprava.
          </p>
        </div>
        <TwoColTable head={["Stav podkladu", "Možné řešení"]} rows={baseStates} />
        <div className={`${styles.split} ${s.afterTable}`}>
          <p className={byty.darkBox} style={{ fontSize: 18 }} data-reveal>
            Rovinnost kontrolujeme v různých směrech. Podklad také nesmí obsahovat volné
            částice, zbytky omítky ani výstupky, které by později zatěžovaly zámky nebo
            se propsaly do povrchu.
          </p>
          <p className={styles.lead} data-reveal>
            Pokud je potřeba odstranit původní vrstvy, mohou pokládce předcházet naše{" "}
            <Link className={koup.inlineLink} href={service("bouraci-prace-praha")}>
              bourací práce v Praze
            </Link>
            . Opravy podkladních konstrukcí lze navázat na{" "}
            zednické práce.
          </p>
        </div>
      </section>

      {/* Floating vs glued */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
            <h2 className={styles.h2} data-reveal>
              Plovoucí, nebo lepená podlaha
            </h2>
            <p className={styles.lead} data-reveal>
              Způsob pokládky nevybíráme pouze podle toho, který je rychlejší. Musí
              odpovídat výrobku, podkladu, velikosti prostoru a očekávanému používání.
            </p>
          </div>
          <div className={s.methodGrid} data-reveal-group>
            <article className={s.methodCard}>
              <h3>Plovoucí pokládka</h3>
              <p>
                Dílce jsou spojené mezi sebou, ale nejsou celoplošně připevněné k
                podkladu. Mezi krytinou a podkladem bývá výrobcem předepsaná podložka
                nebo jiná systémová vrstva.
              </p>
              <p>
                Výhodou může být rychlejší instalace a snadnější budoucí rozebrání. Je
                však potřeba dodržet dilatace, správně řešit těžké vestavěné prvky a
                nepoužít nevhodnou podložku.
              </p>
            </article>
            <article className={s.methodCard}>
              <h3>Celoplošné lepení</h3>
              <p>
                Krytina se připevní k připravenému podkladu vhodným lepidlem. Tento
                způsob se používá například u lepeného vinylu a některých dřevěných
                podlah.
              </p>
              <p>
                Lepená podlaha klade vysoké nároky na přípravu, soudržnost a čistotu
                podkladu. Důležitá je také kompatibilita penetrace, stěrky, lepidla a
                samotné krytiny.
              </p>
            </article>
          </div>
          <p className={s.methodNote} data-reveal>
            O vhodném systému rozhodujeme podle technického listu konkrétního výrobku a
            skutečných podmínek v interiéru.
          </p>
        </div>
      </section>

      {/* Height and transitions */}
      <section className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Výška podlahy a návaznosti</h2>
            <p className={s.strongLead}>
              Nová podlaha nekončí u stěny. Musí navázat na dveře, chodbu, koupelnu,
              kuchyň, vestavěný nábytek a případně další podlaží.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              Několik milimetrů může rozhodnout, zda se dveře otevřou bez úpravy nebo
              zda vznikne nepříjemný výškový přechod. Skladbu proto plánujeme jako
              součást interiéru, ne až po dokončení ostatních prací.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Ještě před objednáním materiálu kontrolujeme:</p>
            <ul className={loc.checkLight}>
              {heightChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.white} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={styles.h2} data-reveal>
            Jak pokládka probíhá
          </h2>
          <ol className={`${styles.steps} ${s.steps9}`} data-reveal-group>
            {processSteps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className={`${styles.callout} ${s.stepsNote}`} data-reveal>
            RekoGrinik uvádí podrobný rozpočet s pevnými cenami, kontrolu kvality,
            generální úklid, protokolární předání a tříletou záruku na provedené práce.
          </p>
        </div>
      </section>

      {/* Underfloor heating */}
      <section className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Podlahové vytápění</h2>
            <p>
              Ne každá krytina, podložka nebo způsob pokládky je vhodný pro každý systém
              podlahového vytápění. Kompatibilitu ověřujeme podle dokumentace výrobce
              podlahy a skladby.
            </p>
            <p className={hub.tip}>
              Výrobní pokyny mohou vyžadovat vypnutí vytápění před pokládkou a jeho
              pozvolné spuštění po instalaci. Konkrétní hodnoty a intervaly se nesmějí
              přebírat z obecného článku; řídíme se technickým předpisem zvoleného
              systému.
            </p>
          </div>
          <div className={domy.listCol} data-reveal="right">
            <p className={`${loc.checkTitle} ${koup.goldTitle}`}>
              Před pokládkou je důležité znát:
            </p>
            <ul className={koup.darkList}>
              {heatingChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className={styles.container}>
        <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
          <h2 className={styles.h2} data-reveal>
            Podlaha v jednotlivých místnostech
          </h2>
          <p className={styles.lead} data-reveal>
            Do všech místností není vhodná stejná skladba.
          </p>
        </div>
        <dl className={s.rooms} data-reveal-group>
          {rooms.map(([room, text]) => (
            <div key={room}>
              <dt>{room}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
        <p className={`${koup.plainNote} ${s.roomsNote}`} data-reveal>
          Pokud se podlaha pokládá v celém nově rekonstruovaném interiéru, sladíme ji s
          plánem{" "}
          <Link className={koup.inlineLink} href={service("rekonstrukce-bytu-praha")}>
            rekonstrukce bytu v Praze
          </Link>{" "}
          nebo{" "}
          rekonstrukce domu.
        </p>
      </section>

      {/* Before / after — gallery photos still to come */}
      <section id="pred-a-po" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${s.slimSection}`}>
          <div className={styles.sectionHead} style={{ marginBottom: 0 }}>
            <h2 className={styles.h2} data-reveal>
              Před a po pokládce
            </h2>
            <div className={domy.listCol} style={{ gap: 24 }} data-reveal>
              <p className={styles.lead}>
                Dobrá dokumentace podlahy neukazuje pouze starou a novou krytinu. Měla
                by zachytit také stav podkladu a důležité fáze přípravy.
              </p>
              {/* TODO: doplnit fotografie skutečných realizací podlah (původní krytina, podklad, oprava, rozvržení, detaily, hotová podlaha) */}
              <Link className={loc.btnOutlineGreen} href="/realizace">
                Prohlédnout realizace RekoGrinik →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className={styles.container}>
        <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
          Co ovlivňuje cenu
        </h2>
        <TwoColTable head={["Faktor", "Vliv na zakázku"]} rows={priceFactors} />
        <p className={`${byty.darkBox} ${s.afterBox}`} style={{ fontSize: 18 }} data-reveal>
          Při porovnávání nabídek ověřte, zda obsahují zaměření, přípravu podkladu,
          podložku nebo lepidlo, pokládku, řezy, soklové lišty, přechody, přesun
          materiálu a úklid. Cena pouze za metr pokládky nemusí představovat cenu
          kompletně dokončené podlahy.
        </p>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Podlahářské práce v Praze</h2>
            <p>
              Nejčastěji pracujeme v Praze 1, Praze 2, Praze 3, Praze 8, Praze 9 a
              Praze 10.
            </p>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              Na Žižkově, Vinohradech nebo ve Vršovicích se ve starších bytech mohou
              potkat různé skladby a výšky podlah. Po odstranění krytin se někdy objeví
              parkety, prkenný podklad nebo dřívější lokální opravy.
            </p>
            <p>
              V Karlíně, Vysočanech a novějších rezidenčních projektech bývá důležitá
              ochrana společných prostor, rezervace výtahu a respektování provozních
              pravidel domu. Na Proseku, v Bohnicích a Strašnicích pracujeme také v
              panelových bytech, kde nová krytina často navazuje na původní konstrukční
              skladbu.
            </p>
            <p>
              Ve starších bytech na Vinohradech se pod krytinou někdy objeví původní parkety,
              více o této oblasti najdete u{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-2">
                rekonstrukce v Praze 2
              </Link>. V centru řešíme hlavně dopravu materiálu a ochranu společných prostor,
              podívejte se na{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-1">
                rekonstrukce bytů v Praze 1
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist before the visit */}
      <section className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Kontrolní seznam</h2>
            <p>Před návštěvou si připravte:</p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Podlahu neobjednávejte přesně podle čisté
              výměry místnosti. Je potřeba počítat s prořezem, členitostí a vzorem
              pokládky. Potřebnou rezervu určíme podle konkrétního půdorysu a výrobku.
            </p>
          </div>
          <ul className={styles.boxes} data-reveal-group>
            {prepareList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
      <nav aria-label="Další oblasti" className={byty.related} data-reveal-group>
        <span className={byty.relatedLabel}>Pracujeme také v</span>
        {otherAreas.map((d) => (
          <Link
            key={d}
            href={`/lokace/rekonstrukce-praha-${d}`}
            className={byty.relatedLink}
          >
            Podlahy v Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/roubenka-dlazba.webp`}
          alt="Velkoformátová dlažba při rekonstrukci roubeného domu"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Domluvte si zaměření podlahy</h2>
            <p>
              Potřebujete novou vinylovou, laminátovou nebo dřevěnou podlahu? Pošlete
              nám půdorys nebo přibližné rozměry, fotografie současného stavu a
              informaci o krytině, kterou zvažujete.
            </p>
            <p>
              Přijedeme prostor zaměřit, zkontrolujeme podklad a návaznosti a
              připravíme podrobný rozpočet. Před objednáním materiálu budete vědět,
              jaká příprava je potřeba a jak bude podlaha dokončena u stěn, dveří a
              sousedních místností.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="podlaharske_contact_poptavka"
            >
              Domluvit bezplatné zaměření podlahy
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
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className={styles.contactBig}>
                  {EMAIL}
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
