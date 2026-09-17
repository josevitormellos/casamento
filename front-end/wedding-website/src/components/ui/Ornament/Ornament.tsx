import clsx from "clsx";
import { forwardRef } from "react";

import type { OrnamentProps } from "./Ornament.types";

import {
ornamentPositions,
ornamentStyles
} from "./Ornament.styles";

export const Ornament = forwardRef<
HTMLDivElement,
OrnamentProps
>(
(
{
children,
position="top-left",
className,
...props
},
ref
)=>{

return(

<div

ref={ref}

className={clsx(

ornamentStyles.base,

ornamentPositions[position],

className

)}

{...props}

>

{children}

</div>

);

}

);

Ornament.displayName="Ornament";