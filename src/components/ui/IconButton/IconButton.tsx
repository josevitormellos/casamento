import clsx from "clsx";
import { forwardRef } from "react";

import type { IconButtonProps } from "./IconButton.types";

import {
iconButtonSizes,
iconButtonVariants
} from "./IconButton.styles";

export const IconButton = forwardRef<
HTMLButtonElement,
IconButtonProps
>(
(
{
icon,
variant="primary",
size="md",
className,
...props
},
ref
)=>{

return(

<button

ref={ref}

className={clsx(

"inline-flex",

"items-center",

"justify-center",

"rounded-full",

"transition-all",

"duration-300",

iconButtonVariants[variant],

iconButtonSizes[size],

className

)}

{...props}

>

{icon}

</button>

);

}

);

IconButton.displayName="IconButton";