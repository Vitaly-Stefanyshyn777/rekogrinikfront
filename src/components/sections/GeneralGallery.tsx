"use client";

import { useGeneralGallery } from "@/hooks/useGeneralGallery";
import styles from "./GeneralGallery.module.css";

export default function GeneralGallery() {
  const { photos, loading, error } = useGeneralGallery();

  if (loading) {
    return (
      <section className={styles.section} id="gallery">
        <div className={styles.container}>
          <h2 className={styles.title}>Galerie</h2>
          <div className={styles.loading}>Načítání...</div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Помилка завантаження галереї:", error);
  }

  if (photos.length === 0) {
    return (
      <section className={styles.section} id="gallery">
        <div className={styles.container}>
          <h2 className={styles.title}>Galerie</h2>
          <div className={styles.empty}>Nejsou k dispozici fotografie</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <h2 className={styles.title}>Галерея</h2>
        <div className={styles.photosGrid}>
          {photos.map(
            (photo: {
              id: string;
              url: string;
              title?: string;
              description?: string;
            }) => (
              <div key={photo.id} className={styles.photoItem}>
                <img
                  src={photo.url}
                  alt={photo.title || "Foto"}
                  className={styles.photo}
                  onError={(e) => {
                    console.log("Photo failed to load:", photo.url);
                    e.currentTarget.style.display = "none";
                  }}
                />
                {photo.title && (
                  <h3 className={styles.photoTitle}>{photo.title}</h3>
                )}
                {photo.description && (
                  <p className={styles.photoDescription}>{photo.description}</p>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
