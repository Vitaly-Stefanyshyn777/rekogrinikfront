/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
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
const PAGE_URL = "https://rekogrinik.cz/sluzby/sadrokartonarske-prace-praha";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const IMG = "/new";

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Sádrokartonářské práce Praha | Příčky, podhledy a akustika | RekoGrinik",
  },
  description:
    "Sádrokartonářské práce Praha pro byty a domy. Příčky, podhledy, předstěny i akustická řešení. Bezplatné zaměření a pevný rozpočet před realizací.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const designQuestions = [
  "Jakou funkci má konstrukce plnit.",
  "Jak vysoká a dlouhá bude.",
  "Jaký je stav stropu, podlahy a navazujících stěn.",
  "Zda má omezovat přenos zvuku.",
  "Zda se nachází ve vlhkém prostředí.",
  "Jestli má splňovat zvláštní požární požadavky.",
  "Kde budou dveře, světla, zásuvky a další prostupy.",
  "Co bude na stěně později zavěšené.",
  "Jakou finální povrchovou úpravu plánujete.",
];

const partitionChecks = [
  "Přesné napojení na podlahu, strop a boční stěny.",
  "Rozměr a umístění dveřního otvoru.",
  "Rozvody vedené uvnitř konstrukce.",
  "Akustické požadavky mezi místnostmi.",
  "Počet vrstev opláštění.",
  "Budoucí zatížení policemi nebo nábytkem.",
  "Kvalitu povrchu pro malování či jinou úpravu.",
];

const ceilingInputs = [
  "Požadovanou konečnou výšku.",
  "Umístění hlavního a doplňkového osvětlení.",
  "Rozměry svítidel a napájecích zdrojů.",
  "Polohu závěsů, garnýží nebo dalších prvků.",
  "Vedení vzduchotechniky a ostatních instalací.",
  "Požadavky na servisní přístup.",
  "Návaznost podhledu na nové příčky.",
];

const closingChecks = [
  "Jsou instalace správně umístěné.",
  "Zůstane zachovaný přístup k servisním bodům.",
  "Je vyřešeno napojení na okolní konstrukce.",
  "Jsou připraveny potřebné výztuhy.",
  "Nezůstává nezjištěný problém pod opláštěním.",
  "Odpovídá skladba zamýšlenému prostředí.",
];

const noiseTypes = [
  "Řeč a televize ze sousední místnosti.",
  "Hudba s výraznými nízkými frekvencemi.",
  "Provoz technického zařízení.",
  "Zvuk vedený přes strop, podlahu nebo boční stěny.",
  "Hluk přicházející z instalační šachty.",
  "Kročejový hluk z jiného podlaží.",
];

const bathroomChecks = [
  "Polohu vany nebo sprchového prostoru.",
  "Závěsné umyvadlo, toaletu a koupelnový nábytek.",
  "Potřebné sanitární moduly a výztuhy.",
  "Trasy vody, odpadu a elektroinstalace.",
  "Umístění nik a polic.",
  "Hydroizolaci a návaznost obkladů.",
  "Přístup k uzávěrům a servisním místům.",
];

const acousticLayers = [
  "Vhodné podkonstrukce.",
  "Napojovacího těsnění pod obvodovými profily.",
  "Zvoleného opláštění.",
  "Celoplošně vložené minerální izolace bez mezer.",
  "Pružných detailů tam, kde je systém vyžaduje.",
  "Utěsnění spár a prostupů.",
  "Omezení akustických mostů.",
  "Správného napojení na strop, podlahu a boční stěny.",
];

const hangingItems = [
  "Kuchyňské skříňky.",
  "Televizi a její držák.",
  "Knihovnu nebo police.",
  "Umyvadlo či závěsnou toaletu.",
  "Radiátor.",
  "Těžké zrcadlo.",
  "Posuvné dveře.",
  "Závěsný nábytek.",
];

