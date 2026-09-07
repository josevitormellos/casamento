import type { GalleryImage } from "./Gallery.types";

import { GalleryItem } from "./GalleryItem";

import { galleryGridStyles } from "./GalleryGrid.styles";

interface GalleryGridProps {

    images: GalleryImage[];

}

export function GalleryGrid({

    images

}: GalleryGridProps) {

    return (

        <div className={galleryGridStyles.grid}>

            {

                images.map(image => (

                    <GalleryItem

                        key={image.id}

                        image={image}

                    />

                ))

            }

        </div>

    );

}