// src/hooks/useGeneralGallery.ts
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";

export const useGeneralGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await apiClient.getGeneralGallery();
        setPhotos(data.photos || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

