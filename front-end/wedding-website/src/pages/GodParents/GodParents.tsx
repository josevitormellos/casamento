import { GodParents as GodParentsFeature} from "../../components/features/GodParents/GodParents";

import { godParentsPageStyles } from "./GodParents.styles";

export function GodParents() {

    return (

        <main className={godParentsPageStyles.container}>

            <GodParentsFeature

                title="Padrinhos"

                subtitle="Pessoas especiais que caminharão ao nosso lado neste grande dia."

                couples={[

                    {
                        id: 1,
                        groomName: "Carlos",
                        brideName: "Ana",
                        groomPhoto: "/images/godparents/carlos.jpg",
                        bridePhoto: "/images/godparents/ana.jpg",
                        message: "Obrigado por fazerem parte da nossa história."
                    },

                    {
                        id: 2,
                        groomName: "Pedro",
                        brideName: "Juliana",
                        groomPhoto: "/images/godparents/pedro.jpg",
                        bridePhoto: "/images/godparents/juliana.jpg",
                        message: "Nossa caminhada ficou ainda mais bonita com vocês."
                    },

                    {
                        id: 3,
                        groomName: "Rafael",
                        brideName: "Mariana",
                        groomPhoto: "/images/godparents/rafael.jpg",
                        bridePhoto: "/images/godparents/mariana.jpg",
                        message: "Somos gratos por compartilhar esse momento ao lado de vocês."
                    }

                ]}

            />

        </main>

    );

}