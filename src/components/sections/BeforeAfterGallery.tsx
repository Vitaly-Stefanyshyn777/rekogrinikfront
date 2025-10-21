"use client";

import { useBeforeAfterGallery } from "@/hooks/useBeforeAfterGallery";
import styles from "./BeforeAfterGallery.module.css";

export default function BeforeAfterGallery() {
  const { pairs, loading, error } = useBeforeAfterGallery();

  if (loading) {
    return (
      <section className={styles.section} id="before-after">
        <div className={styles.container}>
          <h2 className={styles.title}>Před a Po</h2>
          <div className={styles.loading}>Načítání...</div>
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
          <h2 className={styles.title}>Před a Po</h2>
          <div className={styles.empty}>
            Nejsou k dispozici páry &quot;Před/Po&quot;
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="before-after">
      <div className={styles.container}>
        <h2 className={styles.title}>До та Після</h2>
        <div className={styles.pairsContainer}>
          {pairs.map(
            (pair: {
              id: string;
              beforePhoto: { url: string; title?: string };
              afterPhoto: { url: string; title?: string };
            }) => (
              <div key={pair.id} className={styles.pair}>
                <div className={styles.beforePhoto}>
                  <img
                    src={pair.beforePhoto.url}
                    alt={pair.beforePhoto.title || "Před"}
                    onError={(e) => {
                      console.log(
                        "Before photo failed to load:",
                        pair.beforePhoto.url
                      );
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className={styles.label}>Před</span>
                </div>

                <div className={styles.arrow}>→</div>

                <div className={styles.afterPhoto}>
                  <img
                    src={pair.afterPhoto.url}
                    alt={pair.afterPhoto.title || "Po"}
                    onError={(e) => {
                      console.log(
                        "After photo failed to load:",
                        pair.afterPhoto.url
                      );
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className={styles.label}>Po</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
