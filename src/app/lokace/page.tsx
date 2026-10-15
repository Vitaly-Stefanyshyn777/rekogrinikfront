/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import hub from "../sluzby/page.module.css";
import s from "./page.module.css";
import ScrollEffects from "../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const PAGE_URL = "https://rekogrinik.cz/lokace";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const ADDRESS = "Na Vackově 2895/5, 130 00 Praha 3";
const IMG = "/new";

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce na klíč Praha | Praha 1, 2, 3, 8, 9 a 10 | RekoGrinik",
  },
  description:
    "Rekonstrukce na klíč Praha 1, 2, 3, 8, 9 a 10. Byty, domy, koupelny i jednotlivé práce. Bezplatné zaměření a pevný rozpočet pro váš projekt.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const prepIncludes = [
  "Bezplatná návštěva mistra.",
  "Detailní zaměření a posouzení prostoru.",
  "Upřesnění rozsahu rekonstrukce.",
  "Podrobný rozpočet před zahájením spolupráce.",
  "Pevně stanovené ceny dohodnutých položek.",
  "Návrh pořadí jednotlivých prací.",
];

// Each district gets its own subpage under /lokace.
const areaHref = (num: string) => `/lokace/rekonstrukce-praha-${num}`;

type Area = {
  num: string;
  paragraphs: string[];
  badge?: string;
  services?: { label: string; href?: string }[];
};

