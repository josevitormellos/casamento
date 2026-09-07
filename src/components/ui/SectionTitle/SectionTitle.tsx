import clsx from "clsx";
import { forwardRef } from "react";

import type { SectionTitleProps } from "./SectionTitle.types";

import { sectionTitleStyles } from "./SectionTitle.styles";

export const SectionTitle=forwardRef<
HTMLDivElement,
SectionTitleProps
>(
(
{
title,
subtitle,
icon,
center=true,
className,
...props
},
ref
)=>{

return(

<div

ref={ref}

className={clsx(

sectionTitleStyles.container,

center && sectionTitleStyles.center,

className

)}

{...props}

>

<h2 className={sectionTitleStyles.title}>
{title}
</h2>

{subtitle && (

<p className={sectionTitleStyles.subtitle}>
{subtitle}
</p>

)}

{icon && (

<div className={sectionTitleStyles.icon}>
{icon}
</div>

)}

</div>

);

}

);

SectionTitle.displayName="SectionTitle";