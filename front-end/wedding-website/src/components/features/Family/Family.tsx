import { Section } from "../../ui/Section/Section";
import { Container } from "../../ui/Container/Container";
import { Typography } from "../../ui/Typography/Typography";

import type { FamilyProps } from "./Family.types";

import { familyStyles } from "./Family.styles";
import { typography } from "../../../styles/typography";

import Linha from "../../../assets/Linha.png";
import Lua from "../../../assets/Lua.png";
import FlorLimao from "../../../assets/Flor6.png";
import FlorFolhas from "../../../assets/Flor1.png";

export function Family({
    ...props
}: FamilyProps) {

    
    return (

        <Section
            background="page"
            {...props}
        >

            <Container>

                <div className={familyStyles.container}>

                    <img
                        src={FlorFolhas}
                        alt=""
                        className={familyStyles.flowerLeft}
                    />

                    <img
                        src={FlorLimao}
                        alt=""
                        className={familyStyles.flowerRight}
                    />

                    <Typography
                        as="h2"
                        className={familyStyles.title}
                    >
                        Nossa família
                    </Typography>

                    <img
                        src={Linha}
                        alt=""
                        className={familyStyles.divider}
                    />

                    <Typography
                        className={familyStyles.introduction}
                    >
                        A Família Luna já nasceu há muito tempo atrás,
                        mas hoje ela renasce, ganha vida e começa a se desenvolver.
                    </Typography>

                    <div className={familyStyles.content}>

                        <p className={familyStyles.paragraph}>
                            Construímos nossa família tendo Jesus como nossa base
                            e Deus como nosso guia. Queremos um lar onde o amor,
                            a fé, a sabedoria, o respeito e o acolhimento estejam
                            sempre presentes; onde possamos crescer juntos,
                            viver com propósito e permanecer fiéis aos princípios
                            que escolhemos seguir.
                        </p>

                        <p>
                            Queremos que nosso lar seja leve, verdadeiro e feliz —
                            e que aquilo que construirmos entre nós também
                            transborde para as pessoas que Deus colocar em nosso
                            caminho. Que sejamos uma família íntegra, generosa
                            e amorosa, sempre caminhando lado a lado e confiando
                            nos planos do nosso Pai.
                        </p>

                    </div>

                   <Typography
                        className={familyStyles.closing}
                        style={{
                            fontFamily: typography.script.fontFamily,
                            fontWeight: typography.script.weight,
                        }}
                    >
                        Sob a mesma lua,
                        <br />
                        começamos nossa família.
                    </Typography>

                    <img
                        src={Lua}
                        alt=""
                        className={familyStyles.moon}
                    />

                </div>

            </Container>

        </Section>

    );

}