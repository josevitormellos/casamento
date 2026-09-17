import type { HTMLAttributes } from "react";

export interface StoryContentProps
    extends HTMLAttributes<HTMLDivElement> {

    title: string;

    subtitle?: string;

    description: string;

}