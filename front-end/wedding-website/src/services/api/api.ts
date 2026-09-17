const API_URL = import.meta.env.VITE_API_URL;

export async function post<T>(
    endpoint: string,
    data: unknown
): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Não foi possível realizar a operação.");
    }

    return response.json();
}