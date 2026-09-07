import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import { Typography } from "../../ui/Typography/Typography";

import Logo from "../../../assets/logo.png";
import Heart from "../../../assets/Coração.png";
import Linha from "../../../assets/linha.png";

import type { GuestGuideProps } from "./GuestGuide.types";
import { guestGuideStyles } from "./GuestGuide.styles";
import { GuestGuideDressCode } from "./GuestGuideDressCode";
import { GuestGuideLocation } from "./GuestGuideLocation";
import { GuestGuideBefore } from "./GuestGuideBefore";
import { GuestGuideChildren } from "./GuestGuideChildren";
import { GuestGuideShare } from "./GuestGuideShare";
import { GuestGuideGifts } from "./GuestGuideGifts";
import { GuestGuideConfirmation } from "./GuestGuideConfirmation";
import { GuestGuideFooter } from "./GuestGuideFooter";


export function GuestGuide({ ...props }: GuestGuideProps) {
    return (
        <Section background="page">
            <Container>
                <header
                    className={guestGuideStyles.container}
                    {...props}
                >
                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="Luna"
                        className={guestGuideStyles.logo}
                    />

                    {/* Nomes */}
                    <Typography className={guestGuideStyles.names}>
                        LUIZ & NATÁLIA
                    </Typography>

                    {/* Coração */}
                    <img
                        src={Heart}
                        alt=""
                        className={guestGuideStyles.heart}
                    />

                    {/* Título */}
                    <Typography
                        as="h1"
                        className={guestGuideStyles.title}
                    >
                        GUIA DO CONVIDADO
                    </Typography>

                    {/* Linha */}
                    <img
                        src={Linha}
                        alt=""
                        className={guestGuideStyles.divider}
                    />

                    {/* Texto */}
                    <Typography
                        color="secondary"
                        className={guestGuideStyles.description}
                    >
                        Queremos que o seu único compromisso neste dia
                        seja celebrar conosco.
                        <br />
                        Por isso, reunimos aqui algumas informações
                        importantes para que tudo
                        <br />
                        aconteça da forma mais leve e tranquila possível.
                    </Typography>
                    <div className={guestGuideStyles.panels}>
                        <GuestGuideDressCode />
                        <GuestGuideLocation />
                        <GuestGuideBefore />
                        <GuestGuideChildren />
                        <GuestGuideShare />
                        <GuestGuideGifts />
                        <GuestGuideConfirmation />
                    </div>
                    <GuestGuideFooter />
                </header>
            </Container>
        </Section>
    );
}