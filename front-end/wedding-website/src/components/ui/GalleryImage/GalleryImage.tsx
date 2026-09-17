import clsx from "clsx";
import { forwardRef } from "react";

import type { GalleryImageProps } from "./GalleryImage.types";

import { galleryImageStyles } from "./GalleryImage.styles";

export const GalleryImage = forwardRef<
HTMLImageElement,
GalleryImageProps
>(
(
{
hoverZoom = true,
className,
...props
},
ref
)=>{

return(

<div
className={galleryImageStyles.wrapper}
>

<img

ref={ref}

className={clsx(

galleryImageStyles.image,

hoverZoom && galleryImageStyles.hover,

className

)}

{...props}

/>

</div>

);

}

);

GalleryImage.displayName = "GalleryImage";