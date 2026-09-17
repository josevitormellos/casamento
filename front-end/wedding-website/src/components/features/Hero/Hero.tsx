import type { HeroProps } from "./Hero.types";

import { Container } from "../../ui/Container/Container";

import { HeroScene } from "./HeroScene";
import { HeroContent } from "./HeroContent";

import { heroStyles } from "./Hero.styles";

export function Hero(props: HeroProps) {

    return (

        <section className={heroStyles.section}>

            <HeroScene />

            <Container className={heroStyles.container}>

                <HeroContent {...props} />

            </Container>

        </section>

    );

}