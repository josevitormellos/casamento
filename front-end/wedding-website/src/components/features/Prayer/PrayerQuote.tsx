import type { PrayerQuoteProps } from "./PrayerQuote.types";

import { Stack } from "../../ui/Stack/Stack";
import { Typography } from "../../ui/Typography/Typography";

import { prayerQuoteStyles } from "./PrayerQuote.styles";

export function PrayerQuote({

    quote,

    author,

    ...props

}: PrayerQuoteProps) {

    return (

        <Stack

            spacing="md"

            align="center"

            className={prayerQuoteStyles.container}

            {...props}

        >

            <Typography

                variant="bodyLarge"

                className={prayerQuoteStyles.quote}

            >

                "{quote}"

            </Typography>

            {

                author && (

                    <Typography

                        variant="small"

                        color="brand"

                        className={prayerQuoteStyles.author}

                    >

                        {author}

                    </Typography>

                )

            }

        </Stack>

    );

}