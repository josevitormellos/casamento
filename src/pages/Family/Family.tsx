import { Family as FamilyFeature } from "../../components/features/Family/Family";

import { familyPageStyles } from "./Family.styles";

export function Family() {

    return (

        <main className={familyPageStyles.container}>

            <FamilyFeature />

        </main>

    );

}