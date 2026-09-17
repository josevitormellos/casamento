import clsx from "clsx";
import { forwardRef } from "react";

import type { TimelineItemProps } from "./TimelineItem.types";

import { timelineItemStyles } from "./TimelineItem.styles";

export const TimelineItem = forwardRef<
HTMLDivElement,
TimelineItemProps
>(
(
{
date,
title,
description,
image,
reverse=false,
className,
...props
},
ref
)=>{

return(

<div

ref={ref}

className={clsx(

timelineItemStyles.container,

reverse && timelineItemStyles.reverse,

className

)}

{...props}

>

<div className={timelineItemStyles.content}>

<span className={timelineItemStyles.date}>
{date}
</span>

<h3 className={timelineItemStyles.title}>
{title}
</h3>

<p className={timelineItemStyles.description}>
{description}
</p>

</div>

{image && (

<div className={timelineItemStyles.image}>
{image}
</div>

)}

</div>

);

}

);

TimelineItem.displayName="TimelineItem";