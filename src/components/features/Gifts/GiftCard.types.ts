import type { HTMLAttributes } from "react";

import type { Gift } from "./Gifts.types";

export interface GiftCardProps
    extends HTMLAttributes<HTMLDivElement> {

    gift: Gift;

}