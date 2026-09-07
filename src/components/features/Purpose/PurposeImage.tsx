import type { PurposeImageProps } from "./PurposeImage.types";

import { ImageFrame } from "../../ui/ImageFrame/ImageFrame";

import { purposeImageStyles } from "./PurposeImage.styles";

export function PurposeImage({

    src,

    alt = "Propósito"

}: PurposeImageProps) {

    return (

        <ImageFrame

            src={src}

            alt={alt}

            className={purposeImageStyles.image}

        />

    );

}