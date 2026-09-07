import { ImageFrame } from "../../ui/ImageFrame/ImageFrame";

import type { StoryPhotoProps } from "./StoryPhoto.types";

import { storyPhotoStyles } from "./StoryPhoto.styles";

export function StoryPhoto({

    photo,

    className

}: StoryPhotoProps) {

    return (

        <ImageFrame

            src={photo.src}

            alt={photo.alt}

            className={`${storyPhotoStyles.image} ${className ?? ""}`}

        />

    );

}