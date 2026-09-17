import { useState } from "react";
import { confirmationStyles } from "./Confirmation.styles";
import { post } from "../../../services/api/api";
import { ConfirmationSuccess } from "./ConfirmationSuccess";

export function ConfirmationForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [hasDietaryRestriction, setHasDietaryRestriction] =
        useState<boolean | null>(null);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [dietaryRestriction, setDietaryRestriction] = useState("");
    const [shoeSize, setShoeSize] = useState("");
    const [message, setMessage] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleCloseSuccess() {
    setIsConfirmed(false);

    setName("");
    setPhone("");
    setEmail("");
    setHasDietaryRestriction(null);
    setDietaryRestriction("");
    setShoeSize("");
    setMessage("");
}

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSubmitting(true);

        try {
            const confirmation = {
                name,
                phone,
                email,
                hasDietaryRestriction:
                    hasDietaryRestriction ?? false,
                dietaryRestriction:
                    hasDietaryRestriction === true
                        ? dietaryRestriction
                        : undefined,
                shoeSize: shoeSize || undefined,
                message: message || undefined,
            };

            await post("/api/confirmacoes", confirmation);

            setIsConfirmed(true);

        } catch (error) {
            console.error("Erro ao enviar confirmação:", error);

            alert(
                "Não foi possível confirmar sua presença. Tente novamente."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form
            className={confirmationStyles.form}
            onSubmit={handleSubmit}
        >

            {/* Nome */}
            <div className={confirmationStyles.inputWrapper}>
                <div className={confirmationStyles.inputIcon}>
                    ♙
                </div>

                <input
                    type="text"
                    placeholder="Nome completo *"
                    className={confirmationStyles.input}
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    required
                />
            </div>

            {/* Telefone */}
            <div className={confirmationStyles.inputWrapper}>
                <div className={confirmationStyles.inputIcon}>
                    ◔
                </div>

                <input
                    type="text"
                    placeholder="Telefone (com DDD) *"
                    className={confirmationStyles.input}
                    value={phone}
                    onChange={(event) =>
                        setPhone(event.target.value)
                    }
                    required
                />
            </div>

            {/* E-mail */}
            <div className={confirmationStyles.inputWrapper}>
                <div className={confirmationStyles.inputIcon}>
                    ✉
                </div>

                <input
                    type="email"
                    placeholder="E-mail *"
                    className={confirmationStyles.input}
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    required
                />
            </div>

            {/* Restrição alimentar */}
            <div className={confirmationStyles.questionRow}>
                <div className={confirmationStyles.questionIcon}>
                    ♜
                </div>

                <div className={confirmationStyles.questionContent}>
                    <div className={confirmationStyles.question}>
                        Possui alguma restrição alimentar? *
                    </div>

                    <div className={confirmationStyles.options}>

                        <label className={confirmationStyles.option}>
                            <input
                                type="radio"
                                name="dietaryRestriction"
                                value="yes"
                                checked={
                                    hasDietaryRestriction === true
                                }
                                onChange={() =>
                                    setHasDietaryRestriction(true)
                                }
                                className={confirmationStyles.radio}
                            />
                            Sim
                        </label>

                        <label className={confirmationStyles.option}>
                            <input
                                type="radio"
                                name="dietaryRestriction"
                                value="no"
                                checked={
                                    hasDietaryRestriction === false
                                }
                                onChange={() =>
                                    setHasDietaryRestriction(false)
                                }
                                className={confirmationStyles.radio}
                            />
                            Não
                        </label>

                    </div>

                    {hasDietaryRestriction === true && (
                        <input
                            type="text"
                            placeholder="Se sim, qual?"
                            className={confirmationStyles.input}
                            value={dietaryRestriction}
                            onChange={(event) =>
                                setDietaryRestriction(
                                    event.target.value
                                )
                            }
                            required
                        />
                    )}
                </div>
            </div>

            {/* Número do calçado */}
            <div className={confirmationStyles.questionRow}>
                <div className={confirmationStyles.questionIcon}>
                    ♧
                </div>

                <div className={confirmationStyles.questionContent}>
                    <div className={confirmationStyles.question}>
                        Qual é o seu número de calçado?
                        {" "}
                        (somente para mulheres)
                    </div>

                    <input
                        type="text"
                        placeholder="Ex.: 34, 35, 36, 37, 38..."
                        className={confirmationStyles.input}
                        value={shoeSize}
                        onChange={(event) =>
                            setShoeSize(event.target.value)
                        }
                    />
                </div>
            </div>

            {/* Mensagem */}
            <div className={confirmationStyles.questionRow}>
                <div className={confirmationStyles.questionIcon}>
                    ◯
                </div>

                <div className={confirmationStyles.questionContent}>
                    <div className={confirmationStyles.question}>
                        Deixe uma mensagem para nós (opcional)
                    </div>

                    <div className={confirmationStyles.textareaWrapper}>
                        <textarea
                            placeholder="Será um prazer ler suas palavras! ♡"
                            className={confirmationStyles.textarea}
                            value={message}
                            onChange={(event) =>
                                setMessage(event.target.value)
                            }
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className={confirmationStyles.button}
                disabled={isSubmitting}
            >
                {isSubmitting
                    ? "ENVIANDO..."
                    : "ENVIAR CONFIRMAÇÃO"}

                <span className={confirmationStyles.buttonHeart}>
                    ♥
                </span>
            </button>

            <div className={confirmationStyles.security}>
                <span>🔒</span>
                <span>
                    Seus dados estão seguros conosco.
                </span>
            </div>
            {isConfirmed && (
                <ConfirmationSuccess
                    onClose={handleCloseSuccess}
                />
            )}
                    
        </form>
        
    );
}