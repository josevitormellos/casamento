import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import { typography } from "../../../styles/typography";

import Flor7 from "../../../assets/Flor7.png";
import Flor8 from "../../../assets/Flor8.png";

export function GuestGuideFooter() {
    return (
        <footer className={guestGuideStyles.footer}>

            <img
                src={Flor7}
                alt=""
                className={guestGuideStyles.footerFlowerLeft}
            />

            <Typography
                className={guestGuideStyles.footerTextTitle}
                style={{
                    fontFamily: typography.script.fontFamily,
                    fontWeight: typography.script.weight,
                }}
            >
                Agora é só chegar, celebrar e viver esse dia com a gente.
                <span className={guestGuideStyles.footerHeart}>
                    ♥
                </span>
            </Typography>

            <img
                src={Flor8}
                alt=""
                className={guestGuideStyles.footerFlowerRight}
            />

        </footer>
    );
}