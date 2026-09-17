import { forwardRef } from "react";
import clsx from "clsx";
import type{ BadgeProps } from "./Badge.types";
import { variants, sizes } from "./Badge.styles";


export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center gap-2",
          "rounded-full",
          "font-medium",
          "transition-all duration-300",
          "select-none",
          "whitespace-nowrap",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {leftIcon}

        {children}

        {rightIcon}
      </span>
    );
  }
);

Badge.displayName = "Badge";