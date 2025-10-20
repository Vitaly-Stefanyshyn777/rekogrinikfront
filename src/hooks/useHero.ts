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
        setHeroData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return { heroData, loading, error };
};
