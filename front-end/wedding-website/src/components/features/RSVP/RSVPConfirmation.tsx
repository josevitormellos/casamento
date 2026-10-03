import type { RSVPConfirmationProps } from "./RSVPConfirmation.types";

import { Typography } from "../../ui/Typography/Typography";

export function RSVPConfirmation({

    attending

}: RSVPConfirmationProps) {

    return (

        <Typography
            className="text-center"
        >

            {

                attending

                    ? "Obrigado por confirmar sua presença! ❤️"

                    : "Sentiremos sua falta, obrigado por avisar."

            }

        </Typography>

    );

}   