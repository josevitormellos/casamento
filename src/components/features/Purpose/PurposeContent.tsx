import type { PurposeContentProps } from "./PurposeContent.types";

import { Stack } from "../../ui/Stack/Stack";
import { Typography } from "../../ui/Typography/Typography";
export function PurposeContent({

    content,

    ...props

}: PurposeContentProps) {

    return (

        <Stack

            spacing="lg"

            {...props}

        >

            <Typography
                color="secondary"
                variant="bodyLarge"
            >

                {content}

            </Typography>

        </Stack>

    );

}