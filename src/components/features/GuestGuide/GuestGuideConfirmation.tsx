import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import Convite from "../../../assets/convite.png";

export function GuestGuideConfirmation() {
    return (
        <section className={guestGuideStyles.panelConfirmation}>
            <div className={guestGuideStyles.confirmationContent}>
               <div className={guestGuideStyles.iconCircle}>
                    <img
                        src={Convite}
                        alt="Confirmação de presença"
                        className={guestGuideStyles.confirmationIcon}
                    />
                </div>

                <Typography
                    as="h2"
                    className={guestGuideStyles.confirmationTitle}
                >
                    CONFIRMAÇÃO DE PRESENÇA
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
                    className={guestGuideStyles.confirmationText}
                >
                    Pedimos que confirme sua presença
                    <br />
                    até 31 de agosto de 2026.
                </Typography>

                <a
                    href="/confirmacao"
                    className={guestGuideStyles.confirmationButton}
                >
                    <span className={guestGuideStyles.confirmationButtonIcon}>
                        ✓
                    </span>

                    CONFIRMAR PRESENÇA
                </a>
            </div>
        </section>
    );
}