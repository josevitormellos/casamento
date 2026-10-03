import type { PurposeValuesProps } from "./PurposeValues.types";

import { Card } from "../../ui/Card/Card";
import { Stack } from "../../ui/Stack/Stack";
import { Typography } from "../../ui/Typography/Typography";

import { purposeValuesStyles } from "./PurposeValues.styles";

export function PurposeValues({

    values,

    ...props

}: PurposeValuesProps) {

    return (

        <div

            className={purposeValuesStyles.grid}

            {...props}

        >

            {

                values.map(value => (

                    <Card

                        key={value.id}

                    >

                        <Stack

                            spacing="md"

                            align="center"

                            className={purposeValuesStyles.card}

                        >

                            {value.icon}

                            <Typography
                                variant="h4"
                            >
                                {value.title}
                            </Typography>

                            <Typography
                                color="secondary"
                            >
                                {value.description}
                            </Typography>

                        </Stack>

                    </Card>

                ))

            }

        </div>

    );

}