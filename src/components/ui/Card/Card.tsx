import clsx from "clsx";
import { forwardRef } from "react";
import type{ CardProps } from "./Card.types";
import { cardStyles } from "./Card.styles";

export const Card=forwardRef<HTMLDivElement,CardProps>(

({

children,

hoverable,

padding=true,

className,

...props

},ref)=>{

return(

<div

ref={ref}

className={clsx(

cardStyles.base,

hoverable && cardStyles.hover,

padding && cardStyles.padding,

className

)}

{...props}

>

{children}

</div>

)

}

);

Card.displayName="Card";