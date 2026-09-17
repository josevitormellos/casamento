import { Typography } from "../../ui/Typography/Typography";
import Logo from "../../../assets/logo.png";
import Lua from "../../../assets/Lua.png";
import { confirmationStyles } from "./Confirmation.styles";

export function ConfirmationHeader() {
    return (
        <header className="relative flex w-full flex-col items-center">
            <img
                src={Lua}
                alt=""
                className="absolute right-[-5px] top-0 w-[35px]"
            />

            <img
                src={Logo}
                alt="Natalia e Luiz"
                className={confirmationStyles.logo}
            />

            <Typography
                as="h1"
                className={confirmationStyles.title}
            >
                CONFIRME SUA PRESENÇA
            </Typography>

            <div className="mt-2 text-[#C89A36]">
                ♥
            </div>

            <Typography
                className={confirmationStyles.subtitle}
            >
                SUA PRESENÇA TORNA ESSE DIA AINDA MAIS ESPECIAL.
            </Typography>

            <Typography
                className={confirmationStyles.intro}
            >
                Por favor, preencha os dados abaixo para confirmarmos
                a sua presença no nosso casamento.
                <br />
                Contamos com você!{" "}
                <span className={confirmationStyles.heart}>
                    ♥
                </span>
            </Typography>
        </header>
    );
}