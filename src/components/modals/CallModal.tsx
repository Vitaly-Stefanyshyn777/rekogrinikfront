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
          <h2>Potvrzení hovoru</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>📞</div>
          <h3>Chcete nám zavolat?</h3>
          <p className={styles.description}>
            Klikněte na tlačítko níže pro zavolání na číslo:
          </p>
          <p className={styles.phoneNumber}>+420 608 583 115</p>
          <p className={styles.schedule}>
            <strong>Pracovní doba:</strong>
            <br />
            Po-Pá: 08:00 - 20:00
            <br />
            Sobota-Neděle: 09:00 - 18:00
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.callButton} onClick={handleCall}>
            📞 Zavolat
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Zrušit
          </button>
        </div>
      </div>
    </div>
  );
}
