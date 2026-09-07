import { Section } from "../../ui/Section/Section";
import { Container } from "../../ui/Container/Container";

import { StoryContent } from "./StoryContent";
import { StoryTimeline } from "./StoryTimeline";
import { StoryFooter } from "./StoryFooter";

import { storyStyles } from "./Story.styles";

import Story1 from "../../../assets/Story/1.jpeg";
import Story2 from "../../../assets/Story/2.jpeg";
import Story3 from "../../../assets/Story/3.jpeg";
import Story4 from "../../../assets/Story/4.jpeg";
import Story5 from "../../../assets/Story/5.jpeg";
import Story6 from "../../../assets/Story/6.jpeg";
import Story7 from "../../../assets/Story/7.jpeg";
import Story8 from "../../../assets/Story/8.jpeg";
import Story9 from "../../../assets/Story/9.jpeg";
import Story10 from "../../../assets/Story/10.jpeg";
import Story11 from "../../../assets/Story/11.jpeg";

export function Story() {

    const storyEvents = [

        {
            id: 1,

          photo: {
                id: 1,
                src: Story1,
                alt: "O primeiro encontro"
            },
            date: "18 · 04 · 2021",

            title: "O primeiro encontro",

            description:
                "Em um domingo, durante a pandemia, dois jovens cruzaram seus caminhos de maneira improvável. Tudo começou ali.",

            layout: "image-right" as const
        },
                {
    id: 2,

    photo: {
        id: 2,
        src: Story2,
        alt: "Aniversário do Luiz"
    },

    date: "10 · 02 · 2025",

    title: "Aniversário do Luiz",

    description: "",

    layout: "image-left" as const
},

{
    id: 3,

    date: "2025",

    title: "A amizade",

    description:
        "Nascem a admiração, o carinho e uma amizade leve, mas com profundidade. Dois aniversários que aproximaram ainda mais dois corações.",

    layout: "image-top" as const
},

{
    id: 4,

    photo: {
        id: 3,
        src: Story3,
        alt: "Aniversário da Natália"
    },

    date: "11 · 04 · 2025",

    title: "Aniversário da Natália",

    description: "",

    layout: "image-right" as const
},


        {
            id: 5,

          photo: {
                id: 4,
                src: Story4,
                alt: "O reencontro"
            },

            date: "08 · 05 · 2024",

            title: "O reencontro",

            description:
                "Três anos depois, um reencontro inesperado que fez surgir um verdadeiro anjo vindo de Deus para unir-nos.",

            layout: "image-left" as const
        },

        {
            id: 6,

           photo: {
                id: 5,
                src: Story5,
                alt: "Veneza"
            },

            date: "26 · 08 · 2025",

            title: "Veneza",

            description:
                "O primeiro beijo. Sim, em Veneza! O início de algo que ainda nem sabíamos explicar.",

            layout: "image-top" as const
        },

        {
            id: 7,

           photo: {
                id: 6,
                src: Story6,
                alt: "Praça de São Marcos"
            },

            date: "27 · 08 · 2025",

            title: "Praça de São Marcos",

            description:
                "Na manhã seguinte, um toque, uma energia diferente e a certeza de que algo havia mudado. Ainda éramos amigos, mas lá se iniciava a Família Luna.",

            layout: "image-right" as const
        },

        {
            id: 8,

            photo: {
                id: 7,
                src: Story7,
                alt: "Roma e o retorno"
            },

            date: "28 · 08 a 30 · 08 · 2025",

            title: "Roma e o retorno",

            description:
                "Curtimos a cidade eterna e voltamos ao Brasil com o coração diferente.",

            layout: "image-left" as const
        },

        {
            id: 9,

           photo: {
                id: 8,
                src: Story8,
                alt: "Itapava"
            },

            date: "13 · 09 · 2025",

            title: "Itapava",

            description:
                "Um fim de semana inesquecível e o nosso segundo beijo. A partir daí, não nos separamos mais.",

            layout: "image-top" as const
        },

        {
            id: 10,

            photo: {
                id: 9,
                src: Story9,
                alt: "O pedido de namoro"
            },

            date: "15 · 10 · 2025",

            title: "O pedido de namoro",

            description:
                "O começo oficial da nossa história. Um sim para viver o agora.",

            layout: "image-right" as const
        },

        {
            id: 11,

          photo: {
                id: 10,
                src: Story10,
                alt: "Nosso primeiro Natal em família"
            },

            date: "Dezembro · 2025",

            title: "Nosso primeiro Natal em família",

            description:
                "Novas tradições, muito amor e o início de uma nova fase junto das famílias.",

            layout: "image-left" as const
        },

        {
            id: 12,

         photo: {
            id: 11,
            src: Story11,
            alt: "Pedido de casamento na Jamaica"
        },

            date: "19 · 01 · 2026",

            title: "Jamaica",

            description:
                "Fui pedida em casamento no Caribe, diante do mar e de Deus. Ele perguntou, eu disse sim!",

            layout: "image-top" as const
        }

    ];

    return (

        <Section background="page">

            <Container>

                <div className={storyStyles.container}>

                    <StoryContent

                        title="Nossa história"

                        description="Dois caminhos diferentes se cruzaram por obra de Deus. Entre reencontros, amizades, viagens e muitos sinais descobrimos que os melhores planos são aqueles que Ele escreve para nós. Essa é a nossa história."

                    />

                    <StoryTimeline

                        events={storyEvents}

                    />

                    <StoryFooter />

                </div>

            </Container>

        </Section>

    );

}