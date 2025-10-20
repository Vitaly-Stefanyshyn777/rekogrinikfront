"use client";

import { useBeforeAfterGallery } from "@/hooks/useBeforeAfterGallery";
import styles from "./BeforeAfterGallery.module.css";

export default function BeforeAfterGallery() {
  const { pairs, loading, error } = useBeforeAfterGallery();

  if (loading) {
    return (
      <section className={styles.section} id="before-after">
        <div className={styles.container}>
          <h2 className={styles.title}>До та Після</h2>
          <div className={styles.loading}>Завантаження...</div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Помилка завантаження галереї 'До/Після':", error);
  }

  if (pairs.length === 0) {
    return (
      <section className={styles.section} id="before-after">
        <div className={styles.container}>
          <h2 className={styles.title}>До та Після</h2>
          <div className={styles.empty}>Немає доступних пар "До/Після"</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="before-after">
      <div className={styles.container}>
        <h2 className={styles.title}>До та Після</h2>
        <div className={styles.pairsContainer}>
          {pairs.map((pair: any) => (
            <div key={pair.id} className={styles.pair}>
              <div className={styles.beforePhoto}>
                <img
                  src={pair.beforePhoto.url}
                  alt={pair.beforePhoto.title || "До"}
                  onError={(e) => {
                    console.log(
                      "Before photo failed to load:",
                      pair.beforePhoto.url
                    );
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className={styles.label}>До</span>
              </div>

              <div className={styles.arrow}>→</div>

              <div className={styles.afterPhoto}>
                <img
                  src={pair.afterPhoto.url}
                  alt={pair.afterPhoto.title || "Після"}
                  onError={(e) => {
                    console.log(
                      "After photo failed to load:",
                      pair.afterPhoto.url
                    );
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className={styles.label}>Після</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
