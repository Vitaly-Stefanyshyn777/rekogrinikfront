import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MultilingualSEO from "@/components/seo/MultilingualSEO";
import SocialMediaMeta from "@/components/seo/SocialMediaMeta";

export const metadata: Metadata = {
  title: {
    default:
      "RekoGrinik - Professional Renovation & Reconstruction Services | Czech Republic, Poland, Ukraine",
    template: "%s | RekoGrinik",
  },
  description:
    "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation. Quality construction services in Czech Republic, Poland, Ukraine. Free consultation and work estimates.",
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

    // Чеська - спеціальні ключові фрази
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
    locale: "en_US",
    url: "https://rekogrinik.com",
    siteName: "RekoGrinik",
    title: "RekoGrinik - Professional Renovation & Reconstruction Services",
    description:
      "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation. Quality construction services in Czech Republic, Poland, Ukraine.",
    images: [
      {
        url: "/img7.jpg",
        width: 1200,
        height: 630,
        alt: "RekoGrinik - Professional Renovation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RekoGrinik - Professional Renovation & Reconstruction Services",
    description:
      "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation. Quality construction services.",
    images: ["/img7.jpg"],
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
        {/* Next.js автоматично додасть icon.svg з app/icon.svg */}
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
          content="renovation,reconstruction,construction,building,repair"
        />

        {/* LinkedIn метатеги */}
        <meta property="linkedin:owner" content="rekogrinik" />
        <meta
          name="linkedin:title"
          content="RekoGrinik - Professional Renovation Services"
        />
        <meta
          name="linkedin:description"
          content="Professional renovation services, apartment reconstruction, bathroom renovation, office renovation"
        />
        <meta
          name="linkedin:image"
          content="https://rekogrinik.com/linkedin-image.jpg"
        />

        {/* WhatsApp метатеги */}
        <meta
          property="whatsapp:title"
          content="RekoGrinik - Renovation Services"
        />
        <meta
          property="whatsapp:description"
          content="Professional renovation services in Czech Republic, Poland, Ukraine"
        />
        <meta
          property="whatsapp:image"
          content="https://rekogrinik.com/whatsapp-image.jpg"
        />

        {/* Telegram метатеги */}
        <meta
          property="telegram:title"
          content="RekoGrinik - Turnkey Renovation"
        />
        <meta
          property="telegram:description"
          content="Quality construction services and reconstruction"
        />
        <meta
          property="telegram:image"
          content="https://rekogrinik.com/telegram-image.jpg"
        />

        {/* Pinterest метатеги */}
        <meta
          name="pinterest:title"
          content="RekoGrinik - Design & Renovation"
        />
        <meta
          name="pinterest:description"
          content="Renovation ideas for apartments, bathrooms, offices"
        />
        <meta
          name="pinterest:image"
          content="https://rekogrinik.com/pinterest-image.jpg"
        />
        <meta name="pinterest:rich-pin" content="true" />

        {/* Instagram метатеги */}
        <meta
          property="instagram:title"
          content="RekoGrinik - Before & After Renovation"
        />
        <meta
          property="instagram:description"
          content="Results of our work - project gallery"
        />
        <meta
          property="instagram:image"
          content="https://rekogrinik.com/instagram-image.jpg"
        />

        {/* TikTok метатеги */}
        <meta
          property="tiktok:title"
          content="RekoGrinik - Renovation Lifehacks"
        />
        <meta
          property="tiktok:description"
          content="Useful renovation and construction tips"
        />
        <meta
          property="tiktok:image"
          content="https://rekogrinik.com/tiktok-image.jpg"
        />

        {/* YouTube метатеги */}
        <meta
          property="youtube:title"
          content="RekoGrinik - Renovation Process"
        />
        <meta
          property="youtube:description"
          content="Video of renovation work process"
        />
        <meta
          property="youtube:image"
          content="https://rekogrinik.com/youtube-image.jpg"
        />

        {/* VKontakte метатеги */}
        <meta
          property="vk:title"
          content="RekoGrinik - Renovation in Ukraine"
        />
        <meta
          property="vk:description"
          content="Construction services in Ukraine, Czech Republic, Poland"
        />
        <meta
          property="vk:image"
          content="https://rekogrinik.com/vk-image.jpg"
        />

        {/* Odnoklassniki метатеги */}
        <meta property="ok:title" content="RekoGrinik - Reconstruction" />
        <meta
          property="ok:description"
          content="Complete apartment and office renovation"
        />
        <meta
          property="ok:image"
          content="https://rekogrinik.com/ok-image.jpg"
        />

        {/* Discord метатеги */}
        <meta
          property="discord:title"
          content="RekoGrinik - Construction Team"
        />
        <meta
          property="discord:description"
          content="Professional renovation team"
        />
        <meta
          property="discord:image"
          content="https://rekogrinik.com/discord-image.jpg"
        />

        {/* Reddit метатеги */}
        <meta property="reddit:title" content="RekoGrinik - Renovation Tips" />
        <meta
          property="reddit:description"
          content="Useful renovation tips from professionals"
        />
        <meta
          property="reddit:image"
          content="https://rekogrinik.com/reddit-image.jpg"
        />

        {/* Snapchat метатеги */}
        <meta property="snapchat:title" content="RekoGrinik - Before/After" />
        <meta
          property="snapchat:description"
          content="Renovation results in real time"
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
                "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation",
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
                name: "Renovation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Apartment Renovation",
                      description: "Complete apartment renovation turnkey",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bathroom Reconstruction",
                      description: "Modern bathroom renovation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Office Renovation",
                      description: "Corporate office renovation",
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
