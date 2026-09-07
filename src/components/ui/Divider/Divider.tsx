import clsx from "clsx";
import { forwardRef } from "react";

import type { DividerProps } from "./Divider.types";

import { dividerVariants } from "./Divider.styles";

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
(
{
variant = "solid",
className,
...props
},
ref
)=>{

return(

<div

ref={ref}

className={clsx(

"w-full",

dividerVariants[variant],

className

)}

{...props}

/>

);

}

);

Divider.displayName = "Divider";