import type { HTMLAttributes, ReactNode } from "react";

export interface TimelineItemProps
extends HTMLAttributes<HTMLDivElement>{

date:string;

title:string;

description:string;

image?:ReactNode;

reverse?:boolean;

}