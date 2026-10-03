import type { PrayerProps } from "./Prayer.types";

import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Stack } from "../../ui/Stack/Stack";

import { PrayerCard } from "./PrayerCard";
import { PrayerQuote } from "./PrayerQuote";

import { prayerStyles } from "./Prayer.styles";

export function Prayer({

    title = "Uma Mensagem Especial",

    subtitle = "Que o amor seja sempre o alicerce da nossa caminhada.",

    quote,

    author,

    prayer

}: PrayerProps) {

    return (

        <Section background="paper">

            <Container>

                <Stack

                    spacing="xl"

                    className={prayerStyles.container}

                >

                    <SectionTitle

                        title={title}

                        subtitle={subtitle}

                    />

                    <PrayerQuote

                        quote={quote}

                        author={author}

                    />

                    {

                        prayer && (

                            <PrayerCard

                                prayer={prayer}

                            />

                        )

                    }

                </Stack>

            </Container>

        </Section>

    );

}