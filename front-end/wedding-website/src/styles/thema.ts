import { animation } from "./animation";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { gradients } from "./gradients";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { zIndex } from "./zIndex";

export const theme = {
  colors,
  gradients,
  typography,
  spacing,
  radius,
  shadows,
  animation,
  breakpoints,
  zIndex,
} as const;