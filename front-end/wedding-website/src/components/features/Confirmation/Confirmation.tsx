import type { ConfirmationProps } from "./Confirmation.types";
import { confirmationStyles } from "./Confirmation.styles";

import { ConfirmationHeader } from "./ConfirmationHeader";
import { ConfirmationForm } from "./ConfirmationForm";
import { ConfirmationFooter } from "./ConfirmationFooter";

export function Confirmation({
    ...props
}: ConfirmationProps) {
    return (
        <main
            className={confirmationStyles.page}
            {...props}
        >
            <div className={confirmationStyles.container}>

                <div className={confirmationStyles.content}>
                    <ConfirmationHeader />

                    <ConfirmationForm />

                    <ConfirmationFooter />
                </div>

            </div>
        </main>
    );
}