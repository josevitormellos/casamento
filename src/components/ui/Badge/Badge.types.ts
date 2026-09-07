import type{ HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "danger";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}