// src/api/client.ts
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== "undefined"
    ? "/api"
    : "https://rekogrinikfrontbeck-production.up.railway.app/api/v1");

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Відправити форму з контактами
  async submitForm(body: {
    name: string;
    phone: string;
    email: string;
    workType: string;
    message?: string;
    consent: boolean;
    address?: string;
    contactTime?: string;
    source?: Record<string, string>;
    files?: string[];
    locale?: string;
  }) {
    const url = `${this.baseUrl}/public/form`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(
        `Failed to submit form: ${response.status} ${response.statusText} ${text}`
      );
    }
    return response.json() as Promise<{ id: string; createdAt: string }>;
  }

  // Отримати всі блоки контенту
  async getContent() {
    const response = await fetch(`${this.baseUrl}/public/content`);
    if (!response.ok) throw new Error("Failed to fetch content");
    return response.json();
  }

  // Отримати всі альбоми
  async getAlbums() {
    const response = await fetch(`${this.baseUrl}/public/gallery/albums`);
    if (!response.ok) throw new Error("Failed to fetch albums");
    return response.json();
  }

  // Отримати альбом з фото та парами за slug
  async getAlbum(slug: string) {
    const url = `${this.baseUrl}/gallery?album=${slug}`;
    console.log("API Client: Fetching album from:", url);
    try {
      const response = await fetch(url);
      console.log("API Client: Response status:", response.status);
      if (!response.ok) {
        console.error(
          "API Client: Failed to fetch album, status:",
          response.status
        );
        throw new Error("Failed to fetch album");
      }
      const data = await response.json();
      console.log("API Client: Album data:", data);
      return data;
    } catch (error) {
      console.error("API Client: CORS or network error:", error);
      // Повертаємо fallback дані при CORS помилці
      return {
        photos: [],
        collections: [],
        pairs: [],
      };
    }
  }

  // Отримати загальну галерею
  async getGeneralGallery() {
    return this.getAlbum("general");
  }

  // Отримати галерею "До/Після"
  async getBeforeAfterGallery() {
    console.log(
      "API Client: Fetching before-after gallery from:",
      `${this.baseUrl}/public/gallery/albums/before-after`
    );
    return this.getAlbum("before-after");
  }

  // Отримати тільки фото "До"
  async getBeforePhotos() {
    const url = `${this.baseUrl}/public/gallery/albums/before-after?tag=before`;
    console.log("API Client: Fetching before photos from:", url);
    const response = await fetch(url);
    console.log("API Client: Response status:", response.status);
    if (!response.ok) {
      console.error(
        "API Client: Failed to fetch before photos, status:",
        response.status
      );
      throw new Error("Failed to fetch before photos");
    }
    const data = await response.json();
    console.log("API Client: Before photos data:", data);
    return data;
  }

  // Отримати тільки фото "Після"
  async getAfterPhotos() {
    const url = `${this.baseUrl}/public/gallery/albums/before-after?tag=after`;
    console.log("API Client: Fetching after photos from:", url);
    const response = await fetch(url);
    console.log("API Client: Response status:", response.status);
    if (!response.ok) {
      console.error(
        "API Client: Failed to fetch after photos, status:",
        response.status
      );
      throw new Error("Failed to fetch after photos");
    }
    const data = await response.json();
    console.log("API Client: After photos data:", data);
    return data;
  }

  // Отримати Hero дані
  async getHero() {
    const url = `${this.baseUrl}/hero`;
    console.log("API Client: Fetching hero data from:", url);
    try {
      const response = await fetch(url);
      console.log("API Client: Response status:", response.status);
      if (!response.ok) {
        console.error(
          "API Client: Failed to fetch hero data, status:",
          response.status
        );
        throw new Error("Failed to fetch hero data");
      }
      const data = await response.json();
      console.log("API Client: Hero data:", data);
      return data;
    } catch (error) {
      console.error("API Client: CORS or network error:", error);
      // Повертаємо fallback дані при CORS помилці
      return {
        title: "RekoGrinik",
        subtitle: "Professional Renovation Services",
        description:
          "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation",
      };
    }
  }
}

export const apiClient = new ApiClient();
