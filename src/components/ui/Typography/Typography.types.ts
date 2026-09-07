import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "bodyLarge"
  | "small"
  | "caption";

export interface TypographyProps
  extends HTMLAttributes<HTMLElement> {
  as?: ElementType;

  variant?: TypographyVariant;

  color?: "primary" | "secondary" | "muted" | "brand" | "white";

  children: ReactNode;
}