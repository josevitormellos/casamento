import { Prayer as PrayerFeature} from "../../components/features/Prayer/Prayer";

import { prayerPageStyles } from "./Prayer.styles";

export function Prayer() {

    return (

        <main className={prayerPageStyles.container}>

            <PrayerFeature

                title="Oração"

                subtitle="Que Deus abençoe nossa união e todos aqueles que fazem parte desta história."

                quote="Senhor, abençoa cada convidado que recebe este convite. Que nossos corações estejam alinhados com o Teu propósito e que este dia seja para Tua glória."

                prayer={`
Amém.
                `}

            />

        </main>

    );

}