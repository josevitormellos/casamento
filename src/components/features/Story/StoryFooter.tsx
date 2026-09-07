import StoryDivider from "../../../assets/linha.png";

import { storyFooterStyles } from "./StoryFooter.styles";

export function StoryFooter() {

    return (

        <div className={storyFooterStyles.container}>

            <div className={storyFooterStyles.content}>

                <img
                    src={StoryDivider}
                    alt=""
                    className={storyFooterStyles.divider}
                />

                <h3 className={storyFooterStyles.title}>
                    E o melhor ainda está por vir...
                </h3>

                <div className={storyFooterStyles.heart}>
                    ♥
                </div>

                <div className={storyFooterStyles.date}>
                    17 <span>•</span> 10 <span>•</span> 2026
                </div>

                <p className={storyFooterStyles.subtitle}>
                    SOB A MESMA LUA, COMEÇAMOS NOSSA FAMÍLIA.
                </p>

            </div>

        </div>

    );

}