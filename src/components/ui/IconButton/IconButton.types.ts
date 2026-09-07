import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type IconButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

export type IconButtonSize =
  | "sm"
  | "md"
  | "lg";

export interface IconButtonProps
extends ButtonHTMLAttributes<HTMLButtonElement>{

icon:ReactNode;

variant?:IconButtonVariant;

size?:IconButtonSize;

}