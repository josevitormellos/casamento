import type { GalleryItemProps } from "./GalleryItem.types";

import { galleryItemStyles } from "./GalleryItem.styles";

import { ImageFrame } from "../../ui/ImageFrame/ImageFrame";

export function GalleryItem({

    image,

    ...props

}: GalleryItemProps) {

    return (

        <div

            className={galleryItemStyles.wrapper}

            {...props}

        >

            <ImageFrame

                src={image.src}

                alt={image.alt}

                className={galleryItemStyles.image}

            />

            <div className={galleryItemStyles.overlay} />

        </div>

    );

}