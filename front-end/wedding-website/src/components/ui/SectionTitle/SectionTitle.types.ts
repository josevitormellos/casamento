import type {
HTMLAttributes,
ReactNode
} from "react";

export interface SectionTitleProps
extends HTMLAttributes<HTMLDivElement>{

title:string;

subtitle?:string;

icon?:ReactNode;

center?:boolean;

}