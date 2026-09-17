export interface StoryPhoto {

    id: number;

    src: string;

    alt: string;

}

export type StoryLayout =
    | "image-right"
    | "image-left"
    | "image-top";

export interface StoryEvent {

    id: number;

    photo?: StoryPhoto;

    date: string;

    title: string;

    description: string;

    layout: StoryLayout;

}