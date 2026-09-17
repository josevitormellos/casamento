import type { ReactNode } from "react";
import { mobileOnlyStyles } from "./MobileOnly.styles";

interface MobileOnlyProps {
    children: ReactNode;
}

export function MobileOnly({ children }: MobileOnlyProps) {
    return (
        <>
            <div className={mobileOnlyStyles.desktopWarning}>
                <div className={mobileOnlyStyles.warningContent}>
                    <span className={mobileOnlyStyles.icon}>
                        📱
                    </span>

                    <h1>
                        Este site foi feito para celular
                    </h1>

                    <p>
                        Para uma melhor experiência,
                        acesse pelo seu smartphone.
                    </p>
                </div>
            </div>

            <div className={mobileOnlyStyles.mobileContent}>
                {children}
            </div>
        </>
    );
}