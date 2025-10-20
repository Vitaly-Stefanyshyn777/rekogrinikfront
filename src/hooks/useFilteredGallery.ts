// src/hooks/useFilteredGallery.ts
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";

export const useFilteredGallery = () => {
  const [pairs, setPairs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        console.log("Fetching gallery data...");

        // Отримуємо всі дані з API
        const data = await apiClient.getBeforeAfterGallery();

        console.log("Gallery response:", data);

        // Витягуємо пари з відповіді
        const pairsData = data.pairs || [];
        console.log("Extracted pairs:", pairsData);

        setPairs(pairsData);
      } catch (err) {
        console.error("Error fetching gallery:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  return { pairs, loading, error };
};
