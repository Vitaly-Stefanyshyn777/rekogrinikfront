"use client";

import { useEffect } from "react";

interface MultilingualSEOProps {
  currentLang?: string;
}

export default function MultilingualSEO({
  currentLang = "uk",
}: MultilingualSEOProps) {
  useEffect(() => {
    // Визначаємо мову користувача
    const detectLanguage = () => {
      if (typeof window === "undefined") return "uk";

      const browserLang =
        navigator.language || navigator.languages?.[0] || "uk";
      const langCode = browserLang.split("-")[0].toLowerCase();

      // Мапінг мов
      const languageMap: Record<string, string> = {
        uk: "uk",
        ua: "uk",
        cs: "cs",
        cz: "cs",
        pl: "pl",
        en: "en",
        ru: "ru",
        tr: "tr",
        de: "en", // Німецька -> Англійська
        fr: "en", // Французька -> Англійська
        es: "en", // Іспанська -> Англійська
        it: "en", // Італійська -> Англійська
      };

      return languageMap[langCode] || "en";
    };

    // SEO ключові слова для різних мов (включаючи прості та примітивні)
    const seoKeywords = {
      uk: [
        // Основні
        "ремонт квартир",
        "реконструкція",
        "будівельні роботи",
        "ремонт ванної",
        "ремонт офісу",
        "дизайн інтер'єру",
        "будівництво",
        // Прості та примітивні
        "ремонт",
        "ремонт під ключ",
        "ремонт недорого",
        "ремонт швидко",
        "ремонт якісно",
        "ремонт дешево",
        "ремонт ціна",
        "ремонт вартість",
        "реконструкція квартир",
        "реконструкція будинку",
        "реконструкція офісу",
        "реконструкція ванної",
        "реконструкція під ключ",
        "будівельні роботи",
        "будівельні послуги",
        "будівельна компанія",
        "будівельники",
        "будівельник",
        "майстер",
        "майстри",
        "ремонтник",
        "ремонтники",
        "ремонтна бригада",
        "ремонтна компанія",
        "ремонтні послуги",
        "ремонтні роботи",
        // Географічні
        "ремонт чехія",
        "ремонт прага",
        "ремонт брно",
        "ремонт острава",
        "ремонт пльзень",
        "ремонт чешска",
        "ремонт чехия",
        "ремонт польща",
        "ремонт варшава",
        "ремонт краків",
        "ремонт гданськ",
        "ремонт вроцлав",
        "ремонт польська",
        "ремонт україна",
        "ремонт київ",
        "ремонт львів",
        "ремонт харків",
        "ремонт одеса",
        "ремонт дніпро",
        "ремонт українська",
        // Райони
        "ремонт прага 1",
        "ремонт прага 2",
        "ремонт прага 3",
        "ремонт прага 4",
        "ремонт прага 5",
        "ремонт прага 6",
        "ремонт прага 7",
        "ремонт прага 8",
        "ремонт прага 9",
        "ремонт київ центр",
        "ремонт київ печерськ",
        "ремонт київ поділ",
        "ремонт київ шевченківський",
        "ремонт київ солом'янський",
        // Конкретні роботи
        "ремонт підлоги",
        "ремонт стін",
        "ремонт стелі",
        "ремонт дверей",
        "ремонт вікон",
        "ремонт сантехніки",
        "ремонт електрики",
        "ремонт швидко",
        "ремонт якісно",
        "ремонт недорого",
        "ремонт під ключ",
        "ремонт повний",
        "ремонт комплексний",
      ],
      cs: [
        // Основні
        "renovace bytů",
        "rekonstrukce",
        "stavební práce",
        "oprava koupelny",
        "renovace kanceláří",
        "interiérový design",
        "stavba",
        // Прості та примітивні
        "renovace",
        "renovace levně",
        "renovace rychle",
        "renovace kvalitně",
        "renovace levné",
        "renovace cena",
        "renovace ceny",
        "rekonstrukce bytu",
        "rekonstrukce domu",
        "rekonstrukce kanceláře",
        "rekonstrukce koupelny",
        "rekonstrukce kompletní",
        "stavební práce",
        "stavební služby",
        "stavební firma",
        "stavbaři",
        "stavbař",
        "mistr",
        "mistři",
        "opravář",
        "opraváři",
        "renovační tým",
        "renovační firma",
        "renovační služby",
        "renovační práce",
        "opravy",
        "oprava",
        "opravy bytů",
        // Географічні
        "renovace česko",
        "renovace praha",
        "renovace brno",
        "renovace ostrava",
        "renovace plzeň",
        "renovace česká republika",
        "renovace polsko",
        "renovace varšava",
        "renovace krakov",
        "renovace gdaňsk",
        "renovace vratislav",
        "renovace ukrajina",
        "renovace kyjev",
        "renovace lvov",
        "renovace charkov",
        "renovace oděsa",
        "renovace dněpr",
        // Райони
        "renovace praha 1",
        "renovace praha 2",
        "renovace praha 3",
        "renovace praha 4",
        "renovace praha 5",
        "renovace praha 6",
        "renovace praha 7",
        "renovace praha 8",
        "renovace praha 9",
        // Конкретні роботи
        "oprava podlahy",
        "oprava stěn",
        "oprava stropu",
        "oprava dveří",
        "oprava oken",
        "oprava sanitár",
        "oprava elektro",
        "renovace rychle",
        "renovace kvalitně",
        "renovace levně",
        "renovace kompletní",
        "renovace plná",
        "renovace komplexní",
        // Спеціальні ключові фрази
        "komplexní rekonstrukce na klíč",
        "celková rekonstrukce bytů",
        "rekonstrukce od projektu po předání",
        "elektrika instalatérství",
        "dokončovací práce",
        "koupelny projekt montáž",
        "obklady koupelny",
        "kompletní rekonstrukce koupelen",
        "moderní design koupelny",
        "kvalitní obklady",
        "spolehlivé instalace",
        "sádrokarton příčky",
        "sádrokarton podhledy",
        "zvuková izolace",
        "profesionální sádrokartonářské práce",
        "vytváření příček",
        "víceúrovňové podhledy",
        "malířské práce",
        "malování štukování",
        "dokončovací práce",
        "profesionální malířské práce",
        "záruka čistého výsledku",
        "dlouhá trvanlivost",
        "bourací práce",
        "demontáž přípravné práce",
        "rychlé bourací práce",
        "bezpečné bourací práce",
        "odstranění příček",
        "staré povrchy",
        "příprava prostoru",
        "podlahářské práce",
        "laminát parkety",
        "vinyl dlažba",
        "pokládka podlahových krytin",
        "přesnost dlouhá životnost",
        "zednické práce",
        "zdivo omítky",
        "opravy zednické",
        "spolehlivé zednické práce",
        "nové konstrukce",
        "špičkové provedení",
      ],
      pl: [
        // Основні
        "remont mieszkań",
        "renowacja",
        "prace budowlane",
        "remont łazienki",
        "remont biur",
        "design wnętrz",
        "budowa",
        // Прості та примітивні
        "remont",
        "remont tanio",
        "remont szybko",
        "remont jakościowo",
        "remont tani",
        "remont cena",
        "remont ceny",
        "renowacja mieszkania",
        "renowacja domu",
        "renowacja biura",
        "renowacja łazienki",
        "renowacja kompletna",
        "prace budowlane",
        "usługi budowlane",
        "firma budowlana",
        "budowlańcy",
        "budowlaniec",
        "mistrz",
        "mistrzowie",
        "remontowiec",
        "remontowcy",
        "zespół remontowy",
        "firma remontowa",
        "usługi remontowe",
        "prace remontowe",
        // Географічні
        "remont cz",
        "remont praha",
        "remont brno",
        "remont ostrava",
        "remont plzeň",
        "remont česká republika",
        "remont polska",
        "remont warszawa",
        "remont kraków",
        "remont gdańsk",
        "remont wrocław",
        "remont polska",
        "remont ukraina",
        "remont kijów",
        "remont lwów",
        "remont charków",
        "remont odessa",
        "remont dniepr",
        // Райони
        "remont warszawa śródmieście",
        "remont warszawa mokotów",
        "remont warszawa żoliborz",
        "remont warszawa wola",
        "remont warszawa ochota",
        // Конкретні роботи
        "remont podłogi",
        "remont ścian",
        "remont sufitu",
        "remont drzwi",
        "remont okien",
        "remont hydraulika",
        "remont elektryka",
        "remont szybko",
        "remont jakościowo",
        "remont tanio",
        "remont pod klucz",
        "remont pełny",
        "remont kompleksowy",
      ],
      en: [
        // Основні
        "renovation",
        "reconstruction",
        "building works",
        "apartment renovation",
        "bathroom renovation",
        "office renovation",
        "interior design",
        "construction",
        // Прості та примітивні
        "repair",
        "repair cheap",
        "repair fast",
        "repair quality",
        "repair cheaply",
        "repair price",
        "repair cost",
        "repair cost low",
        "renovation apartment",
        "renovation house",
        "renovation office",
        "renovation bathroom",
        "renovation complete",
        "renovation full",
        "building works",
        "building services",
        "building company",
        "builders",
        "builder",
        "master",
        "masters",
        "repairman",
        "repairmen",
        "renovation team",
        "renovation company",
        "renovation services",
        "renovation works",
        "repairs",
        "repair",
        "home repair",
        // Географічні
        "renovation czech republic",
        "renovation prague",
        "renovation brno",
        "renovation ostrava",
        "renovation plzen",
        "renovation poland",
        "renovation warsaw",
        "renovation krakow",
        "renovation gdansk",
        "renovation wroclaw",
        "renovation ukraine",
        "renovation kiev",
        "renovation lviv",
        "renovation kharkiv",
        "renovation odessa",
        "renovation dnieper",
        // Конкретні роботи
        "floor repair",
        "wall repair",
        "ceiling repair",
        "door repair",
        "window repair",
        "plumbing repair",
        "electrical repair",
        "repair fast",
        "repair quality",
        "repair cheap",
        "repair complete",
        "repair full",
        "repair comprehensive",
      ],
      ru: [
        // Основні
        "ремонт квартир",
        "реконструкция",
        "строительные работы",
        "ремонт ванной",
        "ремонт офиса",
        "дизайн интерьера",
        "строительство",
        // Прості та примітивні
        "ремонт",
        "ремонт недорого",
        "ремонт быстро",
        "ремонт качественно",
        "ремонт дешево",
        "ремонт цена",
        "ремонт стоимость",
        "реконструкция квартиры",
        "реконструкция дома",
        "реконструкция офиса",
        "реконструкция ванной",
        "реконструкция под ключ",
        "строительные работы",
        "строительные услуги",
        "строительная компания",
        "строители",
        "строитель",
        "мастер",
        "мастера",
        "ремонтник",
        "ремонтники",
        "ремонтная бригада",
        "ремонтная компания",
        "ремонтные услуги",
        "ремонтные работы",
        // Географічні
        "ремонт чехия",
        "ремонт прага",
        "ремонт брно",
        "ремонт острава",
        "ремонт пльзень",
        "ремонт чешская республика",
        "ремонт польша",
        "ремонт варшава",
        "ремонт краков",
        "ремонт гданьск",
        "ремонт вроцлав",
        "ремонт польская",
        "ремонт украина",
        "ремонт киев",
        "ремонт львов",
        "ремонт харьков",
        "ремонт одесса",
        "ремонт днепр",
        "ремонт украинская",
        // Конкретні роботи
        "ремонт пола",
        "ремонт стен",
        "ремонт потолка",
        "ремонт дверей",
        "ремонт окон",
        "ремонт сантехники",
        "ремонт электрики",
        "ремонт быстро",
        "ремонт качественно",
        "ремонт дешево",
        "ремонт под ключ",
        "ремонт полный",
        "ремонт комплексный",
      ],
      tr: [
        // Основні
        "renovasyon",
        "tadilat",
        "inşaat işleri",
        "banyo yenileme",
        "ofis yenileme",
        "iç tasarım",
        "yapı",
        // Прості та примітивні
        "tamirat",
        "tamirat ucuz",
        "tamirat hızlı",
        "tamirat kaliteli",
        "tamirat ucuz",
        "tamirat fiyat",
        "tamirat maliyet",
        "renovasyon daire",
        "renovasyon ev",
        "renovasyon ofis",
        "renovasyon banyo",
        "renovasyon tam",
        "renovasyon komple",
        "inşaat işleri",
        "inşaat hizmetleri",
        "inşaat şirketi",
        "inşaatçılar",
        "inşaatçı",
        "usta",
        "ustalar",
        "tamirci",
        "tamirciler",
        "tamir ekibi",
        "tamir şirketi",
        "tamir hizmetleri",
        "tamir işleri",
        // Географічні
        "tamirat çek cumhuriyeti",
        "tamirat prag",
        "tamirat brno",
        "tamirat ostrava",
        "tamirat plzeň",
        "tamirat polonya",
        "tamirat varşova",
        "tamirat krakow",
        "tamirat gdansk",
        "tamirat wroclaw",
        "tamirat ukrayna",
        "tamirat kiev",
        "tamirat lviv",
        "tamirat kharkiv",
        "tamirat odessa",
        "tamirat dnieper",
        // Конкретні роботи
        "zemin tamiri",
        "duvar tamiri",
        "tavan tamiri",
        "kapı tamiri",
        "pencere tamiri",
        "tesisat tamiri",
        "elektrik tamiri",
        "tamirat hızlı",
        "tamirat kaliteli",
        "tamirat ucuz",
        "tamirat tam",
        "tamirat tamam",
        "tamirat kapsamlı",
      ],
    };

    // Оновлюємо метатеги динамічно
    const updateMetaTags = (lang: string) => {
      if (typeof document === "undefined") return;

      const keywords =
        seoKeywords[lang as keyof typeof seoKeywords] || seoKeywords.en;

      // Оновлюємо keywords
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement("meta");
        keywordsMeta.setAttribute("name", "keywords");
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute("content", keywords.join(", "));

      // Оновлюємо hreflang теги
      const existingHreflang = document.querySelectorAll(
        'link[rel="alternate"][hreflang]'
      );
      existingHreflang.forEach((link) => link.remove());

      const languages = ["uk", "cs", "pl", "en", "ru", "tr"];
      languages.forEach((langCode) => {
        const link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", langCode);
        link.setAttribute("href", `https://rekogrinik.com/${langCode}`);
        document.head.appendChild(link);
      });

      // Додаємо x-default
      const defaultLink = document.createElement("link");
      defaultLink.setAttribute("rel", "alternate");
      defaultLink.setAttribute("hreflang", "x-default");
      defaultLink.setAttribute("href", "https://rekogrinik.com/");
      document.head.appendChild(defaultLink);
    };

    const detectedLang = detectLanguage();
    updateMetaTags(detectedLang);

    // Додаємо структуровані дані для пошукових систем
    const addStructuredData = () => {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) return;

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "RekoGrinik",
        description: "Professional renovation and reconstruction services",
        url: "https://rekogrinik.com",
        telephone: "+420-608-583-115",
        email: "rekogrinikcz@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: ["CZ", "PL", "UA"],
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.0755,
          longitude: 14.4378,
        },
        openingHours: "Mo-Fr 01:00-20:00,Sa-Su 09:00-18:00",
        priceRange: "$$",
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 50.0755,
            longitude: 14.4378,
          },
          geoRadius: "500000",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Ремонтні послуги",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ремонт квартир",
                description: "Повний ремонт квартир під ключ",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        },
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    addStructuredData();
  }, [currentLang]);

  return null; // Цей компонент не рендерить нічого
}
