import clsx from "clsx";
import { forwardRef } from "react";
import type{ ButtonProps } from "./Button.types";
import { buttonSizes, buttonVariants } from "./Button.styles";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
(
{
children,
variant="primary",
size="md",
loading=false,
fullWidth=false,
leftIcon,
rightIcon,
className,
disabled,
...props
},
ref
)=>{

return(

<button

ref={ref}

disabled={disabled || loading}

className={clsx(

"inline-flex items-center justify-center gap-2",

"rounded-full",

"font-medium",

"transition-all duration-300",

"disabled:pointer-events-none",

"disabled:opacity-50",

buttonVariants[variant],

buttonSizes[size],

fullWidth && "w-full",

className

)}

{...props}

>

{leftIcon}

{loading ? "Carregando..." : children}

{rightIcon}

</button>

)

}

);

Button.displayName="Button";