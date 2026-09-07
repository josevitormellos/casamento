import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import Relogio from "../../../assets/relogioF.png";
import Rio from "../../../assets/rj.png";

export function GuestGuideBefore() {
    return (
        <section className={guestGuideStyles.panelBefore}>
            <div className={guestGuideStyles.panelHeader}>
               <div className={guestGuideStyles.iconCircle}>
                    <img
                        src={Relogio}
                        alt="Horário"
                        className={guestGuideStyles.clockIcon}
                    />
                </div>

                <Typography
                    as="h2"
                    className={guestGuideStyles.panelTitle}
                >
                    CHEGUE UM POUCO ANTES
                </Typography>

                <div className={guestGuideStyles.smallDivider}>
                    <span />
                    <span className={guestGuideStyles.dividerHeart}>
                        ♥
                    </span>
                    <span />
                </div>
            </div>

            <div className={guestGuideStyles.beforeContent}>
                <Typography
                    color="secondary"
                    className={guestGuideStyles.highlightText}
                >
                    Nossa cerimônia começará pontualmente às 11h.
                </Typography>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.beforeText}
                >
                    Pedimos, com carinho, que todos procurem chegar
                    entre 30 e 40 minutos antes, para que possamos
                    iniciar esse momento tão especial juntos.
                </Typography>
                <div className={guestGuideStyles.footerImage}>
                        <img
                            src={Rio}
                            alt=""
                            className={guestGuideStyles.footerImageImg}
                        />
                    </div>
            </div>
        </section>
    );
}