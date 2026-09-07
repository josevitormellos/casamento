export interface GalleryImage {

    id: number;

    src: string;

    alt: string;

}

export interface GalleryProps {

    title?: string;

    subtitle?: string;

    images: GalleryImage[];

}