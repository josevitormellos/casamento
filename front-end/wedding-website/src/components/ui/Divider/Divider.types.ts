import type { HTMLAttributes } from "react";

export type DividerVariant =
  | "solid"
  | "dashed"
  | "ornament";

export interface DividerProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: DividerVariant;
}