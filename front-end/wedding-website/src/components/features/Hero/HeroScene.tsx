import Background from "../../../assets/Background.png";

import { heroSceneStyles } from "./HeroScene.styles";

export function HeroScene() {

    return (

        <img

            src={Background}

            alt="Paisagem do casamento"

            className={heroSceneStyles.background}

        />

    );

}