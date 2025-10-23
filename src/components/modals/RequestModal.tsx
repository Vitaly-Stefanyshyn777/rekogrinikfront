"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { apiClient } from "@/api/client";
import { useMemo, useState, useEffect } from "react";
import styles from "./RequestModal.module.css";

type FormValues = {
  email: string;
  phone: string;
  name: string;
  address: string;
  workType: string;
  message: string;
};

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestModal({ isOpen, onClose }: RequestModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

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

  const locale = useMemo(() => {
    if (typeof navigator !== "undefined") {
      return navigator.language?.slice(0, 2) || "uk";
    }
    return "uk";
  }, []);

  const utmSource = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const params = new URLSearchParams(window.location.search);
    const obj: Record<string, string> = {};
    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ].forEach((key) => {
      const val = params.get(key);
      if (val) obj[key] = val;
    });
    return Object.keys(obj).length ? obj : undefined;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { workType: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);
    try {
      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        workType: data.workType,
        message: data.message,
        consent: true,
        address: data.address,
        contactTime: undefined,
        source: utmSource,
        files: undefined,
        locale,
      };
      const res = await apiClient.submitForm(payload);
      setSubmitSuccess(res.id);
      reset({
        email: "",
        phone: "",
        name: "",
        address: "",
        workType: "",
        message: "",
      });
    } catch (e: unknown) {
      setSubmitError(
        e instanceof Error ? e.message : "Помилка відправки форми"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Odeslat žádost</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGrid}>
            <div className={styles.fieldPair}>
              <div className={styles.field}>
                <input
                  placeholder="E-mailová adresa pro kontakt"
                  {...register("email", {
                    required: "E-mail je povinný",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Neplatný formát e-mailu",
                    },
                  })}
                />
                {errors.email && <span className={styles.err}>*</span>}
              </div>
              <div className={styles.field}>
                <input
                  placeholder="Vaše telefonní číslo"
                  {...register("phone", {
                    required: "Telefon je povinný",
                    pattern: {
                      value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                      message: "Neplatný formát telefonu",
                    },
                  })}
                />
                {errors.phone && <span className={styles.err}>*</span>}
              </div>
            </div>
            <div className={styles.fieldPair}>
              <div className={styles.field}>
                <input
                  placeholder="Jméno pro adresu"
                  {...register("name", {
                    required: "Jméno je povinné",
                    minLength: {
                      value: 2,
                      message: "Minimálně 2 znaky",
                    },
                  })}
                />
                {errors.name && <span className={styles.err}>*</span>}
              </div>
              <div className={styles.field}>
                <input
                  placeholder="Vaše adresa"
                  {...register("address", {
                    required: "Adresa je povinná",
                    minLength: {
                      value: 5,
                      message: "Minimálně 5 znaků",
                    },
                  })}
                />
                {errors.address && <span className={styles.err}>*</span>}
              </div>
            </div>
          </div>

          <div className={styles.selectRow}>
            <input
              // list="workTypesModal"
              placeholder="Vyberte typ práce"
              {...register("workType", {
                required: "Typ práce je povinný",
              })}
              className={styles.workTypeInput}
            />
            <datalist id="workTypesModal">
              <option value="Oprava bytu" />
              <option value="Koupelny" />
              <option value="Sádrokarton" />
              <option value="Kompletní rekonstrukce" />
              <option value="Kosmetické opravy" />
            </datalist>
          </div>

          <div className={styles.textareaRow}>
            <textarea
              rows={4}
              placeholder="Řekněte nám více o vašem projektu..."
              {...register("message", {
                maxLength: {
                  value: 500,
                  message: "Maximálně 500 znaků",
                },
              })}
            />
          </div>

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.submit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Odesílání..." : "Odeslat žádost"}
            </button>
            <p className={styles.note}>
              Kliknutím na tlačítko souhlasíte se zpracováním osobních údajů v
              souladu s{" "}
              <Link href="/privacy" className={styles.privacyLink}>
                zásadami ochrany osobních údajů
              </Link>
              .
            </p>
            {submitError && (
              <p className={styles.note} style={{ color: "#d00" }}>
                {submitError}
              </p>
            )}
            {submitSuccess && (
              <p className={styles.note} style={{ color: "#0a513d" }}>
                Děkujeme! Žádost přijata (ID: {submitSuccess}).
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
