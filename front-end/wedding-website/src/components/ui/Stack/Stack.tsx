import clsx from "clsx";

import type { StackProps } from "./Stack.types";

import {

  stackDirections,

  stackSpacing,

  stackAlign,

  stackJustify

} from "./Stack.styles";

export function Stack({

  direction = "column",

  spacing = "md",

  align = "stretch",

  justify = "start",

  wrap = false,

  className,

  children,

  ...props

}: StackProps) {

  return (

    <div

      className={clsx(

        "flex",

        stackDirections[direction],

        stackSpacing[spacing],

        stackAlign[align],

        stackJustify[justify],

        wrap && "flex-wrap",

        className

      )}

      {...props}

    >

      {children}

    </div>

  );

}