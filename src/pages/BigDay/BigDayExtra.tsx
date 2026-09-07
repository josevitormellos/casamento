import { Typography } from "../../components/ui/Typography/Typography";

import type { BigDayExtraProps } from "./BigDayExtra.types";

import { bigDayExtraStyles } from "./BigDayExtra.styles";

export function BigDayExtra({

    title,

    description,

    icon

}: BigDayExtraProps) {

    return (

        <div className={bigDayExtraStyles.container}>

            <img
                src={icon}
                alt=""
                className={bigDayExtraStyles.icon}
            />

            <div>

                <Typography
                    className={bigDayExtraStyles.title}
                >

                    {title}

                </Typography>

                <Typography
                    color="secondary"
                    className={bigDayExtraStyles.description}
                >

                    {description}

                </Typography>

            </div>

        </div>

    );

}