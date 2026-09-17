import clsx from "clsx";
import { forwardRef } from "react";
import type{ ContainerProps } from "./Container.types";
import { containerStyles } from "./Container.styles";

export const Container=forwardRef<HTMLDivElement,ContainerProps>(

({

children,

fluid,

className,

...props

},ref)=>{

return(

<div

ref={ref}

className={clsx(

fluid
?containerStyles.fluid
:containerStyles.default,

className

)}

{...props}

>

{children}

</div>

)

}

);

Container.displayName="Container";