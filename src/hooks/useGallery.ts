// src/hooks/useGallery.ts
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";

export const useGallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await apiClient.getAlbums();
        setAlbums(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return { albums, loading, error };
};
