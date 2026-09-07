import { Typography } from "../../ui/Typography/Typography";
import { guestGuideStyles } from "./GuestGuide.styles";
import Camera from "../../../assets/camera.png";

export function GuestGuideShare() {
    return (
        <section className={guestGuideStyles.panelShare}>
            <div className={guestGuideStyles.shareContent}>
                {/* Ícone */}
                <div className={guestGuideStyles.iconCircle}>
                    <img
                        src={Camera}
                        alt="Compartilhe seus registros"
                        className={guestGuideStyles.cameraIcon}
                    />
                </div>

                {/* Título */}
                <Typography
                    as="h2"
                    className={guestGuideStyles.shareTitle}
                >
                    COMPARTILHE ESSE
                    <br />
                    MOMENTO COM A GENTE
                </Typography>

                {/* Divisor */}
                <div className={guestGuideStyles.smallDivider}>
                    <span />
                    <span className={guestGuideStyles.dividerHeart}>
                        ♥
                    </span>
                    <span />
                </div>

                {/* Texto */}
                <Typography
                    color="secondary"
                    className={guestGuideStyles.shareText}
                >
                    Amamos registrar memórias, e queremos viver esse dia
                    também através do olhar de cada pessoa que amamos.
                </Typography>

                <Typography
                    color="secondary"
                    className={guestGuideStyles.shareText}
                >
                    Durante a cerimônia, convidamos todos a aproveitarem
                    cada instante com o coração presente. Depois, durante
                    a recepção, fotografem, filmem, façam stories, reels
                    e publiquem quantas lembranças quiserem!
                </Typography>

                {/* Instagram */}
                <div className={guestGuideStyles.instagramBox}>
                    <div className={guestGuideStyles.instagramIcon}>
                        ◎
                    </div>

                    <div className={guestGuideStyles.instagramContent}>
                        <Typography
                            color="secondary"
                            className={guestGuideStyles.instagramLabel}
                        >
                            MARQUE NOSSO INSTAGRAM
                        </Typography>

                        <Typography
                            color="primary"
                            className={guestGuideStyles.instagramHandle}
                        >
                            @luna_17102026
                        </Typography>
                    </div>

                    <span className={guestGuideStyles.instagramHeart}>
                        ♡
                    </span>
                </div>

                {/* Texto final */}
                <Typography
                    color="secondary"
                    className={guestGuideStyles.shareFooter}
                >
                    Assim conseguiremos acompanhar todos os registros
                    desse dia tão especial e guardar cada lembrança com
                    muito carinho. Será uma alegria reviver nosso
                    casamento através dos olhos de quem caminhou conosco
                    até aqui. ❤️
                </Typography>
            </div>
        </section>
    );
}