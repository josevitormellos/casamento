import { weddingActionsStyles } from "./WeddingActions.styles";

export function WeddingActions() {
    return (
        <section className={weddingActionsStyles.container}>
            <a
                href="#confirmacao"
                className={weddingActionsStyles.button}
            >
                <span className={weddingActionsStyles.icon}>♥</span>
                CONFIRMAR PRESENÇA
            </a>

            <a
                href="#presentes"
                className={weddingActionsStyles.button}
            >
                <span className={weddingActionsStyles.icon}>♡</span>
                LISTA DE PRESENTES
            </a>
        </section>
    );
}