interface HeroBackgroundProps {

    image: string;

}

import { heroBackgroundStyles } from "./HeroBackground.styles";

export function HeroBackground({

    image

}: HeroBackgroundProps) {

    return (

        <img

            src={image}

            alt="Hero"

            className={heroBackgroundStyles.image}

        />

    );

}