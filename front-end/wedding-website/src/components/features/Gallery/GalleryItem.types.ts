import type { HTMLAttributes } from "react";

import type { GalleryImage } from "./Gallery.types";

export interface GalleryItemProps
    extends HTMLAttributes<HTMLDivElement> {

    image: GalleryImage;

}