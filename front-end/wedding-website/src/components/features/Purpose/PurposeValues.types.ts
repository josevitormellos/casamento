import type { HTMLAttributes } from "react";

import type { PurposeValue } from "./Purpose.types";

export interface PurposeValuesProps
    extends HTMLAttributes<HTMLDivElement> {

    values: PurposeValue[];

}