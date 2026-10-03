import type { GalleryProps } from "./Gallery.types";

import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";

import { GalleryGrid } from "./GalleryGrid";

import { galleryStyles } from "./Gallery.styles";

export function Gallery({

    title = "Nossa Galeria",

    subtitle = "Alguns momentos especiais da nossa história.",

    images

}: GalleryProps) {

    return (

        <Section background="page">

            <Container>

                <div className={galleryStyles.container}>

                    <SectionTitle

                        title={title}

                        subtitle={subtitle}

                    />

                    <GalleryGrid

                        images={images}

                    />

                </div>

            </Container>

        </Section>

    );

}