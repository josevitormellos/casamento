import { Gifts as GiftsFeature} from "../../components/features/Gifts/Gifts";
import Gift01 from "../../../src/assets/Gifts/01-cafe-manha-paris.jpg";
import Gift02 from "../../../src/assets/Gifts/02-jantar-romantico-praia.jpg";
import Gift03 from "../../../src/assets/Gifts/03-masssagem-casal.jpg";
import Gift04 from "../../../src/assets/Gifts/04-experiencia-gastronomica.jpg";
import Gift05 from "../../../src/assets/Gifts/05-passeio-barco-kotor.jpg";
import Gift06 from "../../../src/assets/Gifts/06-visita-louvre.jpg";
import Gift07 from "../../../src/assets/Gifts/07-dia-rivierie-albania.jpg";
import Gift08 from "../../../src/assets/Gifts/08-passeio-balao-parisjpg.jpg";
import Gift09 from "../../../src/assets/Gifts/09-noite-romantica.jpg";
import Gift10 from "../../../src/assets/Gifts/10-passeio-iate.jpg";
import Gift11 from "../../../src/assets/Gifts/11-piquinique-paris.jpg";
import Gift12 from "../../../src/assets/Gifts/12-trilha-montenegrojpg.jpg";
import Gift13 from "../../../src/assets/Gifts/13-por-sol-albania.jpg";
import Gift14 from "../../../src/assets/Gifts/14-tour-romantico.jpg";
import Gift15 from "../../../src/assets/Gifts/15-day-spar.jpg";
import Gift16 from "../../../src/assets/Gifts/16-passeio-gruta-azul.jpg";
import Gift17 from "../../../src/assets/Gifts/17-degustacao-vinho.jpg";
import Gift18 from "../../../src/assets/Gifts/18-passeio-balao.jpg";
import Gift19 from "../../../src/assets/Gifts/19-jantar-kotor.jpg";
import Gift20 from "../../../src/assets/Gifts/20-aula-culinaria.jpg";
import Gift21 from "../../../src/assets/Gifts/21-jantar-praia.jpg";
import Gift22 from "../../../src/assets/Gifts/22-noite-iluminada-paris.jpg";
import Gift23 from "../../../src/assets/Gifts/23-aluguel-barco-privativo.jpg";
import Gift24 from "../../../src/assets/Gifts/24-massagem-relaxante.jpg";
import Gift25 from "../../../src/assets/Gifts/25-tour-kotor.jpg";
import Gift26 from "../../../src/assets/Gifts/26-perfumaria.jpg";
import Gift27 from "../../../src/assets/Gifts/27-espetaculo.jpg";
import Gift28 from "../../../src/assets/Gifts/28-queijos-vinhos.jpg";
import Gift29 from "../../../src/assets/Gifts/29-cafe-manha-vista.jpg";
import Gift30 from "../../../src/assets/Gifts/30-presente-surpresa.jpg";
import Gift31 from "../../../src/assets/Gifts/31-passeio-iate-por-sol.jpg";
import Gift32 from "../../../src/assets/Gifts/32-visita-museu.jpg";
import Gift33 from "../../../src/assets/Gifts/33-passeio-a-cavalo.jpg";
import Gift34 from "../../../src/assets/Gifts/34-noite-especial.jpg";
import Gift35 from "../../../src/assets/Gifts/35-teleferico-montenegro.jpg";
import Gift36 from "../../../src/assets/Gifts/36-tour-gastronomico.jpg";
import Gift37 from "../../../src/assets/Gifts/37-dia-praia.jpg";
import Gift38 from "../../../src/assets/Gifts/38-pisicna-borda-infinita.jpg";
import Gift39 from "../../../src/assets/Gifts/39-passeio-helicoptero.jpg";
import Gift40 from "../../../src/assets/Gifts/40-piquinique-romantico.jpg";
import Gift41 from "../../../src/assets/Gifts/41-visita-adeba.jpg";
import Gift42 from "../../../src/assets/Gifts/42-aula-pintura.jpg";
import Gift43 from "../../../src/assets/Gifts/43-passeio-trem-cenico.jpg";
import Gift44 from "../../../src/assets/Gifts/44-jantar-restaurante.jpg";
import Gift45 from "../../../src/assets/Gifts/45-banho-hidromassagem.jpg";
import Gift46 from "../../../src/assets/Gifts/46-cesta-lembranca.jpg";
import Gift47 from "../../../src/assets/Gifts/47-mergulho.jpg";
import Gift48 from "../../../src/assets/Gifts/48-passeio-jardim.jpg";
import Gift49 from "../../../src/assets/Gifts/49-aula-drinks.jpg";
import Gift50 from "../../../src/assets/Gifts/50-presente-especial.jpg";
import { giftsPageStyles } from "./Gifts.styles";

