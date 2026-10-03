import type { GodParentsCardProps } from "./GodParentsCard.types";

import { Card } from "../../ui/Card/Card";
import { ImageFrame } from "../../ui/ImageFrame/ImageFrame";
import { Stack } from "../../ui/Stack/Stack";
import { Typography } from "../../ui/Typography/Typography";

import { godParentsCardStyles } from "./GodParentsCard.styles.tsGodParentsCard.styles.tsGodParentsCard.styles.tsGodParentsCard.styles";

export function GodParentsCard({

    couple,

    ...props

}: GodParentsCardProps) {

    return (

        <Card {...props}>

            <Stack spacing="lg">

                <div className={godParentsCardStyles.photos}>

                    <ImageFrame

                        variant="circle"

                        src={couple.groomPhoto}

                        alt={couple.groomName}

                    />

                    <ImageFrame

                        variant="circle"

                        src={couple.bridePhoto}

                        alt={couple.brideName}

                    />

                </div>

                <div className={godParentsCardStyles.names}>

                    <Typography
                        as="h3"
                        variant="h4"
                    >
                        {couple.groomName}
                    </Typography>

                    <Typography
                        color="brand"
                    >
                        &
                    </Typography>

                    <Typography
                        as="h3"
                        variant="h4"
                    >
                        {couple.brideName}
                    </Typography>

                </div>

                {

                    couple.message && (

                        <Typography
                            color="secondary"
                            className={godParentsCardStyles.message}
                        >

                            {couple.message}

                        </Typography>

                    )

                }

            </Stack>

        </Card>

    );

}