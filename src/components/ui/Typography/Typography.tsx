import clsx from "clsx";

import type { TypographyProps } from "./Typography.types";

import {
  typographyVariants,
  typographyColors,
} from "./Typography.styles";

export function Typography({

  as,

  variant = "body",

  color = "primary",

  className,

  children,

  ...props

}: TypographyProps) {

  const Component = as ?? "p";

  return (

    <Component

      className={clsx(

        typographyVariants[variant],

        typographyColors[color],

        className

      )}

      {...props}

    >

      {children}

    </Component>

  );

}