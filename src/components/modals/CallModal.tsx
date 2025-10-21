"use client";

import { useEffect } from "react";
import styles from "./CallModal.module.css";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallModal({ isOpen, onClose }: CallModalProps) {
  // Блокування скролу при відкритті модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Очищення при розмонтуванні
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCall = () => {
    window.open("tel:+420608583115", "_self");
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Підтвердження дзвінка</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>📞</div>
          <h3>Ви хочете зателефонувати нам?</h3>
          <p className={styles.description}>
            Натисніть кнопку нижче, щоб зателефонувати за номером:
          </p>
          <p className={styles.phoneNumber}>+420 608 583 115</p>
          <p className={styles.schedule}>
            <strong>Графік роботи:</strong>
            <br />
            Пн-Пт: 08:00 - 20:00
            <br />
            Субота-Неділя: 09:00 - 18:00
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.callButton} onClick={handleCall}>
            📞 Зателефонувати
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
}