const processSteps: { title: string; text: ReactNode }[] = [
  {
    title: "Zaměření a zadání",
    text: "Prostor prohlédneme, změříme a projdeme s vámi požadovanou funkci konstrukce. Návštěva mistra, podrobné měření, fotodokumentace a konzultace na místě patří podle RekoGrinik ke standardnímu postupu.",
  },
  {
    title: "Návrh skladby",
    text: "Určíme typ konstrukce, potřebné vrstvy, druh desek, izolaci a dokončení. Současně zaznamenáme dveře, svítidla, zásuvky, prostupy a zavěšené prvky.",
  },
  {
    title: "Rozpočet",
    text: "Připravíme položkový rozsah s uvedením dohodnutých materiálů a prací. RekoGrinik uvádí podrobný rozpočet s pevnými cenami a pracovní harmonogram před podpisem smlouvy.",
  },
  {
    title: "Vyznačení konstrukce",
    text: "Na podlaze, stěnách a stropu vyznačíme přesnou polohu příčky nebo podhledu. V této chvíli je vhodné ještě jednou ověřit šířku průchodu, otevírání dveří a umístění nábytku.",
  },
  {
    title: "Montáž podkonstrukce",
    text: "Osadíme profily a provedeme potřebná napojení. U akustických konstrukcí věnujeme zvláštní pozornost těsnění a omezení pevných cest, kterými by se mohl šířit zvuk.",
  },
  {
    title: "Instalace a výztuhy",
    text: "Před uzavřením připravíme dohodnuté instalace, otvory a výztuhy. Elektrické a další odborné instalace provádí nebo kontroluje příslušně kvalifikovaná osoba.",
  },
  {
    title: "Izolace a opláštění",
    text: "Do konstrukce vložíme sjednanou izolaci a namontujeme opláštění v odpovídajících vrstvách. Před úplným uzavřením lze zdokumentovat vnitřní stav.",
  },
  {
    title: "Tmelení a příprava povrchu",
    text: "Spáry, upevňovací body a rohy dokončíme podle sjednané kvality. Jednotlivé vrstvy musí mít potřebný čas k vytvrzení a vyschnutí.",
  },
  {
    title: "Kontrola a předání",
    text: (
      <>
        Zkontrolujeme roviny, rohy, napojení, otvory a sjednanou povrchovou úpravu.
        Pokud jsou součástí zakázky také{" "}
        <a className={koup.inlineLink} href={service("malirske-prace-praha")}>
          malířské práce
        </a>
        , navážeme penetrací a finálním nátěrem.
      </>
    ),
  },
];

const hiddenParts = [
  ["Rozteč a poloha profilů", "Ovlivňuje stabilitu a možnosti budoucího kotvení"],
  ["Izolační výplň", "Podílí se na akustických nebo tepelných vlastnostech"],
  ["Obvodové napojení", "Může omezovat přenos vibrací a vznik prasklin"],
  ["Výztuhy", "Připravují místa pro těžší vybavení"],
  ["Instalační trasy", "Musí odpovídat zásuvkám, světlům a vybavení"],
  ["Revizní přístupy", "Umožňují servis prvků ukrytých v dutině"],
  ["Prostupy", "Vyžadují správné umístění a utěsnění"],
];

const surfaceDemands = [
  "Bočním nebo nepřímém osvětlení.",
  "Velkých jednobarevných plochách.",
  "Lesklejších nátěrech.",
  "Výrazném světle z velkých oken.",
  "Dekorativních stěrkách.",
  "Požadavku na zvlášť hladký povrch.",
];

const priceFactors: { text: string; href?: string }[] = [
  { text: "Druh a počet vrstev desek." },
  { text: "Typ a hustota podkonstrukce." },
  { text: "Izolační výplň." },
  { text: "Výška místnosti." },
  { text: "Počet rohů, otvorů a úrovní." },
  { text: "Dveře, niky a revizní otvory." },
  { text: "Příprava pro světla a instalace." },
  { text: "Výztuhy pro zavěšené vybavení." },
  { text: "Požadovaný stupeň povrchu." },
  { text: "Přístup a doprava materiálu." },
  { text: "Návazné malování a dokončovací práce." },
];

const prepareList = [
  "Fotografie celé místnosti.",
  "Přibližné rozměry a výšku.",
  "Jednoduchý půdorys, pokud jej máte.",
  "Požadovanou polohu příčky nebo podhledu.",
  "Informaci o plánovaných dveřích.",
  "Polohu světel, zásuvek a vypínačů.",
  "Seznam předmětů, které budou na konstrukci viset.",
  "Popis hluku, pokud řešíte akustiku.",
  "Informaci o vlhkosti nebo viditelných vadách.",
  "Požadovanou finální úpravu.",
  "Patro, výtah a možnosti vykládky.",
  "Preferovaný termín realizace.",
];

