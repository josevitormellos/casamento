import { Stack } from "../../ui/Stack/Stack";
import { Typography } from "../../ui/Typography/Typography";
import { ImageFrame } from "../../ui/ImageFrame/ImageFrame";

interface LoginHeaderProps {

    title: string;

    subtitle?: string;

    logo?: string;

}

export function LoginHeader({

    title,

    subtitle,

    logo

}: LoginHeaderProps) {

    return (

        <Stack
            spacing="md"
            align="center"
        >

            {

                logo && (

                    <ImageFrame

                        src={logo}

                        alt={title}

                        variant="circle"

                    />

                )

            }

            <Typography
                as="h1"
                variant="h2"
            >

                {title}

            </Typography>

            {

                subtitle && (

                    <Typography color="secondary">

                        {subtitle}

                    </Typography>

                )

            }

        </Stack>

    );

}