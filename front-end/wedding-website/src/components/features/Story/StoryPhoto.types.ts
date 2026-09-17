import type { HTMLAttributes } from "react";

import type { StoryPhoto as StoryPhotoModel } from "./Story.types";

export interface StoryPhotoProps
    extends HTMLAttributes<HTMLDivElement> {

    photo: StoryPhotoModel;

    className?: string;

}