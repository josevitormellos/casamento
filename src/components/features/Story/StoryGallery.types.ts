import type { HTMLAttributes } from "react";

import type { StoryPhoto } from "./Story.types";

export type StoryGalleryLayout =
    | "image-right"
    | "image-left"
    | "image-top";

export interface StoryGalleryProps
    extends HTMLAttributes<HTMLDivElement> {

    photo?: StoryPhoto;

    date: string;

    title: string;

    description: string;

    layout?: StoryGalleryLayout;

}