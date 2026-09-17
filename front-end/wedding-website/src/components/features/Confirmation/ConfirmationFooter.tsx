import Rio from "../../../assets/Rj.png";
import { Typography } from "../../ui/Typography/Typography";
import { confirmationStyles } from "./Confirmation.styles";
import { typography } from "../../../styles/typography";

export function ConfirmationFooter() {
    return (
        <footer className={confirmationStyles.footer}>

            <Typography
                className={confirmationStyles.footerPhrase}
                style={{
                    fontFamily: typography.script.fontFamily,
                    fontWeight: typography.script.weight,
                }}
            >
                Sob a mesma lua,
                <br />
                começamos
                <br />
                nossa família.
                <span className={confirmationStyles.footerHeart}>
                    ♥
                </span>
            </Typography>

            <div className={confirmationStyles.footerSmall}>
                NOSSA FAMÍLIA
            </div>

            <div className={confirmationStyles.footerImage}>
                <img
                    src={Rio}
                    alt=""
                    className={confirmationStyles.footerImageImg}
                />
            </div>

        </footer>
    );
}