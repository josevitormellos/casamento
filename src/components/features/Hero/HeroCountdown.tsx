import { useEffect, useState } from "react";

import type { HeroCountdownProps } from "./HeroCountdown.types";

import { heroCountdownStyles } from "./HeroCountdown.styles";

interface CountdownTime {

    days: number;

    hours: number;

    minutes: number;

    seconds: number;

}

function calculateCountdown(weddingDate: Date): CountdownTime {

    const now = new Date();

    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {

        return {

            days: 0,

            hours: 0,

            minutes: 0,

            seconds: 0

        };

    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(

        (totalSeconds % 86400) / 3600

    );

    const minutes = Math.floor(

        (totalSeconds % 3600) / 60

    );

    const seconds = totalSeconds % 60;

    return {

        days,

        hours,

        minutes,

        seconds

    };

}

export function HeroCountdown({

    weddingDate

}: HeroCountdownProps) {

    const [countdown, setCountdown] = useState<CountdownTime>(

        () => calculateCountdown(weddingDate)

    );

    useEffect(() => {

        const interval = setInterval(() => {

            setCountdown(calculateCountdown(weddingDate));

        }, 1000);

        return () => {

            clearInterval(interval);

        };

    }, [weddingDate]);

    return (

        <div className={heroCountdownStyles.grid}>

            <div className={heroCountdownStyles.item}>

                <strong className={heroCountdownStyles.value}>
                    {countdown.days}
                </strong>

                <span className={heroCountdownStyles.label}>
                    Dias
                </span>

            </div>

            <div className={heroCountdownStyles.item}>

                <strong className={heroCountdownStyles.value}>
                    {countdown.hours.toString().padStart(2, "0")}
                </strong>

                <span className={heroCountdownStyles.label}>
                    Horas
                </span>

            </div>

            <div className={heroCountdownStyles.item}>

                <strong className={heroCountdownStyles.value}>
                    {countdown.minutes.toString().padStart(2, "0")}
                </strong>

                <span className={heroCountdownStyles.label}>
                    Minutos
                </span>

            </div>
           
            <div className={heroCountdownStyles.item}>

                <strong className={heroCountdownStyles.value}>
                     {countdown.seconds.toString().padStart(2, "0")}
                </strong>

                <span className={heroCountdownStyles.label}>
                   Segundos
                </span>

            </div>
            

        </div>

    );

}