const areas: Area[] = [
  {
    num: "1",
    paragraphs: [
      "V Praze 1 přijímáme poptávky ze Starého Města, Josefova, Nového Města, Malé Strany a Hradčan. Tyto čtvrti tvoří historické jádro Prahy a velká část území má památkově chráněný charakter.",
      "Při rekonstrukci bytu blízko Václavského náměstí, Národní třídy, Staroměstského náměstí nebo Malostranského náměstí je důležitá především logistika. Před zahájením řešíme možnost zastavení, trasu odnosu materiálu, ochranu schodiště a výtahu i dobu vhodnou pro hlučnější práce.",
      "V historických objektech může být potřeba prověřit, zda zamýšlená změna nezasahuje do chráněných konstrukcí nebo vzhledu budovy. Příslušný režim je vhodné ověřit před objednáním materiálu a zahájením bourání.",
    ],
    services: [
      { label: "Rekonstrukce bytů na klíč." },
      { label: "Rekonstrukce koupelen." },
      { label: "Bourací a zednické práce." },
      { label: "Sádrokartonářské práce." },
      { label: "Malování a obnovu povrchů." },
      { label: "Pokládku podlah." },
    ],
  },
  {
    num: "2",
    paragraphs: [
      "V Praze 2 pracujeme na Vinohradech, Novém Městě, Vyšehradě a v části Nuslí. Městská část zahrnuje celé katastrální území Vyšehrad a části Nového Města, Vinohrad a Nuslí.",
      "U vinohradských bytů se často setkáváme s vysokými stropy, staršími omítkami, dřevěnými podlahami a dispozičními řešeními typickými pro činžovní domy. Každou konstrukci ale posuzujeme individuálně — samotná lokalita není spolehlivým ukazatelem skutečného stavu bytu.",
      "V okolí náměstí Míru, I. P. Pavlova nebo Rašínova nábřeží je vhodné předem promyslet vykládku a odvoz materiálu. Sobotní provoz na Náplavce ovlivňují farmářské trhy, proto může být praktičtější naplánovat větší zásobování na jiný čas.",
      "Praha 2 zahrnuje části Pražské památkové rezervace i městských památkových zón, takže u některých zásahů může být nutné předem ověřit požadavky památkové péče.",
    ],
  },
  {
    num: "3",
    badge: "Kontaktní místo",
    paragraphs: [
      "Praha 3 je naší domovskou oblastí. Vyjíždíme na Žižkov, Jarov, Vinohrady i do okrajových částí Strašnic a Vysočan, které do městské části zasahují.",
      "Na Žižkově se potkávají starší činžovní domy s pavlačemi a dvory, panelová zástavba i novější projekty. Oficiální podklady městské části popisují Žižkov jako hustou zástavbu s menšími parcelami, úzkými a často prudce stoupajícími ulicemi. Při přípravě rekonstrukce proto kontrolujeme nejen samotný byt, ale také přístup od vozu, šířku průjezdu, výtah a možnosti ochrany společných prostor.",
      "V okolí náměstí Jiřího z Poděbrad je vhodné počítat s provozem souvisejícím s místními trhy, které se konají od středy do soboty. U větší dodávky materiálu proto doporučujeme potvrdit čas příjezdu předem.",
      "V Praze 3 nabízíme kompletní rekonstrukce i jednotlivé práce. Z kontaktní adresy Na Vackově vyjíždíme na zaměření přímo k zákazníkovi.",
    ],
  },
  {
    num: "8",
    paragraphs: [
      "V Praze 8 obsluhujeme zejména Karlín, Libeň, Kobylisy, Bohnice, Čimice a Střížkov. Městská část má rozmanitý charakter: Karlín a Libeň bezprostředně navazují na centrum, zatímco severní části mají odlišnou zástavbu a dopravní podmínky.",
      "V Karlíně se často pracuje v obnovených činžovních nebo industriálních objektech a novějších rezidenčních domech. V Libni, Kobylisích a Bohnicích se setkávají starší domy, panelové byty i modernizované interiéry. Konkrétní postup proto vždy určujeme podle stavby, nikoli pouze podle názvu čtvrti.",
      "Při rekonstrukci v okolí Karlínského náměstí, Palmovky nebo Zenklovy ulice řešíme především příjezd, parkování a pohyb materiálu domem. V panelových bytech na severu Prahy 8 bývá důležité přesně určit, do kterých konstrukcí lze zasahovat, a respektovat pravidla domu.",
    ],
  },
  {
    num: "9",
    paragraphs: [
      "V Praze 9 přijímáme zakázky z Vysočan, Proseka, Střížkova, Hrdlořez, Hloubětína a části Libně. Tyto oblasti tvoří městskou část Praha 9 podle jejího oficiálního územního vymezení.",
      "Praha 9 kombinuje panelové domy na Proseku, vilovou zástavbu a rychle se rozvíjející rezidenční projekty ve Vysočanech a Libni. V roce 2025 zde podle městské části žilo více než 58 tisíc obyvatel a oblast zaznamenávala výrazný rozvoj nové bytové výstavby.",
      "U novějšího bytu poblíž Kolbenovy, Vysočanské nebo O2 areny může být poptávkou spíše změna dispozice, sádrokarton, malování či nová podlaha. Ve starším nebo panelovém bytě na Proseku může být potřeba rozsáhlejší obnova koupelny a povrchů.",
      "Při akcích v O2 areně může být provoz v okolí Českomoravské výrazně hustší. Větší závoz materiálu je proto vhodné plánovat s ohledem na místní dopravu.",
    ],
  },
  {
    num: "10",
    paragraphs: [
      "V Praze 10 pracujeme ve Vršovicích, Strašnicích, Malešicích, Záběhlicích a dalších přilehlých lokalitách. Oficiální přehled městské části uvádí na jejím území přibližně 7 000 domů a 55 000 bytů.",
      "Ve Vršovicích řešíme starší činžovní byty i modernizované interiéry. Ve Strašnicích, Malešicích a Záběhlicích se vedle bytových domů objevují také rodinné domy, kde může být vhodná kompletní rekonstrukce nebo postupná realizace po místnostech.",
      "Při práci v okolí Vršovické ulice, Kubánského náměstí nebo Želivského je důležité předem domluvit možnost vykládky. U rodinných domů v Záběhlicích či Strašnicích zase řešíme především přístup, uskladnění materiálu a to, zda se bude během realizace v domě bydlet.",
    ],
  },
];

const services = [
  { label: "Rekonstrukce bytů na klíč", when: "Když se mění více místností a profesí" },
  { label: "Rekonstrukce domů na klíč", when: "Pro celkovou modernizaci nebo realizaci po etapách" },
  { label: "Rekonstrukce koupelen", when: "Pro kompletní obnovu koupelny a její stavební přípravy" },
  { label: "Sádrokartonářské práce", when: "Pro příčky, podhledy a zakrytí instalací" },
  { label: "Malířské práce", when: "Pro obnovu stěn, stropů a finální úpravu interiéru" },
  { label: "Bourací práce", when: "Pro odstranění vybraných konstrukcí a povrchů" },
  { label: "Podlahářské práce", when: "Pro přípravu podkladu a pokládku nové podlahy" },
  { label: "Zednické práce", when: "Pro vyzdívky, opravy a přípravu dalších povrchů" },
];

