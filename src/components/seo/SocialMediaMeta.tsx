"use client";

import { useEffect } from "react";

interface SocialMediaMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SocialMediaMeta({
  title = "RekoGrinik - Professional Renovation & Reconstruction Services",
  description = "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation. Quality construction services in Czech Republic, Poland, Ukraine.",
  image = "https://rekogrinik.com/img7.jpg",
  url = "https://rekogrinik.com",
}: SocialMediaMetaProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Функція для оновлення метатегів
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.querySelector(
          `meta[name="${property}"]`
        ) as HTMLMetaElement;
      }

      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement("meta");
        if (
          property.startsWith("og:") ||
          property.startsWith("fb:") ||
          property.startsWith("article:")
        ) {
          meta.setAttribute("property", property);
        } else {
          meta.setAttribute("name", property);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Оновлюємо всі соціальні метатеги
    const socialMetaTags = {
      // Open Graph (Facebook, LinkedIn, WhatsApp)
      "og:title": title,
      "og:description": description,
      "og:image": image,
      "og:url": url,
      "og:type": "website",
      "og:site_name": "RekoGrinik",
      "og:locale": "en_US",

      // Facebook специфічні
      "fb:app_id": "your-facebook-app-id",
      "fb:pages": "your-facebook-page-id",
      "article:author": "RekoGrinik Team",
      "article:publisher": "https://www.facebook.com/rekogrinik",
      "article:section": "Construction & Renovation",
      "article:tag": "renovation,reconstruction,construction,building,repair",

      // Twitter
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
      "twitter:creator": "@rekogrinik",
      "twitter:site": "@rekogrinik",

      // LinkedIn
      "linkedin:owner": "rekogrinik",
      "linkedin:title": title,
      "linkedin:description": description,
      "linkedin:image": image,

      // WhatsApp
      "whatsapp:title": title,
      "whatsapp:description": description,
      "whatsapp:image": image,

      // Telegram
      "telegram:title": title,
      "telegram:description": description,
      "telegram:image": image,

      // Pinterest
      "pinterest:title": title,
      "pinterest:description": description,
      "pinterest:image": image,
      "pinterest:rich-pin": "true",

      // Instagram
      "instagram:title": title,
      "instagram:description": description,
      "instagram:image": image,

      // TikTok
      "tiktok:title": title,
      "tiktok:description": description,
      "tiktok:image": image,

      // YouTube
      "youtube:title": title,
      "youtube:description": description,
      "youtube:image": image,

      // VKontakte
      "vk:title": title,
      "vk:description": description,
      "vk:image": image,

      // Odnoklassniki
      "ok:title": title,
      "ok:description": description,
      "ok:image": image,

      // Discord
      "discord:title": title,
      "discord:description": description,
      "discord:image": image,

      // Reddit
      "reddit:title": title,
      "reddit:description": description,
      "reddit:image": image,

      // Snapchat
      "snapchat:title": title,
      "snapchat:description": description,
      "snapchat:image": image,
    };

    // Оновлюємо всі метатеги
    Object.entries(socialMetaTags).forEach(([property, content]) => {
      updateMetaTag(property, content);
    });

    // Додаємо додаткові метатеги для мобільних платформ
    const mobileMetaTags = {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "RekoGrinik",
      "application-name": "RekoGrinik",
      "msapplication-TileColor": "#0a513d",
      "msapplication-TileImage": "/mstile-144x144.png",
      "theme-color": "#0a513d",
    };

    Object.entries(mobileMetaTags).forEach(([name, content]) => {
      updateMetaTag(name, content);
    });

    // Додаємо метатеги для пошукових систем
    const searchEngineTags = {
      robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      googlebot:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      bingbot: "index, follow",
      slurp: "index, follow",
      duckduckbot: "index, follow",
      baiduspider: "index, follow",
      yandexbot: "index, follow",
    };

    Object.entries(searchEngineTags).forEach(([name, content]) => {
      updateMetaTag(name, content);
    });
  }, [title, description, image, url]);

  return null; // Цей компонент не рендерить нічого
}
