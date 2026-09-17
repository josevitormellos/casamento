import clsx from "clsx";
import { forwardRef } from "react";

import type { ImageFrameProps } from "./ImageFrame.types";

import {
  imageFrameStyles,
  imageFrameVariants,
} from "./ImageFrame.styles";

export const ImageFrame = forwardRef<
  HTMLImageElement,
  ImageFrameProps
>(
(
{
variant="default",
shadow=true,
hover=true,
className,
...props
},
ref
)=>{

return(

<div
className={clsx(
imageFrameStyles.wrapper,
imageFrameVariants[variant],
shadow && imageFrameStyles.shadow
)}
>

<img

ref={ref}

className={clsx(
imageFrameStyles.image,
hover && imageFrameStyles.hover,
className
)}

{...props}

/>

</div>

);

}

);

ImageFrame.displayName="ImageFrame";