import { useState } from "react";
import { loginAdmin } from "../../../services/admin/admin";
import { adminLoginStyles } from "./AdminLogin.styles.ts";

interface AdminLoginProps {
    onLogin: (token: string) => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setError("");
        setIsLoading(true);

        try {
            const result = await loginAdmin(email, password);

            sessionStorage.setItem(
                "adminToken",
                result.token
            );

            onLogin(result.token);
        } catch {
            setError("E-mail ou senha inválidos.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className={adminLoginStyles.container}>
            <form
                className={adminLoginStyles.card}
                onSubmit={handleSubmit}
            >
                <h1 className={adminLoginStyles.title}>
                    Área administrativa
                </h1>

                <p className={adminLoginStyles.subtitle}>
                    Confirmações de presença
                </p>

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    className={adminLoginStyles.input}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    className={adminLoginStyles.input}
                    required
                />

                {error && (
                    <p className={adminLoginStyles.error}>
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={adminLoginStyles.button}
                >
                    {isLoading
                        ? "ENTRANDO..."
                        : "ENTRAR"}
                </button>
            </form>
        </main>
    );
}