"use client";

import { useEffect } from "react";
import { consumeEnquiryMark, pushThankYouEvent } from "@/utils/leadTracking";

// Pushes "dekujeme_zobrazeno" to the GTM dataLayer when this page was reached
// from a successful form submit. Direct visits and reloads push nothing.
export default function ThankYouTracking() {
  useEffect(() => {
    const formId = consumeEnquiryMark();
    if (formId) pushThankYouEvent(formId);
  }, []);

  return null;
}
