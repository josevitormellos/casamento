import type { HTMLAttributes } from "react";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  background?: "transparent" | "page" | "paper" | "section";

  padding?: boolean;
}