export function Gifts() {

    return (

        <main className={giftsPageStyles.container}>

            <GiftsFeature

                gifts={[

                     {
        id: 1,
        image: Gift01,
        title: "Café da manhã em Paris",
        description: "Café da manhã especial com vista para a Torre Eiffel.",
        price: 140,
    },

    {
        id: 2,
        image: Gift02,
        title: "Jantar romântico na praia",
        description: "Jantar à luz de velas à beira-mar na Riviera Adriática.",
        price: 180,
    },

    {
        id: 3,
        image: Gift03,
        title: "Massagem para o casal",
        description: "Momento de relaxamento e cuidado para os dois.",
        price: 220,
    },

    {
        id: 4,
        image: Gift04,
        title: "Experiência gastronômica",
        description: "Degustação de queijos, vinhos e delícias francesas.",
        price: 260,
    },

    {
        id: 5,
        image: Gift05,
        title: "Passeio de barco em Kotor",
        description: "Passeio de barco pela Baía de Kotor ao pôr do sol.",
        price: 280,
    },

    {
        id: 6,
        image: Gift06,
        title: "Visita privativa ao Louvre",
        description: "Tour privativo pelo Louvre com guia especializado.",
        price: 300,
    },

    {
        id: 7,
        image: Gift07,
        title: "Dia na Riviera Albanesa",
        description: "Passeio de dia inteiro pelas praias paradisíacas da Albânia.",
        price: 340,
    },

    {
        id: 8,
        image: Gift08,
        title: "Passeio de balão em Paris",
        description: "Sobrevoo inesquecível pela cidade luz.",
        price: 390,
    },

    {
        id: 9,
        image: Gift09,
        title: "Noite romântica",
        description: "Noite especial com decoração romântica no hotel.",
        price: 450,
    },

    {
        id: 10,
        image: Gift10,
        title: "Passeio privativo de late",
        description: "Experiência exclusiva em late por Montenegro.",
        price: 630,
    },
    {
    id: 11,
    image: Gift11,
    title: "Piquenique em Paris",
    description: "Piquenique romântico com queijos, frutas e vinho em um parque parisiense.",
    price: 160,
},

{
    id: 12,
    image: Gift12,
    title: "Trilha no Montenegro",
    description: "Trilha guiada com paisagens incríveis e experiência inesquecível.",
    price: 170,
},

{
    id: 13,
    image: Gift13,
    title: "Pôr do sol na Albânia",
    description: "Admire o pôr do sol em um dos lugares mais lindos da Albânia.",
    price: 140,
},

{
    id: 14,
    image: Gift14,
    title: "Tour romântico em Paris",
    description: "Passeio privativo pelos pontos turísticos mais românticos.",
    price: 280,
},

{
    id: 15,
    image: Gift15,
    title: "Day Spa para o casal",
    description: "Dia de spa dedicado ao casal em um ambiente relaxante.",
    price: 420,
},

{
    id: 16,
    image: Gift16,
    title: "Passeio à Gruta Azul",
    description: "Passeio de barco até a famosa Gruta Azul na Albânia.",
    price: 190,
},

{
    id: 17,
    image:Gift17,
    title: "Degustação de vinhos",
    description: "Degustação de vinhos em uma vinícola na Europa.",
    price: 230,
},

{
    id: 18,
    image: Gift18,
    title: "Passeio de balão",
    description: "Passeio de balão ao amanhecer com vista panorâmica.",
    price: 450,
},

{
    id: 19,
    image: Gift19,
    title: "Jantar em Kotor",
    description: "Jantar especial com vista para a Baía de Kotor, Montenegro.",
    price: 260,
},

{
    id: 20,
    image: Gift20,
    title: "Aula de culinária local",
    description: "Aula de culinária típica para experiências especiais.",
    price: 210,
},
{
    id: 21,
    image: Gift21,
    title: "Jantar romântico na praia",
    description: "Jantar à luz de velas com os pés na areia e som do mar.",
    price: 300,
},

{
    id: 22,
    image: Gift22,
    title: "Noite iluminada em Paris",
    description: "Passeio noturno pelos monumentos iluminados de Paris.",
    price: 180,
},

{
    id: 23,
    image: Gift23,
    title: "Aluguel de barco privativo",
    description: "Aluguel de barco por meio dia para explorar praias paradisíacas.",
    price: 500,
},

{
    id: 24,
    image: Gift24,
    title: "Massagem relaxante",
    description: "Massagem relaxante para o casal com aromaterapia.",
    price: 220,
},

{
    id: 25,
    image: Gift25,
    title: "Tour histórico em Kotor",
    description: "Explorar a cidade murada de Kotor com guia local.",
    price: 150,
},

{
    id: 26,
    image: Gift26,
    title: "Experiência de perfumaria",
    description: "Criar nossos próprios perfumes em uma experiência única.",
    price: 240,
},

{
    id: 27,
    image: Gift27,
    title: "Ingressos para espetáculo",
    description: "Assistir a um show ou espetáculo especial durante a viagem.",
    price: 210,
},

{
    id: 28,
    image: Gift28,
    title: "Queijos e vinhos",
    description: "Seleção especial de queijos e vinhos para uma noite perfeita.",
    price: 190,
},

{
    id: 29,
    image: Gift29,
    title: "Café da manhã com vista",
    description: "Café da manhã especial com uma vista inesquecível.",
    price: 160,
},

{
    id: 30,
    image: Gift30,
    title: "Presente surpresa",
    description: "Um mimo especial para nos surpreender na viagem.",
    price: 150,
},
{
    id: 31,
    image: Gift31,
    title: "Passeio de late ao pôr do sol",
    description: "Passeio de late ao pôr do sol com champagne e petiscos.",
    price: 600,
},

{
    id: 32,
    image: Gift32,
    title: "Visita a museu",
    description: "Visita guiada a um dos museus mais famosos de Paris.",
    price: 150,
},

{
    id: 33,
    image: Gift33,
    title: "Passeio a cavalo",
    description: "Passeio a cavalo por paisagens naturais incríveis.",
    price: 230,
},

{
    id: 34,
    image: Gift34,
    title: "Noite especial",
    description: "Decoração romântica no quarto com flores, velas e pétalas.",
    price: 250,
},

{
    id: 35,
    image: Gift35,
    title: "Teleférico no Montenegro",
    description: "Subir de teleférico e aproveitar a vista de tirar o fôlego.",
    price: 170,
},

{
    id: 36,
    image: Gift36,
    title: "Tour gastronômico",
    description: "Tour gastronômico por deliciosas especialidades locais.",
    price: 200,
},

{
    id: 37,
    image: Gift37,
    title: "Dia de praia",
    description: "Um dia relaxante em uma praia exclusiva e tranquila.",
    price: 140,
},

{
    id: 38,
    image: Gift38,
    title: "Piscina de borda infinita",
    description: "Um dia em uma piscina de borda infinita com vista.",
    price: 180,
},

{
    id: 39,
    image: Gift39,
    title: "Passeio de helicóptero",
    description: "Passeio de helicóptero para ver a cidade e paisagens de cima.",
    price: 630,
},

{
    id: 40,
    image: Gift40,
    title: "Piquenique romântico",
    description: "Piquenique especial preparado só para nós.",
    price: 160,
},
{
    id: 41,
    image: Gift41,
    title: "Visita a adega",
    description: "Visita e degustação em uma adega local tradicional.",
    price: 190,
},

{
    id: 42,
    image: Gift42,
    title: "Aula de pintura",
    description: "Uma experiência criativa pintando nossa própria obra.",
    price: 210,
},

{
    id: 43,
    image: Gift43,
    title: "Passeio de trem cênico",
    description: "Viagem de trem por paisagens deslumbrantes.",
    price: 280,
},

{
    id: 44,
    image: Gift44,
    title: "Jantar em restaurante",
    description: "Jantar especial em um restaurante premiado.",
    price: 450,
},

{
    id: 45,
    image: Gift45,
    title: "Banho de hidromassagem",
    description: "Banho de hidromassagem com sais e espuma.",
    price: 200,
},

{
    id: 46,
    image: Gift46,
    title: "Cesta de lembranças",
    description: "Uma cesta com produtos típicos da viagem.",
    price: 160,
},

{
    id: 47,
    image: Gift47,
    title: "Mergulho",
    description: "Experiência de mergulho para explorar o mar cristalino.",
    price: 370,
},

{
    id: 48,
    image: Gift48,
    title: "Passeio em jardins",
    description: "Passeio pelos jardins mais lindos e românticos.",
    price: 140,
},

{
    id: 49,
    image: Gift49,
    title: "Aula de drinks",
    description: "Aprender a preparar drinks em uma aula divertida.",
    price: 170,
},

{
    id: 50,
    image: Gift50,
    title: "Presente especial para nós",
    description: "Um presente especial para tornar nossa lua de mel ainda mais inesquecível.",
    price: 300,
},

                ]}

            />

        </main>

    );

}