const reasons = [
  { title: "Přijedeme přímo na místo", text: "Prostor posoudíme tam, kde se bude rekonstrukce skutečně provádět." },
  { title: "Návštěva mistra je bezplatná", text: "Zaměříme důležité části a probereme rozsah." },
  { title: "Připravíme podrobný rozpočet", text: "Před zahájením budete znát cenu dohodnutých položek." },
  { title: "Zvládneme celek i jednu práci", text: "Nemusíte objednávat kompletní rekonstrukci, pokud potřebujete jen konkrétní řemeslo." },
  { title: "Počítáme s místní logistikou", text: "Řešíme přístup, výtah, vykládku a ochranu společných prostor." },
  { title: "Nevytváříme falešné pobočky", text: "Transparentně uvádíme jednu kontaktní adresu a skutečné oblasti působnosti." },
];

const visitSteps = [
  "Zavoláte nebo pošlete e-mail s adresou a stručným popisem záměru.",
  "Připojíte fotografie prostoru a případně půdorys.",
  "Domluvíme bezplatnou návštěvu mistra.",
  "Na místě provedeme zaměření a posoudíme viditelný stav.",
  "Upřesníme rozsah, materiály a odpovědnost za jejich dodání.",
  "Připravíme podrobný rozpočet s cenami před zahájením spolupráce.",
];

const faqs = [
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji přijímáme zakázky v Praze 1, 2, 3, 8, 9 a 10. Zakázku v jiné části města posoudíme podle lokality a rozsahu.",
  },
  {
    q: "Máte pobočku v každé uvedené městské části?",
    a: "Ne. Máme jednu kontaktní adresu v Praze 3 a do ostatních oblastí za zákazníky vyjíždíme.",
  },
  {
    q: "Je návštěva mistra opravdu bezplatná?",
    a: "Ano, bezplatná návštěva slouží k zaměření a základnímu posouzení prostoru před přípravou nabídky.",
  },
  {
    q: "Dostanu cenu před zahájením prací?",
    a: "Po upřesnění rozsahu připravíme podrobný rozpočet s cenami dohodnutých položek. Pokud se po odkrytí objeví skrytý problém, jeho řešení s vámi nejdříve probereme.",
  },
  {
    q: "Přijedete také kvůli jedné samostatné práci?",
    a: "Ano. Poptat můžete sádrokarton, malování, bourání, podlahářské nebo zednické práce bez kompletní rekonstrukce.",
  },
  {
    q: "Provádíte rekonstrukce v centru Prahy?",
    a: "Ano, pracujeme také v Praze 1 a Praze 2. Před zahájením potřebujeme ověřit možnosti příjezdu, vykládky a pravidla konkrétního domu.",
  },
  {
    q: "Rekonstruujete byty v památkově chráněných domech?",
    a: "Možnost realizace závisí na konkrétním objektu a rozsahu zásahu. Před zahájením je potřeba ověřit, zda se na plánované práce vztahují podmínky památkové ochrany.",
  },
  {
    q: "Musím před rekonstrukcí kontaktovat SVJ?",
    a: "Stavební úpravu uvnitř bytu je potřeba předem oznámit osobě odpovědné za správu domu. U zásahu do společných nebo nosných částí mohou být nutné další souhlasy a odborné posouzení.",
  },
  {
    q: "Jaké informace mám poslat s poptávkou?",
    a: "Uveďte adresu, typ nemovitosti, požadované práce, přibližnou velikost a preferované období. Přiložte fotografie a půdorys, pokud jej máte.",
  },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}#business`,
  name: "RekoGrinik s.r.o.",
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
  areaServed: ["Praha 1", "Praha 2", "Praha 3", "Praha 8", "Praha 9", "Praha 10"].map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Oblasti působnosti", item: PAGE_URL },
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

