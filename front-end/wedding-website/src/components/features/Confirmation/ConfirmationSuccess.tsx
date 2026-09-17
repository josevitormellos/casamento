import { Typography } from "../../ui/Typography/Typography";
import { confirmationStyles } from "./Confirmation.styles";

interface ConfirmationSuccessProps {
    onClose: () => void;
}

export function ConfirmationSuccess({
    onClose,
}: ConfirmationSuccessProps) {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(51,51,51,0.45)] px-6">

            <div className="relative w-full max-w-[340px] rounded-xl border border-[#C8AF88] bg-[#FBF8F2] px-6 py-8 text-center shadow-[0_10px_40px_rgba(51,51,51,0.18)]">

                {/* Coração */}
                <div className="text-[2rem] leading-none text-[#C89A36]">
                    ♥
                </div>

                {/* Título */}
                <Typography
                    as="h2"
                    className={confirmationStyles.successTitle}
                >
                    Presença confirmada!
                </Typography>

                {/* Mensagem */}
                <Typography
                    className={confirmationStyles.successMessage}
                >
                    Obrigado por confirmar sua presença.
                    <br />
                    Será muito especial ter você conosco
                    nesse dia tão importante.
                </Typography>

                {/* Botão */}
                <button
                    type="button"
                    onClick={onClose}
                    className={confirmationStyles.successButton}
                >
                    OK
                </button>

            </div>
        </div>
    );
}