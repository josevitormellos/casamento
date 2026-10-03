import { Purpose as PurposeFeature} from "../../components/features/Purpose/Purpose";

import { purposePageStyles } from "./Purpose.styles";

export function Purpose() {

    return (

        <main className={purposePageStyles.container}>

            <PurposeFeature

                title="Nosso Propósito"

                subtitle="Acreditamos que Deus une pessoas para construir famílias que refletem Seu amor."

                content={`
Nosso casamento é o início de uma caminhada construída sobre amor,
respeito e fé.

Mais do que celebrar um dia especial, queremos viver uma vida onde
cada decisão reflita os valores que nos trouxeram até aqui.

Nosso desejo é formar uma família que compartilhe amor, esperança e
gratidão por tudo que Deus tem realizado em nossas vidas.
                `}

                image="/images/purpose/purpose.jpg"

            />

        </main>

    );

}