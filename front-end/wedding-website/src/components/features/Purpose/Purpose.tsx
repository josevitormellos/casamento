import type { PurposeProps } from "./Purpose.types";

import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";

import { PurposeContent } from "./PurposeContent";
import { PurposeImage } from "./PurposeImage";
import { PurposeValues } from "./PurposeValues";

import { purposeStyles } from "./Purpose.styles";

export function Purpose({

    title = "Nosso Propósito",

    subtitle = "Construir uma história baseada no amor, respeito e fé.",

    image,

    content,

    values = []

}: PurposeProps) {

    return (

        <Section background="page">

            <Container>

                <div className={purposeStyles.container}>

                    <SectionTitle

                        title={title}

                        subtitle={subtitle}

                    />

                    <div className={purposeStyles.grid}>

                        <PurposeContent

                            content={content}

                        />

                        {

                            image && (

                                <PurposeImage

                                    src={image}

                                />

                            )

                        }

                    </div>

                    {

                        values.length > 0 && (

                            <PurposeValues

                                values={values}

                            />

                        )

                    }

                </div>

            </Container>

        </Section>

    );

}