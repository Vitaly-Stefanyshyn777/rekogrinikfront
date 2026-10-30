// src/hooks/useAttribution.ts
import { useEffect, useState } from "react";
import {
  EMPTY_ATTRIBUTION,
  getAttribution,
  type Attribution,
} from "../utils/leadTracking";

// Click IDs + UTMs from the landing URL, filled once on mount.
export const useAttribution = () => {
  const [attribution, setAttribution] = useState<Attribution>(EMPTY_ATTRIBUTION);

  useEffect(() => {
    setAttribution(getAttribution());
  }, []);

  return attribution;
};
