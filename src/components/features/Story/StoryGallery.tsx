import { Typography } from "../../ui/Typography/Typography";

import type { StoryGalleryProps } from "./StoryGallery.types";

import { StoryPhoto } from "./StoryPhoto";

import { storyGalleryStyles } from "./StoryGallery.styles";

export function StoryGallery({

    photo,

    date,

    title,

    description,

    layout = "image-right",

    ...props

}: StoryGalleryProps) {

    const layoutStyle = {

        "image-right": storyGalleryStyles.imageRight,

        "image-left": storyGalleryStyles.imageLeft,

        "image-top": storyGalleryStyles.imageTop

    }[layout];

    return (

        <div

            className={`${storyGalleryStyles.container} ${layoutStyle}`}

            {...props}

        >

            <div className={storyGalleryStyles.content}>

                <Typography
                    color="secondary"
                    className={storyGalleryStyles.date}
                >
                    {date}
                </Typography>

                <Typography
                    as="h3"
                    color="primary"
                    className={storyGalleryStyles.title}
                >
                    {title}
                </Typography>

                <Typography
                    color="secondary"
                    className={storyGalleryStyles.description}
                >
                    {description}
                </Typography>

            </div>

            {photo && (

                <div className={storyGalleryStyles.photo}>

                    <StoryPhoto
                        photo={photo}
                    />

                </div>

            )}

        </div>

    );

}