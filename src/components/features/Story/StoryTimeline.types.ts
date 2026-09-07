import type { HTMLAttributes } from "react";

import type { StoryEvent } from "./Story.types";

export interface StoryTimelineProps
    extends HTMLAttributes<HTMLDivElement> {

    events: StoryEvent[];

}