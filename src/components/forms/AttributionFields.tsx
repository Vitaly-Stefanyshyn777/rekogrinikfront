import { ATTRIBUTION_KEYS, type Attribution } from "@/utils/leadTracking";

// Hidden gclid / gbraid / wbraid / utm_* inputs for every enquiry form.
export default function AttributionFields({
  attribution,
}: {
  attribution: Attribution;
}) {
  return (
    <>
      {ATTRIBUTION_KEYS.map((key) => (
        <input
          key={key}
          type="hidden"
          name={key}
          value={attribution[key]}
          readOnly
        />
      ))}
    </>
  );
}
