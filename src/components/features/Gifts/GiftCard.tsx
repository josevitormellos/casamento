import { Typography } from "../../ui/Typography/Typography";

import type { GiftCardProps } from "./GiftCard.types";

import { giftCardStyles } from "./GiftCard.styles";

export function GiftCard({
    gift,
    ...props
}: GiftCardProps) {

    return (
        <article
            className={giftCardStyles.container}
            {...props}
        >

            <div className={giftCardStyles.imageWrapper}>

                <img
                    src={gift.image}
                    alt={gift.title}
                    className={giftCardStyles.image}
                />

                <span className={giftCardStyles.number}>
                    {gift.id}
                </span>

            </div>

            <Typography
                className={giftCardStyles.title}
            >
                {gift.title}
            </Typography>

            <Typography
                color="secondary"
                className={giftCardStyles.description}
            >
                {gift.description}
            </Typography>

            <div className={giftCardStyles.bottom}>
                <Typography
                    className={giftCardStyles.price}
                >
                    R$ {gift.price.toFixed(0)}
                </Typography>

                <button
                    type="button"
                    className={giftCardStyles.button}
                >
                    ESCOLHER PAGAMENTO

                    <span className={giftCardStyles.buttonHeart}>
                        ♡
                    </span>
                </button>
            </div>

        </article>
    );
}