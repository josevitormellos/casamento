import { post } from "../api/api";

interface AdminLoginResponse {
    token: string;
}

export async function loginAdmin(
    email: string,
    password: string
): Promise<AdminLoginResponse> {
    return post<AdminLoginResponse>("/api/admin/login", {
        email,
        password,
    });
}
const API_URL = import.meta.env.VITE_API_URL;

export interface Confirmation {
    id: number;
    name: string;
    phone: string;
    email: string;
    hasDietaryRestriction: boolean;
    dietaryRestriction?: string;
    shoeSize?: string;
    message?: string;
    confirmedAt: string;
}

export interface ConfirmationsResponse {
    total: number;
    confirmations: Confirmation[];
}

export async function getConfirmations(
    token: string
): Promise<ConfirmationsResponse> {
    const response = await fetch(`${API_URL}/api/confirmacoes`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error(
            "Não foi possível carregar as confirmações."
        );
    }

    return response.json();
}