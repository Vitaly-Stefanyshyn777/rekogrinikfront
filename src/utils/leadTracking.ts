// src/utils/leadTracking.ts
// Website side of conversion tracking. Tags live in GTM (root layout);
// this file only captures click IDs / UTMs and pushes the enquiry event.

export const ATTRIBUTION_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];
export type Attribution = Record<AttributionKey, string>;

export const EMPTY_ATTRIBUTION = Object.fromEntries(
  ATTRIBUTION_KEYS.map((key) => [key, ""])
) as Attribution;

// Reads click IDs and UTMs from the current URL only (no cookies/storage).
// Values are kept exactly as given — GCLID is case-sensitive.
export function readAttributionFromUrl(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const result = { ...EMPTY_ATTRIBUTION };
  ATTRIBUTION_KEYS.forEach((key) => {
    result[key] = params.get(key) ?? "";
  });
  return result;
}

// Only the non-empty values, for the form payload's `source` field.
export function attributionPayload(
  attribution: Attribution
): Record<string, string> | undefined {
  const entries = Object.entries(attribution).filter(([, value]) => value);
  return entries.length ? Object.fromEntries(entries) : undefined;
}

// Normalises a Czech-style phone input to E.164 (+420…); "" if not possible.
export function toE164(raw: string): string {
  let phone = raw.trim().replace(/[\s\-().\/]/g, "");
  if (phone.startsWith("00")) phone = `+${phone.slice(2)}`;
  if (phone.startsWith("+")) return /^\+[1-9]\d{7,14}$/.test(phone) ? phone : "";
  if (/^\d{9}$/.test(phone)) return `+420${phone}`;
  if (/^420\d{9}$/.test(phone)) return `+${phone}`;
  return "";
}

// Call only after the server confirmed the enquiry (2xx response).
export function pushEnquiryEvent({
  formId,
  workType,
  email,
  phone,
}: {
  formId: string;
  workType?: string;
  email: string;
  phone: string;
}) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "poptavka_odeslana",
    form_id: formId,
    ...(workType ? { work_type: workType } : {}),
    user_data: {
      email: email.trim().toLowerCase(),
      phone_number: toE164(phone),
    },
  });
}

// Thank-you page conversion. The form marks a successful enquiry right before
// redirecting to /dekujeme; the page fires its event only if that mark is
// there, then clears it, so direct visits and reloads never count.
const ENQUIRY_MARK_KEY = "rg_enquiry_sent";

export function markEnquirySent(formId: string) {
  try {
    sessionStorage.setItem(ENQUIRY_MARK_KEY, formId);
  } catch {
    // Storage blocked (private mode etc.) — the thank-you event is skipped.
  }
}

// Returns the form_id of the enquiry that led here, or null; one use only.
export function consumeEnquiryMark(): string | null {
  try {
    const formId = sessionStorage.getItem(ENQUIRY_MARK_KEY);
    sessionStorage.removeItem(ENQUIRY_MARK_KEY);
    return formId;
  } catch {
    return null;
  }
}

export function pushThankYouEvent(formId: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "dekujeme_zobrazeno",
    form_id: formId,
    page_path: "/dekujeme",
  });
}
