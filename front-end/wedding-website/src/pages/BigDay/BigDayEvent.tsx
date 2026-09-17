import { Typography } from "../../components/ui/Typography/Typography";
import Relogio from "../../assets/Relogio.png";
import Local from "../../assets/Local.png";
import Agenda from "../../assets/Agenda.png";
import type { BigDayEventProps } from "./BigDayEvent.types";

import { bigDayEventStyles } from "./BigDayEvent.styles";

export function BigDayEvent({

    title,

    icon,

    date,

    time,

    location

}: BigDayEventProps) {

    return (

        <article className={bigDayEventStyles.container}>

            <div className={bigDayEventStyles.iconWrapper}>

                <img
                    src={icon}
                    alt=""
                    className={bigDayEventStyles.eventIcon}
                />

            </div>

            <div className={bigDayEventStyles.content}>

                <Typography
                    className={bigDayEventStyles.title}
                >

                    {title}

                </Typography>

                <div className={bigDayEventStyles.info}>

                    <div className={bigDayEventStyles.infoItem}>

                        <img
                            src={Agenda}
                            alt=""
                            className={bigDayEventStyles.infoIcon}
                        />

                        <Typography className={bigDayEventStyles.infoText}>

                            {date}

                        </Typography>

                    </div>

                    <div className={bigDayEventStyles.infoItem}>

                        <img
                            src={Relogio}
                            alt=""
                            className={bigDayEventStyles.infoIcon}
                        />

                        <Typography className={bigDayEventStyles.infoText}>

                            {time}

                        </Typography >

                    </div>

                    <div className={bigDayEventStyles.infoItem}>

                        <img
                            src={Local}
                            alt=""
                            className={bigDayEventStyles.infoIcon}
                        />

                        <Typography className={bigDayEventStyles.locationText}>

                            {location}

                        </Typography>

                    </div>

                </div>

            </div>

        </article>

    );

}