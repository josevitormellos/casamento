import { GuestGuide as GuestGuideFeature } from "../../components/features/GuestGuide/GuestGuide";
import { guestGuidePageStyles } from "./GuestGuide.styles";

export function GuestGuide() {
    return (
        <main className={guestGuidePageStyles.container}>
            <GuestGuideFeature />
        </main>
    );
}