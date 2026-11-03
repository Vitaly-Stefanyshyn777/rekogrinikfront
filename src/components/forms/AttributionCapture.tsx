"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/utils/leadTracking";

// Mounted once in the root layout: keeps the landing URL's click IDs / UTMs
// for forms on later pages (pages without a form, e.g. ad landing pages).
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
