import { Hero } from "../../components/features/Hero/Hero";

import { homeStyles } from "./Home.styles";

export function Home() {

    return (

        <main id="inicio" className={homeStyles.container}>

            <Hero

                brideName="Luiz"

                groomName="Natalia"

                subtitle="Sob a mesma lua, começamos nossa família."

                weddingDate={new Date(2026, 9, 17)}

                backgroundImage="/images/hero/background.jpg"

            />

        </main>

    );

}