import { Confirmation as ConfirmationFeature } from "../../components/features/Confirmation/Confirmation";
import { confirmationPageStyles } from "./Confirmation.styles";

export function Confirmation() {
    return (
        <main id="confirmacao" className={confirmationPageStyles.container}>
            <ConfirmationFeature />
        </main>
    );
}