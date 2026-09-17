import type { ImgHTMLAttributes } from "react";

export type ImageFrameVariant =
  | "default"
  | "rounded"
  | "circle";

export interface ImageFrameProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: ImageFrameVariant;

  shadow?: boolean;

  hover?: boolean;
}