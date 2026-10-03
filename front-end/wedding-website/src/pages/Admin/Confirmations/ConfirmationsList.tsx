import { useEffect, useState } from "react";
import {
    getConfirmations,
    type Confirmation,
} from "../../../services/admin/admin";
import { confirmationsListStyles } from "./ConfirmationsList.styles";

interface ConfirmationsProps {
    token: string;
}

export function Confirmations({
    token,
}: ConfirmationsProps) {
    const [confirmations, setConfirmations] =
        useState<Confirmation[]>([]);

    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadConfirmations() {
            try {
                const result = await getConfirmations(token);

                setConfirmations(result.confirmations);
                setTotal(result.total);
            } catch {
                setError(
                    "Não foi possível carregar as confirmações."
                );
            } finally {
                setIsLoading(false);
            }
        }

        loadConfirmations();
    }, [token]);

    if (isLoading) {
        return (
            <main className={confirmationsListStyles.container}>
                <p>Carregando confirmações...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className={confirmationsListStyles.container}>
                <p className={confirmationsListStyles.error}>
                    {error}
                </p>
            </main>
        );
    }

    return (
        <main className={confirmationsListStyles.container}>
            <div className={confirmationsListStyles.header}>
                <h1 className={confirmationsListStyles.title}>
                    Confirmações de presença
                </h1>

                <p className={confirmationsListStyles.total}>
                    Total de cadastros:{" "}
                    <strong>{total}</strong>
                </p>
            </div>

            <div className={confirmationsListStyles.tableWrapper}>
                <table
                    className={confirmationsListStyles.table}
                >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                            <th>Restrição</th>
                            <th>Calçado</th>
                            <th>Mensagem</th>
                            <th>Data</th>
                        </tr>
                    </thead>

                    <tbody>
                        {confirmations.map(
                            (confirmation) => (
                                <tr key={confirmation.id}>
                                    <td>
                                        {confirmation.name}
                                    </td>

                                    <td>
                                        {confirmation.phone}
                                    </td>

                                    <td>
                                        {confirmation.email}
                                    </td>

                                    <td>
                                        {confirmation.hasDietaryRestriction
                                            ? confirmation.dietaryRestriction ||
                                              "Sim"
                                            : "Não"}
                                    </td>

                                    <td>
                                        {confirmation.shoeSize ||
                                            "—"}
                                    </td>

                                    <td>
                                        {confirmation.message ||
                                            "—"}
                                    </td>

                                    <td>
                                        {new Date(
                                            confirmation.confirmedAt
                                        ).toLocaleDateString(
                                            "pt-BR"
                                        )}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}