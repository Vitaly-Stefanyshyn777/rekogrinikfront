"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiClient } from "@/api/client";
import { useMemo, useState, useRef } from "react";
import { useAttribution } from "@/hooks/useAttribution";
import AttributionFields from "@/components/forms/AttributionFields";
import {
  attributionPayload,
  markEnquirySent,
  pushEnquiryEvent,
} from "@/utils/leadTracking";
import { serviceLinks } from "@/components/layout/navLinks";

// Dropdown options: every service page (same list as the Služby menu) plus a
// catch-all. The chosen label is sent as workType.
const WORK_TYPES = [...serviceLinks.map((s) => s.label), "Jiné / zatím nevím"];

type FormValues = {
  email: string;
  phone: string;
  name: string;
  address: string;
  workType: string;
  message: string;
};

// Class names the form markup expects; each host passes its own CSS module.
type FormClassKey =
  | "form"
  | "formGrid"
  | "fieldPair"
  | "field"
  | "err"
  | "selectRow"
  | "workTypeInput"
  | "textareaRow"
  | "actions"
  | "submit"
  | "note"
  | "privacyLink";

interface RequestFormProps {
  // Sent as form_id with the poptavka_odeslana dataLayer event.
  formId: string;
  // A CSS module defining (some of) these class names.
  classes: Readonly<Partial<Record<FormClassKey, string>>>;
  // Page to open after a successful submit; without it the form shows an
  // inline thank-you message instead.
  redirectTo?: string;
}

// "Odeslat žádost" enquiry form, used on the /kontakt page. Styling comes from
// the host's CSS module so the same form can be dropped into other layouts.
export default function RequestForm({
  formId,
  classes: styles,
  redirectTo,
}: RequestFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const locale = useMemo(() => {
    if (typeof navigator !== "undefined") {
      return navigator.language?.slice(0, 2) || "uk";
    }
    return "uk";
  }, []);

  // Click IDs + UTMs from the landing URL (hidden fields + payload)
  const attribution = useAttribution();
  const inFlight = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { workType: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // One enquiry = one request = one conversion event
    if (inFlight.current) return;
    inFlight.current = true;
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);
    let redirecting = false;
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
        source: attributionPayload(attribution),
        files: undefined,
        locale,
      };
      const res = await apiClient.submitForm(payload);
      // Reached only on a 2xx response (submitForm throws otherwise)
      pushEnquiryEvent({
        formId,
        workType: data.workType,
        email: data.email,
        phone: data.phone,
      });
      // Client-side navigation keeps the page alive, so GTM tags triggered by
      // the event above still finish sending.
      if (redirectTo) {
        redirecting = true;
        markEnquirySent(formId);
        router.push(redirectTo);
        return;
      }
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
      // While redirecting, keep the button locked so it can't be sent twice.
      if (!redirecting) {
        inFlight.current = false;
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AttributionFields attribution={attribution} />
      <div className={styles.formGrid}>
        <div className={styles.fieldPair}>
          <div className={styles.field}>
            <input
              inputMode="email"
              autoComplete="email"
              aria-label="E-mail"
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
              type="tel"
              autoComplete="tel"
              aria-label="Telefon"
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
              aria-label="Jméno"
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
              aria-label="Adresa"
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
        <select
          aria-label="Typ práce"
          {...register("workType", {
            required: "Typ práce je povinný",
          })}
          className={styles.workTypeInput}
        >
          <option value="" disabled>
            Vyberte typ práce
          </option>
          {WORK_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.workType && <span className={styles.err}>*</span>}
      </div>

      <div className={styles.textareaRow}>
        <textarea
          rows={4}
          aria-label="Popis projektu"
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
        <button type="submit" className={styles.submit} disabled={isSubmitting}>
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
  );
}
