import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type OrnamentPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export interface OrnamentProps
extends HTMLAttributes<HTMLDivElement>{

children?:ReactNode;

position?:OrnamentPosition;

}