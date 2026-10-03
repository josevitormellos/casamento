import type { HTMLAttributes } from "react";

export interface PrayerCardProps
    extends HTMLAttributes<HTMLDivElement> {

    prayer?: string;

}