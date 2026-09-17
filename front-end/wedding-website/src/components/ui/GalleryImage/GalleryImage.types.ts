import type { ImgHTMLAttributes } from "react";

export interface GalleryImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  hoverZoom?: boolean;
}