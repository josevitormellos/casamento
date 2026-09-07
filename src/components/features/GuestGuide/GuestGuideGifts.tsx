import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import Presente from "../../../assets/Presente.png";

export function GuestGuideGifts() {
    return (
        <section className={guestGuideStyles.panelGifts}>
            <div className={guestGuideStyles.giftsContent}>
                <div className={guestGuideStyles.iconCircle}>
                    <img
                        src={Presente}
                        alt="Lista de presentes"
                        className={guestGuideStyles.giftIcon}
                    />
                </div>

                <Typography
                    as="h2"
                    className={guestGuideStyles.panelTitle}
                >
                    LISTA DE PRESENTES
                </Typography>

                <div className={guestGuideStyles.smallDivider}>
                    <span />
                    <span className={guestGuideStyles.dividerHeart}>
                        ♥
                    </span>
                    <span />
                </div>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.giftsText}
                >
                    Sua presença já é um grande presente.
                    <br />
                    Mas, para quem desejar nos presentear,
                    <br />
                    preparamos uma lista com muito carinho.
                </Typography>

                <a
                    href="/presentes"
                    className={guestGuideStyles.giftsButton}
                >
                    <img
                        src={Presente}
                        alt=""
                        className={guestGuideStyles.giftsButtonIcon}
                    />

                    VER LISTA DE PRESENTES
                </a>
            </div>
        </section>
    );
}