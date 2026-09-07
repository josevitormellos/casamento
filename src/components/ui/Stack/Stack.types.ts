import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type StackDirection =
  | "row"
  | "column";

export type StackSpacing =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export interface StackProps
  extends HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;

  spacing?: StackSpacing;

  align?:
    | "start"
    | "center"
    | "end"
    | "stretch";

  justify?:
    | "start"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "end";

  wrap?: boolean;

  children: ReactNode;
}