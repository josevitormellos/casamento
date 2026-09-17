import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import Presente from "../../../assets/Presente.png";
import Linha from "../../../assets/Linha.png";

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

                 <img
                    src={Linha}
                    alt=""
                    className={guestGuideStyles.smallDivider}
                />


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
                href="#presentes"
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