import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import Crianca from "../../../assets/Crianca.png";

export function GuestGuideChildren() {
    return (
        <section className={guestGuideStyles.panelChildren}>
            <div className={guestGuideStyles.childrenContent}>
                <div className={guestGuideStyles.panelHeader}>
                  <div className={guestGuideStyles.iconCircle}>
                    <img
                        src={Crianca}
                        alt="Crianças"
                        className={guestGuideStyles.childrenIconImage}
                    />
                </div>

                    <Typography
                        as="h2"
                        className={guestGuideStyles.panelTitle}
                    >
                        CRIANÇAS
                    </Typography>

                    <div className={guestGuideStyles.smallDivider}>
                        <span />
                        <span className={guestGuideStyles.dividerHeart}>
                            ♥
                        </span>
                        <span />
                    </div>
                </div>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.childrenIntro}
                >
                    Amamos crianças! ❤️
                </Typography>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.childrenText}
                >
                    Elas são muito bem-vindas e farão parte
                    da alegria deste dia.
                </Typography>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.childrenText}
                >
                    Pedimos apenas que os pais ou responsáveis
                    acompanhem os pequenos durante toda a cerimônia
                    e recepção para que todos possam aproveitar esse
                    momento com tranquilidade.
                </Typography>
            </div>
        </section>
    );
}