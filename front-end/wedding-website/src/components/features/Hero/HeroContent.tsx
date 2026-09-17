import { Stack } from "../../ui/Stack/Stack";
import { Typography } from "../../ui/Typography/Typography";

import { HeroCountdown } from "./HeroCountdown";

import type { HeroProps } from "./Hero.types";

import { heroContentStyles } from "./HeroContent.styles";
import Logo from "../../../assets/Logo.png";

export function HeroContent({

    brideName,

    groomName,

    subtitle,

    weddingDate

}: HeroProps) {

    return (

        <Stack

            spacing="xl"

            align="center"

            className={heroContentStyles.wrapper}

        >
            <img
                src={Logo}
                alt="Lua"
                className={heroContentStyles.logo}
            />

            {

                subtitle && (

                    <Typography

                        color="secondary"

                        className={heroContentStyles.subtitle}

                    >

                        {subtitle}

                    </Typography>

                )

            }

            <Typography

                as="h1"

                variant="display"

                color="primary"

                className={heroContentStyles.names}

            >

                {brideName} e {groomName}

            </Typography>

           <Typography
                color="primary"
                className={heroContentStyles.date}
            >
                {weddingDate.toLocaleDateString("pt-BR")}
            </Typography>

            <HeroCountdown

                weddingDate={weddingDate}

            />

        </Stack>

    );

}