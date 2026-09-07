
import Gravata from "../../assets/Gravata.png";
import Recepcao from "../../assets/Recepcao.png";
import Carro from "../../assets/Carro.png";
import Igreja from "../../assets/Igreja.png";
import Linha from "../../assets/linha.png";

import { Section } from "../../components/ui/Section/Section";
import { Container } from "../../components/ui/Container/Container";
import { Typography } from "../../components/ui/Typography/Typography";

import { BigDayEvent } from "./BigDayEvent";
import { BigDayExtra } from "./BigDayExtra";

import { bigDayStyles } from "./BigDay.styles";

export function BigDay() {

    return (

        <Section background="paper">

            <Container>

                <div className={bigDayStyles.container}>

                    <Typography
                        as="h2"
                        className={bigDayStyles.title}
                    >

                        O GRANDE DIA

                    </Typography>

                    <img
                        src={Linha}
                        alt=""
                        className={bigDayStyles.divider}
                    />

                   <div className={bigDayStyles.date}>

                        <span>17</span>

                        <span className={bigDayStyles.dot} />

                        <span>10</span>

                        <span className={bigDayStyles.dot} />

                        <span>2026</span>

                    </div>

                    <BigDayEvent

                        title="CELEBRAÇÃO"

                        icon={Igreja}

                        date="17/10/2026"

                        time="11h00"

                        location="Igreja Nossa Senhora do Brasil - Urca"

                    />

                    <img
                        src={Linha}
                        alt=""
                        className={bigDayStyles.eventDivider}
                    />

                    <BigDayEvent

                        title="RECEPÇÃO"

                        icon={Recepcao}

                        date="17/10/2026"

                        time="13h00"

                        location="Avenida João Luiz Alves, 340, na Urca"

                    />

                    <div className={bigDayStyles.extras}>

                        <BigDayExtra

                            icon={Carro}

                            title="ESTACIONAMENTO"

                            description="Limitado – Prioridade de Uber/Taxi"

                        />

                        <BigDayExtra

                            icon={Gravata}

                            title="DRESS CODE"

                            description="Passeio Completo"

                        />

                    </div>

                </div>

            </Container>

        </Section>

    );

}