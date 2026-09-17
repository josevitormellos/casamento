import clsx from "clsx";
import { forwardRef } from "react";

import type { SectionProps } from "./Section.types";

import {
    sectionBackgrounds,
    sectionStyles
} from "./Section.styles";

export const Section = forwardRef<
    HTMLElement,
    SectionProps
>(
(
{
background = "transparent",
padding = true,
className,
children,
...props
},
ref
)=>{

return(

<section

ref={ref}

className={clsx(

sectionStyles.base,

padding && sectionStyles.padding,

sectionBackgrounds[background],

className

)}

{...props}

>

{children}

</section>

);

}

);

Section.displayName="Section";