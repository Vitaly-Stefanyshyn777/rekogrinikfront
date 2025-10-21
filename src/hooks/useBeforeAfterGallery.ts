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
        console.log(
          "API URL:",
          process.env.NEXT_PUBLIC_API_URL || "using fallback"
        );
        const data = await apiClient.getBeforeAfterGallery();
        console.log("API response:", data);
        console.log("Pairs count:", data.pairs?.length || 0);
        console.log("Photos count:", data.photos?.length || 0);
        console.log("Collections count:", data.collections?.length || 0);
        setPairs(data.pairs || []);
        setPhotos(data.photos || []);
      } catch (err) {
        console.error("Error fetching before-after gallery:", err);
        console.error("Error details:", {
          message: err instanceof Error ? err.message : "Unknown error",
          stack: err instanceof Error ? err.stack : undefined,
        });
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPairs();
  }, []);

  return { pairs, photos, loading, error };
};