export default function LokacePage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      {[businessJsonLd, breadcrumbJsonLd, faqJsonLd].map((json) => (
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
          src={`${IMG}/sprchovy-kout-mozaika.webp`}
          alt="Sprchový kout u mozaikové stěny a světlá dlažba po rekonstrukci"
          className={styles.cover}
          style={{ objectPosition: "50% 55%" }}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Oblasti působnosti</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Rekonstrukce na klíč Praha</h1>
            <h2 className={styles.heroSub}>Oblasti, kde pracujeme</h2>
            <p className={styles.heroText}>
              Hledáte firmu na rekonstrukci bytu, domu nebo koupelny ve své části
              Prahy? RekoGrinik provádí rekonstrukce na klíč v Praze 1, Praze 2,
              Praze 3, Praze 8, Praze 9 a Praze 10. Přijedeme přímo k vám,
              prohlédneme prostor a společně upřesníme potřebné práce.
            </p>
            <div className={s.heroCta}>
              <Link
                className={`${styles.btnGold} ${s.heroCtaBtn}`}
                href="/kontakt"
                data-cta="lokace_hero_zamereni"
              >
                Domluvit bezplatné zaměření
              </Link>
            </div>
            <p className={s.heroContact}>
              Zavolejte na <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a> nebo pošlete
              fotografie na <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${styles.intro} ${styles.split}`}>
        <p className={styles.introLead} data-reveal>
          Zajistíme kompletní rekonstrukci i samostatné řemeslo. Můžete nás oslovit
          kvůli sádrokartonu, malování, bourání, nové podlaze nebo zednickým
          úpravám. Nemusíte předem znát přesný odborný název služby — stačí nám
          popsat, co chcete ve svém interiéru změnit.
        </p>
        <div className={styles.stack} style={{ gap: 12 }} data-reveal>
          <p className={s.checkTitle}>Součástí přípravy může být:</p>
          <ul className={s.checkLight}>
            {prepIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* We come to you */}
      <section className={styles.white}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <img
            loading="lazy"
            decoding="async"
            data-reveal="left"
            src={`${IMG}/koupelna-umyvadlo-u-dveri.webp`}
            alt="Koupelna s novým obkladem a umyvadlem během rekonstrukce"
            className={styles.serviceImg}
          />
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Přijedeme za vámi po Praze</h2>
            <p>
              Rekonstrukce se neobjednává od stolu. Skutečný stav stěn, podlah,
              příček a dalších konstrukcí je potřeba vidět přímo na místě. Proto
              přijedeme za vámi, probereme požadovaný výsledek a zaměříme části
              prostoru důležité pro přípravu nabídky.
            </p>
            <p>
              Naše kontaktní místo je na adrese{" "}
              <strong className={styles.accent}>{ADDRESS}</strong>. Neprohlašujeme,
              že máme provozovnu v každé obsluhované městské části. Praha 1, 2, 3,
              8, 9 a 10 jsou oblasti, kam vyjíždíme provádět zaměření a realizace.
            </p>
            <p>
              Díky působení v různých částech města počítáme s praktickými rozdíly
              mezi prací v centru, starším činžovním domě a novějším bytovém
              projektu. Před příjezdem se proto ptáme na patro, výtah, možnost
              vykládky, přístup do domu a pravidla pro hlučné práce.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="oblasti" className={`${styles.container} ${hub.anchor}`}>
        <div className={s.areasHead}>
          <h2 className={styles.h2} data-reveal>
            Oblasti, které obsluhujeme
          </h2>
          <nav aria-label="Městské části" className={s.chips} data-reveal-group>
            {areas.map((a) => (
              <a key={a.num} className={s.chip} href={`#praha-${a.num}`}>
                PRAHA {a.num}
              </a>
            ))}
          </nav>
        </div>
        <div>
          {areas.map((a) => (
            <article
              key={a.num}
              id={`praha-${a.num}`}
              className={`${s.area} ${hub.anchor}`}
              data-reveal
            >
              <div className={s.areaHead}>
                <span aria-hidden="true" className={s.areaNum}>
                  {a.num}
                </span>
                <h3 className={s.areaTitle}>Rekonstrukce Praha {a.num}</h3>
                {a.badge && <span className={s.badge}>{a.badge}</span>}
              </div>
              <div className={s.areaBody}>
                {a.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {a.services && (
                  <>
                    <p className={s.areaListTitle}>V Praze {a.num} provádíme:</p>
                    <ul className={s.greenBullets}>
                      {a.services.map((item) => (
                        <li key={item.label}>
                          {item.href ? <a href={item.href}>{item.label}</a> : item.label}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <Link
                  href={areaHref(a.num)}
                  className={`${s.btnOutlineGreen} ${s.areaLink}`}
                >
                  Více o rekonstrukcích v Praze {a.num} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services in all areas */}
      <section className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2} data-reveal>
              Služby dostupné ve všech oblastech
            </h2>
            <p className={styles.lead} data-reveal>
              Ve všech uvedených částech Prahy nabízíme stejný rozsah služeb:
            </p>
          </div>
          <table className={s.serviceTable} data-reveal>
            <thead>
              <tr>
                <th>Služba</th>
                <th>Kdy je vhodná</th>
              </tr>
            </thead>
            <tbody>
              {services.map((sv) => (
                <tr key={sv.label}>
                  <td>{sv.label}</td>
                  <td>{sv.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="/sluzby" className={`${hub.btnOutline} ${s.allServices}`}>
            Všechny služby rekonstrukcí →
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className={styles.container}>
        <h2 className={styles.h2} data-reveal>
          Proč si nás vybírají Pražané
        </h2>
        <ul className={s.whyGrid} data-reveal-group>
          {reasons.map((r) => (
            <li key={r.title} className={s.whyCard}>
              <strong>{r.title}</strong>
              <span>{r.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* First visit */}
      <section className={styles.white}>
        <div className={styles.container}>
          <h2 className={styles.h2} data-reveal>
            Jak probíhá první návštěva
          </h2>
          <ol className={`${styles.steps} ${s.visitSteps}`} data-reveal-group>
            {visitSteps.map((text, i) => (
              <li key={text} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.stepText}>{text}</span>
              </li>
            ))}
          </ol>
          <p className={`${hub.calloutBox} ${s.visitNote}`} data-reveal>
            Před návštěvou si připravte informaci o patře, výtahu, parkování,
            pravidlech SVJ a přibližném období realizace. Vlastník bytu má plánované
            stavební úpravy uvnitř jednotky předem oznámit osobě odpovědné za správu
            domu.
          </p>
        </div>
      </section>

      {/* Local conditions */}
      <section className={`${styles.container} ${styles.splitWide}`}>
        <div className={styles.stack} style={{ gap: 22 }} data-reveal>
          <h2 className={styles.h2}>Místní podmínky realizace</h2>
          <p>
            V centru Prahy bývá největším tématem zásobování a pohyb materiálu. Ve
            starších činžovních domech kontrolujeme průjezdy, schodiště, výtahy a
            stav povrchů, které musí během prací zůstat chráněné.
          </p>
          <p>
            U panelových domů na Proseku, v Bohnicích nebo Strašnicích je důležité
            prověřit konstrukční systém a pravidla správce. U novějších projektů ve
            Vysočanech, Karlíně nebo na Žižkově se zase často řeší provozní řád domu,
            rezervace výtahu a ochrana hotových společných prostor.
          </p>
          <p>
            Pokud se nemovitost nachází v památkově chráněném území, je vhodné včas
            ověřit, zda zamýšlená změna vyžaduje stanovisko památkové péče. Magistrát
            Prahy uvádí samostatný postup pro obnovu památkově chráněných věcí.
          </p>
        </div>
        <img
          loading="lazy"
          decoding="async"
          data-reveal="right"
          src={`${IMG}/instalacni-sachta-pred.webp`}
          alt="Otevřená instalační šachta během bouracích prací"
          className={styles.serviceImg}
        />
      </section>

      {/* Contact point + map */}
      <section id="mapa" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={s.mapCol} data-reveal>
            <h2 className={styles.h2}>Kontaktní místo a mapa</h2>
            <div className={s.contactCard}>
              <p className={s.contactName}>RekoGrinik s.r.o.</p>
              <dl>
                <div className={s.contactRow}>
                  <dt>Kontaktní adresa</dt>
                  <dd>{ADDRESS}</dd>
                </div>
                <div className={s.contactRow}>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
                  </dd>
                </div>
                <div className={s.contactRow}>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <a
              className={s.btnOutlineGreen}
              href="https://www.google.com/maps/dir/?api=1&destination=Na+Vackov%C4%9B+2895%2F5%2C+130+00+Praha+3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobrazit trasu v Google Maps →
            </a>
            <p className={s.mapHint}>
              Osobní návštěvu kontaktní adresy si domluvte předem. Standardní postup
              je, že přijedeme za vámi na místo plánované rekonstrukce.
            </p>
          </div>
          <iframe
            title="Mapa – RekoGrinik, Na Vackově 2895/5, Praha 3"
            // Embedded by the Google Business Profile place ID (cid) so the listing card
            // shows; an address-only embed falls back to a world view.
            src="https://maps.google.com/maps?cid=1443832302751861014&z=16&hl=cs&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={s.map}
            data-reveal="zoom"
          />
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

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/wc-a-sprcha.webp`}
          alt="Závěsné WC a sprchový kout po rekonstrukci koupelny"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat rekonstrukci v Praze</h2>
            <p>
              Plánujete kompletní rekonstrukci na klíč, novou koupelnu nebo
              jednotlivou stavební práci? Ozvěte se nám a domluvte si bezplatnou
              návštěvu mistra.
            </p>
            <p>
              Přijedeme na místo, provedeme potřebné zaměření a připravíme podrobný
              rozpočet před zahájením spolupráce.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="lokace_contact_zamereni"
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
