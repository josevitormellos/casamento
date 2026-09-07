import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";

import Carro from "../../../assets/carroF.png";
import Local from "../../../assets/Local.png";
import Relogio from "../../../assets/Relogio.png";

export function GuestGuideLocation() {
    return (
        <section className={guestGuideStyles.panel}>

            <div className={guestGuideStyles.panelHeader}>

                <div className={guestGuideStyles.iconCircle}>
                    <img
                        src={Carro}
                        alt=""
                        className={guestGuideStyles.locationMainIcon}
                    />
                </div>

                <Typography
                    as="h2"
                    className={guestGuideStyles.panelTitle}
                >
                    COMO CHEGAR
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
                className={guestGuideStyles.highlightText}
            >
                A cerimônia acontecerá na Urca.
            </Typography>

            <div className={guestGuideStyles.infoItem}>

                <div className={guestGuideStyles.infoIcon}>
                    <img
                        src={Local}
                        alt=""
                    />
                </div>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.infoText}
                >
                    O bairro possui poucas vagas de estacionamento.
                    <br />
                    Recomendamos priorizar o uso de Uber, táxi ou
                    transporte por aplicativo.
                </Typography>

            </div>

            <div className={guestGuideStyles.infoSeparator} />

            <div className={guestGuideStyles.infoItem}>

                <div className={guestGuideStyles.infoIcon}>
                    <img
                        src={Relogio}
                        alt=""
                    />
                </div>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.infoText}
                >
                    Caso opte por ir de carro,
                    <br />
                    sugerimos chegar com antecedência.
                </Typography>

            </div>

        </section>
    );
}