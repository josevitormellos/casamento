import { Section } from "../../ui/Section/Section";
import { Container } from "../../ui/Container/Container";
import { useState } from "react";

import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Typography } from "../../ui/Typography/Typography";

import { GiftCard } from "./GiftCard";

import { giftsStyles } from "./Gifts.styles";

import type { GiftsProps } from "./Gifts.types";

import Linha from "../../../assets/linha.png"
import Logo from "../../../assets/logo.png"
import Heart from "../../../assets/Coração.png";

import { typography } from "../../../styles/typography"

export function Gifts({ gifts }: GiftsProps) {

    const [visibleCount, setVisibleCount] = useState(6);

    const visibleGifts = gifts.slice(0, visibleCount);

    const hasMore = visibleCount < gifts.length;

    const showMore = () => {

        setVisibleCount((current) =>
            Math.min(current + 6, gifts.length)
        );

    };

    const showLess = () => {

        setVisibleCount(6);

    };

    return (

        <Section background="section">

            <Container>

                <div className={giftsStyles.container}>

                    <div className={giftsStyles.header}>

                        <img
                            src={Logo}
                            alt="Logo Natália e Luis"
                            className={giftsStyles.logo}
                        />

                        <Typography
                            className={giftsStyles.names}
                        >
                            Luis & Natália
                        </Typography>

                        <img
                            src={Heart}
                            alt=""
                            className={giftsStyles.heart}
                        />

                    </div>

                    <SectionTitle
                        title="Lista de presentes"
                        center={true}
                    />
                    <p
                        className={giftsStyles.subtitle}
                        style={{
                            fontFamily: typography.script.fontFamily,
                            fontWeight: typography.script.weight,
                        }}
                    >
                        Itens de viagem - Lua de Mel
                    </p>

                    <img
                        src={Linha}
                        alt=""
                        className={giftsStyles.divider}
                    />

                    <Typography
                        color="secondary"
                        className={giftsStyles.description}
                    >

                        Sua presença é o nosso maior presente!

                        <br />

                        Se desejar nos presentear, escolha uma
                        experiência que fará parte da nossa lua de mel.

                    </Typography>

                    <div className={giftsStyles.grid}>

                        {visibleGifts.map((gift) => (

                            <GiftCard
                                key={gift.id}
                                gift={gift}
                            />

                        ))}

                    </div>
                    <div className={giftsStyles.actions}>

                        {hasMore && (

                            <button
                                type="button"
                                className={giftsStyles.showMore}
                                onClick={showMore}
                            >
                                Mostrar mais
                            </button>

                        )}

                        {!hasMore && visibleCount > 6 && (

                            <button
                                type="button"
                                className={giftsStyles.showLess}
                                onClick={showLess}
                            >
                                Mostrar menos
                            </button>

                        )}

                    </div>

                    <div className={giftsStyles.footer}>

                        <img
                            src={Heart}
                            alt=""
                            className={giftsStyles.footerHeart}
                        />

                        <p className={giftsStyles.footerText}
                           style={{
                            fontFamily: typography.script.fontFamily,
                            fontWeight: typography.script.weight,
                        }}>
                            Obrigado por fazer parte dessa história conosco!
                        </p>

                        <img
                            src={Heart}
                            alt=""
                            className={giftsStyles.footerHeart}
                        />

                    </div>

                </div>

            </Container>

        </Section>

    );

}