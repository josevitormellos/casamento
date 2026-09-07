import clsx from "clsx";
import { forwardRef } from "react";

import type { InputProps } from "./Input.types";

import { inputStyles } from "./Input.styles";

export const Input = forwardRef<
HTMLInputElement,
InputProps
>(
(
{
label,
error,
leftIcon,
rightIcon,
className,
...props
},
ref
)=>{

return(

<div className={inputStyles.container}>

{label && (

<label className={inputStyles.label}>
{label}
</label>

)}

<div className={inputStyles.wrapper}>

{leftIcon}

<input

ref={ref}

className={clsx(
inputStyles.input,
className
)}

{...props}

/>

{rightIcon}

</div>

{error && (

<span className={inputStyles.error}>
{error}
</span>

)}

</div>

);

}

);

Input.displayName="Input";