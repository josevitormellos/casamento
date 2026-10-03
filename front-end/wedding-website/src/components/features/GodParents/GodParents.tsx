import type { GodParentsProps } from "./GodParents.types";

import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";

import { GodParentsCard } from "./GodParentsCard";
import { godParentsStyles } from "./GodParents.styles";

export function GodParents({

    title = "Nossos Padrinhos",

    subtitle = "Pessoas especiais que caminham ao nosso lado e fazem parte desta história.",

    couples

}: GodParentsProps) {

    return (

        <Section background="page">

            <Container>

                <div className={godParentsStyles.container}>

                    <SectionTitle

                        title={title}

                        subtitle={subtitle}

                    />

                    <div className={godParentsStyles.grid}>

                        {

                            couples.map(couple => (

                                <GodParentsCard

                                    key={couple.id}

                                    couple={couple}

                                />

                            ))

                        }

                    </div>

                </div>

            </Container>

        </Section>

    );

}