const faqs = [
  {
    q: "Jaké sádrokartonářské práce provádíte?",
    a: "Realizujeme příčky, jednoduché a víceúrovňové podhledy, předstěny, zakrytí vybraných instalací a konstrukce s akustickými požadavky.",
  },
  {
    q: "Lze sádrokartonem zlepšit zvukovou izolaci?",
    a: "Ano, vhodně navržená konstrukce může přenos zvuku omezit. Výsledek ale závisí na celé skladbě, napojeních, prostupech a dalších cestách šíření zvuku.",
  },
  {
    q: "Můžete rozdělit jeden pokoj na dva?",
    a: "Ano, pokud to dovolují rozměry a technické podmínky prostoru. Před návrhem prověříme dveře, osvětlení, vytápění, zásuvky a budoucí využití obou částí.",
  },
  {
    q: "Lze na příčku zavěsit televizi nebo skříňky?",
    a: "Ano, ale nosnost musí odpovídat konstrukci, opláštění a způsobu kotvení. Těžké předměty nám sdělte před uzavřením stěny.",
  },
  {
    q: "Děláte víceúrovňové podhledy?",
    a: "Ano. Před realizací potřebujeme určit výšky, tvar, osvětlení, instalační prostor a požadovaný finální vzhled.",
  },
  {
    q: "Jaký sádrokarton patří do koupelny?",
    a: "Používají se desky určené do prostředí se zvýšenou vlhkostí. Přímo vodou zatěžované plochy zároveň potřebují vhodnou hydroizolaci.",
  },
  {
    q: "Bude stěna připravená k malování?",
    a: "Záleží na objednaném rozsahu a požadované kvalitě povrchu. Předem si odsouhlasíme, zda zakázka končí vytmelením, broušením, penetrací nebo finální malbou.",
  },
  {
    q: "Jak dlouho práce trvají?",
    a: "Doba závisí na rozsahu, počtu vrstev, množství detailů a potřebném schnutí tmelu. Konkrétní harmonogram připravíme po zaměření.",
  },
  {
    q: "Provádíte také malování hotového sádrokartonu?",
    a: "Ano, na sádrokartonářské práce mohou navázat příprava povrchu a malířské práce podle sjednaného rozsahu.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji působíme na Praze 1, 2, 3, 8, 9 a 10. Jinou lokalitu posoudíme podle místa a rozsahu zakázky.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["1", "2", "9", "10"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Sádrokartonářské práce Praha",
  description:
    "Sádrokartonové příčky, jednoduché a víceúrovňové podhledy, předstěny a akustická řešení pro byty a domy v Praze.",
  serviceType: "Sádrokartonářské práce",
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
    name: "Sádrokartonářské služby",
    itemListElement: [
      "Sádrokartonové příčky",
      "Víceúrovňové podhledy",
      "Akustické předstěny a příčky",
      "Sádrokartonové konstrukce do koupelen",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Sádrokartonářské práce Praha", item: PAGE_URL },
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

export default function SadrokartonarskePracePage() {
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
      <header id="uvod" className={`${styles.hero} ${styles.heroBlend} ${hub.heroCompact}`}>
        <div className={styles.heroMedia}>
          <img
            fetchPriority="high"
            src={`${IMG}/hero-wc-predstena.webp`}
            alt="Instalační předstěna se závěsným WC a skrytými revizními dvířky"
            style={{ objectPosition: "50% 50%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Sádrokartonářské práce</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Sádrokartonářské práce Praha</h1>
            <h2 className={styles.heroSub}>Příčky, podhledy a akustická řešení</h2>
            <p className={styles.heroText}>
              Potřebujete rozdělit velký pokoj, vytvořit pracovnu, snížit příliš
              vysoký strop nebo zakrýt instalace? Provádíme sádrokartonářské práce v
              Praze pro byty, rodinné domy i jednotlivé místnosti.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="sadrokarton_hero_phone"
              >
                Domluvit bezplatné zaměření
              </a>
            </div>
            <p className={loc.heroContact}>
              Zavolejte na <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a> a domluvte si
              bezplatné zaměření.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <p className={styles.introLead} data-reveal>
          Stavíme sádrokartonové příčky, jednoduché i víceúrovňové podhledy,
          předstěny a konstrukce připravené pro akustickou izolaci. Sádrokarton
          realizujeme jako samostatnou zakázku i jako součást{" "}
          <a className={koup.inlineLink} href={service("rekonstrukce-bytu-praha")}>
            kompletní rekonstrukce
          </a>
          .
        </p>
        <p className={styles.lead} data-reveal>
          Dobře provedená konstrukce nezačíná montáží desek. Nejdříve potřebujeme
          vědět, k čemu bude místnost sloužit, co povede uvnitř konstrukce, jaké
          osvětlení plánujete a co chcete na hotovou stěnu zavěsit. Podle toho
          vybereme vhodnou skladbu a připravíme{" "}
          <strong className={styles.accent}>podrobný rozpočet</strong>.
        </p>
      </section>

      {/* Designed by function */}
      <section id="funkce" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Sádrokarton navrhujeme podle funkce</h2>
              <p>
                Sádrokarton není jedna univerzální bílá deska vhodná do každé
                místnosti. Jinou skladbu vyžaduje běžná příčka mezi chodbou a šatnou,
                jinou stěna oddělující ložnici, konstrukce v koupelně nebo podhled s
                vestavnými svítidly.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Teprve podle těchto informací lze určit profily, počet vrstev
                opláštění, druh desek, výplň dutiny a potřebné výztuhy. Změnit skladbu
                po uzavření konstrukce je výrazně složitější než správně ji připravit
                na začátku.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Před návrhem si proto ujasníme:</p>
              <ul className={`${styles.checklist} ${domy.checkFont}`}>
                {designQuestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section id="prace" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
            Jaké sádrokartonářské práce provádíme
          </h2>
          <div className={byty.scopeGrid} data-reveal-group>
            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>01</span>
              <h3 className={byty.scopeTitle}>Sádrokartonové příčky</h3>
              <p>
                Sádrokartonová příčka dokáže rozdělit pokoj bez klasického mokrého
                zdění. Využívá se například pro vytvoření ložnice, pracovny, šatny,
                dětského pokoje nebo oddělení chodby.
              </p>
              <p>
                Konstrukci tvoří podkladní profily, opláštění a podle požadavků také
                výplň dutiny. Před montáží příčky stanovíme její přesnou polohu,
                návaznost na dveře a výslednou tloušťku.
              </p>
              <p className={byty.scopeListTitle}>U příčky řešíme zejména:</p>
              <Bullets items={partitionChecks} />
              <p className={byty.scopeNote}>
                Akustické a vysokopevnostní desky mohou oproti běžnému sádrokartonu
                nabídnout jiné vlastnosti; konkrétní výrobek a systém je však potřeba
                vybrat podle požadované funkce celé příčky.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>02</span>
              <h3 className={byty.scopeTitle}>Jednoduché a víceúrovňové podhledy</h3>
              <p>
                Sádrokartonový podhled může snížit vysoký strop, sjednotit nerovný
                povrch, vytvořit prostor pro instalace nebo připravit nové osvětlení.
                Víceúrovňový podhled navíc umožňuje opticky rozdělit místnost,
                zvýraznit její část nebo vytvořit nepřímé světlo.
              </p>
              <p className={byty.scopeListTitle}>Než připravíme konstrukci, potřebujeme znát:</p>
              <Bullets items={ceilingInputs} />
              <p>
                U víceúrovňového řešení připravíme výšky a hrany tak, aby celek
                odpovídal rozměrům místnosti. Příliš složitý podhled může menší pokoj
                opticky zatížit, zatímco jednoduchá linie s promyšleným světlem může
                prostor přirozeněji členit.
              </p>
              <p className={byty.scopeNote}>
                Zvláštní pozornost věnujeme napojení podhledu na příčky a prostupům.
                Pokud má konstrukce plnit také akustickou nebo požární funkci, musí
                tomu odpovídat celý systém včetně detailů a zabudovaných svítidel.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>03</span>
              <h3 className={byty.scopeTitle}>Předsazené stěny a zakrytí instalací</h3>
              <p>
                Předsazená stěna může vytvořit rovný povrch před původní stěnou,
                zakrýt vybrané instalace nebo poskytnout prostor pro vhodnou izolační
                výplň. Sádrokarton používáme také pro instalační šachty, kastlíky a
                další konstrukce na míru.
              </p>
              <p className={s.cardTip}>
                Nezakrýváme však bez prověření aktivní vlhkost, závažné praskliny ani
                problém, který vyžaduje opravu původní konstrukce. Zakrytí příčiny by
                závadu neodstranilo a mohlo by zkomplikovat její pozdější řešení.
              </p>
              <p className={byty.scopeListTitle}>Před uzavřením dutiny kontrolujeme, zda:</p>
              <Bullets items={closingChecks} />
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>04</span>
              <h3 className={byty.scopeTitle}>Akustické konstrukce</h3>
              <p>
                Sádrokartonové příčky a předstěny lze navrhnout tak, aby pomáhaly
                omezit přenos zvuku mezi místnostmi. Využití najdou například mezi
                ložnicí a obývacím pokojem, dětským pokojem a pracovnou nebo u stěny
                sousedící s hlučnějším prostorem.
              </p>
              <p className={byty.scopeListTitle}>
                Než navrhneme řešení, potřebujeme vědět, jaký hluk vás ruší:
              </p>
              <Bullets items={noiseTypes} />
              <p className={byty.scopeNote}>
                Každý z těchto problémů může vyžadovat jiný přístup. Akustická
                předstěna na jedné stěně nemusí odstranit hluk, který se do místnosti
                dostává stropem, podlahou, dveřmi nebo netěsným prostupem.
              </p>
            </article>

            <article className={`${byty.scopeCard} ${s.cardWide}`}>
              <span className={byty.scopeNum}>05</span>
              <h3 className={byty.scopeTitle}>Konstrukce do koupelen</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Do koupelen a dalších prostor se zvýšenou vlhkostí nepatří běžná
                    bílá deska bez odpovídajících vlastností. Pro domácí koupelny se
                    používají desky určené do vlhkého prostředí; plochy přímo
                    zatěžované vodou zároveň potřebují vhodnou hydroizolaci, protože
                    samotný keramický obklad ochranu proti vodě nenahrazuje.
                  </p>
                  <p className={byty.scopeNote}>
                    Pokud sádrokarton vzniká jako součást celé koupelny, navážeme
                    konstrukci na další kroky realizace.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>
                    Při přípravě koupelnové konstrukce řešíme:
                  </p>
                  <Bullets items={bathroomChecks} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Acoustics as a system */}
      <section id="zvukova-izolace" className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Zvuková izolace jako celý systém</h2>
            <p className={s.strongLead}>
              Při požadavku na „odhlučnění“ nestačí vyplnit dutinu izolací. Zvuk se
              může šířit deskami, profily, navazujícími konstrukcemi i drobnými
              netěsnostmi.
            </p>
            <p>
              U podhledu je důležité také to, zda má příčka pokračovat až k nosnému
              stropu. Pokud končí pouze u podhledu, může se zvuk šířit dutinou nad
              ním. Technické detaily uvádějí dotažení příčky k nosnému stropu jako
              nejúčinnější způsob potlačení podélného vedení zvuku meziprostorem
              podhledu.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              Před realizací proto neslibujeme absolutní ticho na základě fotografie.
              Nejprve potřebujeme zjistit pravděpodobnou cestu přenosu zvuku a
              možnosti konkrétního prostoru.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>
              Funkční akustická skladba obvykle vyžaduje správnou kombinaci:
            </p>
            <ol className={domy.numList}>
              {acousticLayers.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What will hang on the wall */}
      <section id="vyztuhy" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Co bude na stěně viset</h2>
              <p className={s.bigLead}>
                Jedna z nejdůležitějších otázek při přípravě příčky zní:{" "}
                <strong className={styles.accent}>
                  Co na ni chcete zavěsit dnes a co možná přidáte později?
                </strong>
              </p>
              <p>
                Únosnost není daná jen deskou. Závisí také na konstrukci profilů,
                jejich rozteči, počtu vrstev opláštění, způsobu kotvení a hloubce
                zavěšeného předmětu. Při návrhu je proto potřeba znát parametry stěny
                i plánovaného břemene.
              </p>
              <p>
                Podle situace připravíme výztuhu, sanitární prvek, vhodnou desku nebo
                jiný způsob kotvení. U běžné příčky není vhodné automaticky
                předpokládat, že na libovolném místě později udrží těžkou skříňku.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Může jít o:</p>
              <ul className={`${styles.checklist} ${domy.goalGrid} ${domy.checkFont}`}>
                {hangingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.callout} ${s.calloutGap}`}>
                <strong className={styles.accent}>Praktický tip:</strong> Před
                opláštěním vyfoťte polohu profilů, výztuh, kabelů a instalačních tras.
                Dokumentace usnadní budoucí vrtání i případnou úpravu místnosti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak práce probíhají
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
      </section>

      {/* Inside the construction */}
      <section id="konstrukce" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2} data-reveal>
              Co se skrývá uvnitř konstrukce
            </h2>
            <p className={styles.lead} data-reveal>
              Po dokončení vidíte rovnou stěnu nebo čistý podhled. O výsledné funkci
              však často rozhoduje to, co už vidět není.
            </p>
          </div>
          <div className={styles.splitWide}>
            <img
              loading="lazy"
              decoding="async"
              data-reveal="left"
              src={`${IMG}/instalacni-sachta-pred.webp`}
              alt="Otevřená instalační šachta s rozvody a měřiči před zakrytím"
              className={styles.serviceImg}
            />
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Před uzavřením konstrukce kontrolujeme:</p>
              <table className={`${byty.typeTable} ${koup.tableFlush} ${s.tableFit}`}>
                <thead>
                  <tr>
                    <th>Skrytý prvek</th>
                    <th>Proč je důležitý</th>
                  </tr>
                </thead>
                <tbody>
                  {hiddenParts.map(([part, why]) => (
                    <tr key={part}>
                      <td>{part}</td>
                      <td>{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Surface quality */}
      <section id="povrch" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Jak má vypadat hotový povrch</h2>
            <p>
              Sádrokarton nemusí být automaticky připravený pro každou dekorativní
              úpravu. Kvalita tmelení se rozlišuje do stupňů{" "}
              <strong className={s.gold}>Q1 až Q4</strong>: od základního tmelení bez
              dekorativních nároků po celoplošné tmelení pro nejnáročnější dokončení.
              Pokud není sjednáno jinak, za standard se obvykle považuje Q2.
            </p>
            <p className={hub.tip}>
              Požadovanou úroveň je nejlepší určit před naceněním. Nestačí až po
              dokončení oznámit, že na stěnu bude dopadat LED světlo vedené těsně
              podél povrchu.
            </p>
          </div>
          <div className={domy.listCol} data-reveal="right">
            <p className={`${loc.checkTitle} ${koup.goldTitle}`}>
              Vyšší nároky mohou vzniknout například při:
            </p>
            <ul className={koup.darkList}>
              {surfaceDemands.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flat, house, single room */}
      <section id="byt-dum-pokoj" className={styles.container}>
        <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
          Sádrokarton v bytě, domě a jednotlivém pokoji
        </h2>
        <div className={s.trio} data-reveal-group>
          <article className={s.trioCol}>
            <h3>Sádrokarton v bytě</h3>
            <p>
              V bytě se nejčastěji řeší nová příčka, šatna, oddělená pracovna, podhled
              nebo zakrytí instalačního vedení. Před zahájením kontrolujeme přístup,
              výtah, ochranu společných prostor a pravidla domu.
            </p>
            <p className={styles.darkCallout}>
              Vlastník jednotky musí stavební úpravu uvnitř bytu předem oznámit osobě
              odpovědné za správu domu. Správa může požádat o ověření, že úprava
              neohrožuje nebo nemění společné části.
            </p>
          </article>
          <article className={s.trioCol}>
            <h3>Sádrokarton v domě</h3>
            <p>
              V rodinném domě mohou práce zahrnovat více místností, podkroví, chodbu
              nebo konstrukce propojené mezi podlažími. Důležitá je návaznost na
              střechu, stropy, schodiště a technické rozvody.
            </p>
            <p>
              Při širší úpravě koordinujeme sádrokarton s ostatními částmi projektu.
            </p>
          </article>
          <article className={s.trioCol}>
            <h3>Samostatný pokoj</h3>
            <p>
              Jednotlivý pokoj lze upravit bez rekonstrukce celého bytu. Může jít o
              rozdělení dětského pokoje, pracovní kout, akustickou předstěnu v ložnici
              nebo podhled v obývacím pokoji.
            </p>
            <p>
              Předem stanovíme, co je potřeba vystěhovat, jak ochráníme podlahu a zda
              bude místnost během tmelení a vysychání použitelná.
            </p>
          </article>
        </div>
      </section>

      {/* Before / after — gallery photos still to come */}
      <section id="pred-a-po" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${s.slimSection}`}>
          <div className={styles.sectionHead} style={{ marginBottom: 0 }}>
            <h2 className={styles.h2} data-reveal>
              Před a po realizaci
            </h2>
            <div className={domy.listCol} style={{ gap: 24 }} data-reveal>
              <p className={styles.lead}>
                Galerie má ukázat nejen estetickou proměnu, ale také kvalitu přípravy.
              </p>
              {/* TODO: doplnit fotografie skutečných sádrokartonářských realizací (před / podkonstrukce / po) */}
              <Link className={loc.btnOutlineGreen} href="/realizace">
                Prohlédnout realizace RekoGrinik →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="cena" className={styles.container}>
        <div className={styles.splitWide}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Co ovlivňuje cenu</h2>
            <p>
              Cenu nelze určit jen podle počtu metrů čtverečních desek. Ovlivňuje ji
              tvar, výška, skladba i množství detailů.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              Při porovnávání nabídek zkontrolujte, zda obsahují stejnou skladbu, počet
              vrstev, izolaci, tmelení, broušení a případnou malbu. Dvě nabídky
              označené jako „sádrokartonová příčka“ nemusí představovat stejný
              výsledek.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Rozhodující bývá:</p>
            <ol className={domy.numList}>
              {priceFactors.map((item, i) => (
                <li key={item.text}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Sádrokartonářské práce v Praze</h2>
            <p>
              Zakázky nejčastěji realizujeme na Praze 1, Praze 2, Praze 3, Praze 8,
              Praze 9 a Praze 10.
            </p>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              Ve starších domech na Žižkově, Vinohradech nebo ve Vršovicích se
              setkáváme s vysokými stropy, nerovnými návaznostmi a různými předchozími
              úpravami. Části těchto čtvrtí leží v památkové zóně; pokud by
              konstrukce ovlivňovala chráněnou část nebo hodnotný prvek domu, je
              potřeba podmínky ověřit předem.
            </p>
            <p>
              V centru Prahy je důležitá vykládka dlouhých desek a ochrana schodišť.
              Ve Vysočanech, Karlíně nebo novějších projektech na Žižkově mohou platit
              pravidla pro rezervaci výtahu a přepravu materiálu.
            </p>
            <p>
              Na Proseku, v Bohnicích nebo ve Strašnicích je zase důležité správně
              určit konstrukci, do které se nový systém kotví. Lokalitu nespojujeme
              automaticky s jediným technickým řešením — každý prostor nejdříve
              prohlédneme.
            </p>
            <p>
              Jak pracujeme v Karlíně a Libni, najdete na stránce{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-8">
                rekonstrukce na Praze 8
              </Link>. Na Žižkově a Jarově, kde máme i kontaktní adresu, nabízíme{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-3">
                příčky a podhledy na Praze 3
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist before measuring */}
      <section id="priprava" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Kontrolní seznam před zaměřením</h2>
            <p>Před návštěvou si připravte:</p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Umístění nové příčky si před objednáním
              vyznačte na podlaze malířskou páskou. Snadno ověříte průchod, otevírání
              dveří i prostor pro nábytek.
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
            Sádrokarton na Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src="/realizace/koupelna-na-klic-po-3.webp"
          alt="Instalační šachta zakrytá obkladem s revizními dvířky k měřičům"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat sádrokartonářské práce</h2>
            <p>
              Potřebujete novou příčku, podhled, předstěnu nebo akustické řešení?
              Pošlete nám fotografie místnosti a stručně popište, čeho chcete
              dosáhnout.
            </p>
            <p>
              Přijedeme prostor zaměřit, probereme funkci konstrukce a připravíme
              podrobný rozpočet před zahájením.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="sadrokarton_contact_poptavka"
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
