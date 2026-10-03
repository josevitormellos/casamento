import { Gallery as GalleryFeature} from "../../components/features/Gallery/Gallery";

import { galleryPageStyles } from "./Gallery.styles";

export function Gallery() {

    return (

        <main className={galleryPageStyles.container}>

            <GalleryFeature

                title="Galeria"

                subtitle="Alguns momentos que marcaram nossa história."

                images={[

                    {

                        id: 1,

                        src: "/images/gallery/01.jpg",

                        alt: "Foto 1",

                     

                    },

                    {

                        id: 2,

                        src: "/images/gallery/02.jpg",

                        alt: "Foto 2",

                     

                    },

                    {

                        id: 3,

                        src: "/images/gallery/03.jpg",

                        alt: "Foto 3",


                    },

                    {

                        id: 4,

                        src: "/images/gallery/04.jpg",

                        alt: "Foto 4",

                        

                    },

                    {

                        id: 5,

                        src: "/images/gallery/05.jpg",

                        alt: "Foto 5",

                       

                    },

                    {

                        id: 6,

                        src: "/images/gallery/06.jpg",

                        alt: "Foto 6",

                       

                    }

                ]}

            />

        </main>

    );

}