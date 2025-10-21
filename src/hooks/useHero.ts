// src/hooks/useHero.ts
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";

export const useHero = () => {
  const [heroData, setHeroData] = useState<{
    title?: string;
    subtitle?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await apiClient.getHero();
        console.log("Raw hero data from API:", data);

        // Перевіряємо чи є title або subtitle
        if (data && (data.title || data.subtitle)) {
          setHeroData({
            title: data.title || undefined,
            subtitle: data.subtitle || undefined,
          });
        } else {
          console.log("No valid hero data found, using fallback");
          setHeroData(null);
        }
      } catch (err) {
        console.error("Error fetching hero data:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return { heroData, loading, error };
};
