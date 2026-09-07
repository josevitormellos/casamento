import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import Roupa from "../../../assets/Roupa.png";

export function GuestGuideDressCode() {
    return (
        <section className={guestGuideStyles.panel}>
            {/* DRESS CODE */}
            <div className={guestGuideStyles.dressCode}>
               <div className={guestGuideStyles.iconCircle}>
                    <img
                        src={Roupa}
                        alt="Dress code"
                        className={guestGuideStyles.dressIcon}
                    />
                </div>

                <Typography
                    as="h2"
                    className={guestGuideStyles.panelTitle}
                >
                    DRESS CODE
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
                    className={guestGuideStyles.panelText}
                >
                    Nosso casamento acontecerá durante o dia,
                    às 11h, seguido de uma recepção ao ar livre.
                </Typography>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.panelText}
                >
                    <strong>
                        Sugerimos traje passeio completo,
                    </strong>
                    <br />
                    priorizando tecidos leves e confortáveis.
                </Typography>
            </div>

            {/* DIVISOR */}
            <div className={guestGuideStyles.panelSeparator} />

            {/* CORES RESERVADAS */}
            <div className={guestGuideStyles.reservedColors}>
                <Typography
                    as="h2"
                    className={guestGuideStyles.colorsTitle}
                >
                    CORES RESERVADAS AO CORTEJO
                </Typography>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.colorsDescription}
                >
                    Pedimos gentilmente que evitem as seguintes cores:
                </Typography>

                <div className={guestGuideStyles.colorsGrid}>
                    <div className={guestGuideStyles.colorItem}>
                        <span
                            className={`${guestGuideStyles.colorCircle} bg-[#285563]`}
                        />

                        <Typography
                            color="secondary"
                            className={guestGuideStyles.colorName}
                        >
                            Azul
                            <br />
                            Petróleo
                            <br />
                            (Rhino)
                        </Typography>
                    </div>

                    <div className={guestGuideStyles.colorItem}>
                        <span
                            className={`${guestGuideStyles.colorCircle} bg-[#73713D]`}
                        />

                        <Typography
                            color="secondary"
                            className={guestGuideStyles.colorName}
                        >
                            Verde
                            <br />
                            Oliva
                        </Typography>
                    </div>

                    <div className={guestGuideStyles.colorItem}>
                        <span
                            className={`${guestGuideStyles.colorCircle} bg-[#F0C36F]`}
                        />

                        <Typography
                            color="secondary"
                            className={guestGuideStyles.colorName}
                        >
                            Naples
                            <br />
                            (amarelo
                            <br />
                            das damas)
                        </Typography>
                    </div>

                    <div className={guestGuideStyles.colorItem}>
                        <span
                            className={`${guestGuideStyles.colorCircle} bg-[#F5EEE3] border border-[#E5DCCF]`}
                        />

                        <Typography
                            color="secondary"
                            className={guestGuideStyles.colorName}
                        >
                            Branco,
                            <br />
                            Off-white,
                            <br />
                            Marfim ou
                            <br />
                            Champagne
                            <br />
                            (reservados
                            <br />
                            para a noiva)
                        </Typography>
                    </div>
                </div>

                <div className={guestGuideStyles.colorsFooter}>
                    <span className={guestGuideStyles.footerBranch}>
                        ❧
                    </span>

                    <Typography
                        color="secondary"
                        className={guestGuideStyles.footerText}
                    >
                        Agradecemos por nos ajudarem a preservar a
                        identidade visual que sonhamos para esse dia.
                    </Typography>
                </div>
            </div>
        </section>
    );
}