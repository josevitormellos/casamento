import type { HTMLAttributes } from "react";

export interface PrayerQuoteProps
    extends HTMLAttributes<HTMLDivElement> {

    quote: string;

    author?: string;

}