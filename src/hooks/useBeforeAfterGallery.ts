// src/hooks/useBeforeAfterGallery.ts
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";

export const useBeforeAfterGallery = () => {
  const [pairs, setPairs] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPairs = async () => {
      try {
        console.log("Fetching before-after gallery data...");
        const data = await apiClient.getBeforeAfterGallery();
        console.log("API response:", data);
        setPairs(data.pairs || []);
        setPhotos(data.photos || []);
      } catch (err) {
        console.error("Error fetching before-after gallery:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPairs();
  }, []);

  return { pairs, photos, loading, error };
};
