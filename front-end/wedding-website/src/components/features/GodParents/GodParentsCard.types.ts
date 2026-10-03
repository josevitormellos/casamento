import type { HTMLAttributes } from "react";

import type { GodParentCouple } from "./GodParents.types";

export interface GodParentsCardProps
    extends HTMLAttributes<HTMLDivElement> {

    couple: GodParentCouple;

}