import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MultilingualSEO from "@/components/seo/MultilingualSEO";
import SocialMediaMeta from "@/components/seo/SocialMediaMeta";

export const metadata: Metadata = {
  title: {
    default:
      "RekoGrinik - Професійні ремонтні роботи та реконструкція | Чехія, Польща, Україна",
    template: "%s | RekoGrinik",
  },
  description:
    "Професійні ремонтні роботи, реконструкція квартир, ванних кімнат, офісів. Якісні будівельні послуги в Чехії, Польщі, Україні. Безкоштовна консультація та оцінка робіт.",
  keywords: [
    // Українська - основні
    "ремонт квартир",
    "реконструкція",
    "будівельні роботи",
    "ремонт ванної",
    "ремонт офісу",
    "ремонт будинку",
    "дизайн інтер'єру",
    "будівництво",

    // Українська - прості та примітивні
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

    // Чеська - основні
    "renovace bytů",
    "rekonstrukce",
    "stavební práce",
    "oprava koupelny",
    "renovace kanceláří",
    "interiérový design",
    "stavba",

    // Чеська - прості та примітивні
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

    // Польська - основні
    "remont mieszkań",
    "renowacja",
    "prace budowlane",
    "remont łazienki",
    "remont biur",
    "design wnętrz",
    "budowa",

    // Польська - прості та примітивні
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

    // Англійська - основні
    "renovation",
    "reconstruction",
    "building works",
    "apartment renovation",
    "bathroom renovation",
    "office renovation",
    "interior design",
    "construction",

    // Англійська - прості та примітивні
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

    // Російська - основні
    "ремонт квартир",
    "реконструкция",
    "строительные работы",
    "ремонт ванной",
    "ремонт офиса",
    "дизайн интерьера",
    "строительство",

    // Російська - прості та примітивні
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

    // Турецька - основні
    "renovasyon",
    "tadilat",
    "inşaat işleri",
    "banyo yenileme",
    "ofis yenileme",
    "iç tasarım",
    "yapı",

    // Турецька - прості та примітивні
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

    // Географічні запити - Чехія
    "ремонт чехія",
    "ремонт прага",
    "ремонт брно",
    "ремонт острава",
    "ремонт пльзень",
    "ремонт чешска",
    "ремонт чехия",
    "renovace česko",
    "renovace praha",
    "renovace brno",
    "renovace ostrava",
    "renovace plzeň",
    "renovace česká republika",
    "remont cz",
    "remont praha",
    "remont brno",
    "remont ostrava",
    "remont plzeň",
    "remont česká republika",
    "renovation czech republic",
    "renovation prague",
    "renovation brno",
    "renovation ostrava",
    "renovation plzen",
    "ремонт чехия",
    "ремонт прага",
    "ремонт брно",
    "ремонт острава",
    "ремонт пльзень",
    "ремонт чешская республика",
    "tamirat çek cumhuriyeti",
    "tamirat prag",
    "tamirat brno",
    "tamirat ostrava",
    "tamirat plzeň",

    // Географічні запити - Польща
    "ремонт польща",
    "ремонт варшава",
    "ремонт краків",
    "ремонт гданськ",
    "ремонт вроцлав",
    "ремонт польська",
    "remont polska",
    "remont warszawa",
    "remont kraków",
    "remont gdańsk",
    "remont wrocław",
    "remont polska",
    "renovation poland",
    "renovation warsaw",
    "renovation krakow",
    "renovation gdansk",
    "renovation wroclaw",
    "ремонт польша",
    "ремонт варшава",
    "ремонт краков",
    "ремонт гданьск",
    "ремонт вроцлав",
    "ремонт польская",
    "tamirat polonya",
    "tamirat varşova",
    "tamirat krakow",
    "tamirat gdansk",
    "tamirat wroclaw",

    // Географічні запити - Україна
    "ремонт україна",
    "ремонт київ",
    "ремонт львів",
    "ремонт харків",
    "ремонт одеса",
    "ремонт дніпро",
    "ремонт українська",
    "renovace ukrajina",
    "renovace kyjev",
    "renovace lvov",
    "renovace charkov",
    "renovace oděsa",
    "renovace dněpr",
    "remont ukraina",
    "remont kijów",
    "remont lwów",
    "remont charków",
    "remont odessa",
    "remont dniepr",
    "renovation ukraine",
    "renovation kiev",
    "renovation lviv",
    "renovation kharkiv",
    "renovation odessa",
    "renovation dnieper",
    "ремонт украина",
    "ремонт киев",
    "ремонт львов",
    "ремонт харьков",
    "ремонт одесса",
    "ремонт днепр",
    "ремонт украинская",
    "tamirat ukrayna",
    "tamirat kiev",
    "tamirat lviv",
    "tamirat kharkiv",
    "tamirat odessa",
    "tamirat dnieper",

    // Райони та вулиці (приклади)
    "ремонт прага 1",
    "ремонт прага 2",
    "ремонт прага 3",
    "ремонт прага 4",
    "ремонт прага 5",
    "ремонт прага 6",
    "ремонт прага 7",
    "ремонт прага 8",
    "ремонт прага 9",
    "renovace praha 1",
    "renovace praha 2",
    "renovace praha 3",
    "renovace praha 4",
    "renovace praha 5",
    "renovace praha 6",
    "renovace praha 7",
    "renovace praha 8",
    "renovace praha 9",
    "remont warszawa śródmieście",
    "remont warszawa mokotów",
    "remont warszawa żoliborz",
    "remont warszawa wola",
    "remont warszawa ochota",
    "ремонт київ центр",
    "ремонт київ печерськ",
    "ремонт київ поділ",
    "ремонт київ шевченківський",
    "ремонт київ солом'янський",

    // Конкретні типи робіт - прості
    "ремонт підлоги",
    "ремонт стін",
    "ремонт стелі",
    "ремонт дверей",
    "ремонт вікон",
    "ремонт сантехніки",
    "ремонт електрики",
    "oprava podlahy",
    "oprava stěn",
    "oprava stropu",
    "oprava dveří",
    "oprava oken",
    "oprava sanitár",
    "oprava elektro",
    "remont podłogi",
    "remont ścian",
    "remont sufitu",
    "remont drzwi",
    "remont okien",
    "remont hydraulika",
    "remont elektryka",
    "floor repair",
    "wall repair",
    "ceiling repair",
    "door repair",
    "window repair",
    "plumbing repair",
    "electrical repair",
    "ремонт пола",
    "ремонт стен",
    "ремонт потолка",
    "ремонт дверей",
    "ремонт окон",
    "ремонт сантехники",
    "ремонт электрики",
    "zemin tamiri",
    "duvar tamiri",
    "tavan tamiri",
    "kapı tamiri",
    "pencere tamiri",
    "tesisat tamiri",
    "elektrik tamiri",

    // Додаткові прості варіанти
    "ремонт швидко",
    "ремонт якісно",
    "ремонт недорого",
    "ремонт під ключ",
    "ремонт повний",
    "ремонт комплексний",
    "renovace rychle",
    "renovace kvalitně",
    "renovace levně",
    "renovace kompletní",
    "renovace plná",
    "renovace komplexní",
    "remont szybko",
    "remont jakościowo",
    "remont tanio",
    "remont pod klucz",
    "remont pełny",
    "remont kompleksowy",
    "repair fast",
    "repair quality",
    "repair cheap",
    "repair complete",
    "repair full",
    "repair comprehensive",
    "ремонт быстро",
    "ремонт качественно",
    "ремонт дешево",
    "ремонт под ключ",
    "ремонт полный",
    "ремонт комплексный",
    "tamirat hızlı",
    "tamirat kaliteli",
    "tamirat ucuz",
    "tamirat tam",
    "tamirat tamam",
    "tamirat kapsamlı",
  ],
  authors: [{ name: "RekoGrinik Team" }],
  creator: "RekoGrinik",
  publisher: "RekoGrinik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rekogrinik.com"),
  alternates: {
    canonical: "/",
    languages: {
      "uk-UA": "/uk",
      "cs-CZ": "/cs",
      "pl-PL": "/pl",
      "en-US": "/en",
      "ru-RU": "/ru",
      "tr-TR": "/tr",
    },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://rekogrinik.com",
    siteName: "RekoGrinik",
    title: "RekoGrinik - Професійні ремонтні роботи та реконструкція",
    description:
      "Професійні ремонтні роботи, реконструкція квартир, ванних кімнат, офісів. Якісні будівельні послуги в Чехії, Польщі, Україні.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RekoGrinik - Професійні ремонтні роботи",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "RekoGrinik - Квадратне зображення для соцмереж",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RekoGrinik - Професійні ремонтні роботи та реконструкція",
    description:
      "Професійні ремонтні роботи, реконструкція квартир, ванних кімнат, офісів. Якісні будівельні послуги.",
    images: ["/twitter-image.jpg"],
    creator: "@rekogrinik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a513d" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RekoGrinik" />
        <meta name="application-name" content="RekoGrinik" />
        <meta name="msapplication-TileColor" content="#0a513d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Facebook / Meta метатеги */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="fb:pages" content="your-facebook-page-id" />
        <meta property="article:author" content="RekoGrinik Team" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/rekogrinik"
        />
        <meta property="article:section" content="Construction & Renovation" />
        <meta
          property="article:tag"
          content="ремонт,реконструкція,будівництво"
        />

        {/* LinkedIn метатеги */}
        <meta property="linkedin:owner" content="rekogrinik" />
        <meta
          name="linkedin:title"
          content="RekoGrinik - Професійні ремонтні роботи"
        />
        <meta
          name="linkedin:description"
          content="Професійні ремонтні роботи, реконструкція квартир, ванних кімнат, офісів"
        />
        <meta
          name="linkedin:image"
          content="https://rekogrinik.com/linkedin-image.jpg"
        />

        {/* WhatsApp метатеги */}
        <meta
          property="whatsapp:title"
          content="RekoGrinik - Ремонтні послуги"
        />
        <meta
          property="whatsapp:description"
          content="Професійні ремонтні роботи в Чехії, Польщі, Україні"
        />
        <meta
          property="whatsapp:image"
          content="https://rekogrinik.com/whatsapp-image.jpg"
        />

        {/* Telegram метатеги */}
        <meta
          property="telegram:title"
          content="RekoGrinik - Ремонт під ключ"
        />
        <meta
          property="telegram:description"
          content="Якісні будівельні послуги та реконструкція"
        />
        <meta
          property="telegram:image"
          content="https://rekogrinik.com/telegram-image.jpg"
        />

        {/* Pinterest метатеги */}
        <meta name="pinterest:title" content="RekoGrinik - Дизайн та ремонт" />
        <meta
          name="pinterest:description"
          content="Ідеї для ремонту квартир, ванних кімнат, офісів"
        />
        <meta
          name="pinterest:image"
          content="https://rekogrinik.com/pinterest-image.jpg"
        />
        <meta name="pinterest:rich-pin" content="true" />

        {/* Instagram метатеги */}
        <meta
          property="instagram:title"
          content="RekoGrinik - До та після ремонту"
        />
        <meta
          property="instagram:description"
          content="Результати наших робіт - галерея проектів"
        />
        <meta
          property="instagram:image"
          content="https://rekogrinik.com/instagram-image.jpg"
        />

        {/* TikTok метатеги */}
        <meta
          property="tiktok:title"
          content="RekoGrinik - Ремонтні лайфхаки"
        />
        <meta
          property="tiktok:description"
          content="Корисні поради з ремонту та будівництва"
        />
        <meta
          property="tiktok:image"
          content="https://rekogrinik.com/tiktok-image.jpg"
        />

        {/* YouTube метатеги */}
        <meta property="youtube:title" content="RekoGrinik - Процес ремонту" />
        <meta
          property="youtube:description"
          content="Відео процесу виконання ремонтних робіт"
        />
        <meta
          property="youtube:image"
          content="https://rekogrinik.com/youtube-image.jpg"
        />

        {/* VKontakte метатеги */}
        <meta property="vk:title" content="RekoGrinik - Ремонт в Україні" />
        <meta
          property="vk:description"
          content="Будівельні послуги в Україні, Чехії, Польщі"
        />
        <meta
          property="vk:image"
          content="https://rekogrinik.com/vk-image.jpg"
        />

        {/* Odnoklassniki метатеги */}
        <meta property="ok:title" content="RekoGrinik - Реконструкція" />
        <meta
          property="ok:description"
          content="Повний ремонт квартир та офісів"
        />
        <meta
          property="ok:image"
          content="https://rekogrinik.com/ok-image.jpg"
        />

        {/* Discord метатеги */}
        <meta
          property="discord:title"
          content="RekoGrinik - Будівельна команда"
        />
        <meta
          property="discord:description"
          content="Професійна команда ремонтників"
        />
        <meta
          property="discord:image"
          content="https://rekogrinik.com/discord-image.jpg"
        />

        {/* Reddit метатеги */}
        <meta property="reddit:title" content="RekoGrinik - Ремонтні поради" />
        <meta
          property="reddit:description"
          content="Корисні поради з ремонту від професіоналів"
        />
        <meta
          property="reddit:image"
          content="https://rekogrinik.com/reddit-image.jpg"
        />

        {/* Snapchat метатеги */}
        <meta property="snapchat:title" content="RekoGrinik - До/Після" />
        <meta
          property="snapchat:description"
          content="Результати ремонту в реальному часі"
        />
        <meta
          property="snapchat:image"
          content="https://rekogrinik.com/snapchat-image.jpg"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RekoGrinik",
              description:
                "Професійні ремонтні роботи, реконструкція квартир, ванних кімнат, офісів",
              url: "https://rekogrinik.com",
              logo: "https://rekogrinik.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+420-608-583-115",
                contactType: "customer service",
                availableLanguage: [
                  "Ukrainian",
                  "Czech",
                  "Polish",
                  "English",
                  "Russian",
                  "Turkish",
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: ["CZ", "PL", "UA"],
              },
              sameAs: [
                "https://www.facebook.com/rekogrinik",
                "https://www.instagram.com/rekogrinik",
                "https://t.me/rekogrinik",
              ],
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
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Реконструкція ванних кімнат",
                      description: "Сучасний ремонт ванних кімнат",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ремонт офісів",
                      description: "Корпоративний ремонт офісних приміщень",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <MultilingualSEO />
        <SocialMediaMeta />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
