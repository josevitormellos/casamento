import type { PrayerCardProps } from "./PrayerCard.types";

import { Card } from "../../ui/Card/Card";
import { Typography } from "../../ui/Typography/Typography";
import { prayerCardStyles } from "./PrayerCard.styles";

export function PrayerCard({

    prayer,

    ...props

}: PrayerCardProps) {

    if (!prayer) {

        return null;

    }

    return (

        <Card {...props}>

            <div className={prayerCardStyles.content}>

                <Typography>

                    {prayer}

                </Typography>

            </div>

        </Card>

    );

}