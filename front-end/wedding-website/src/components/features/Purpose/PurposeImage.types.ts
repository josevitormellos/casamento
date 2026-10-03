import type { HTMLAttributes } from "react";

export interface PurposeImageProps
    extends HTMLAttributes<HTMLDivElement> {

    src: string;

    alt?: string;

}