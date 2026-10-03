import { useState } from "react";
import { AdminLogin } from "./AdminLogin/AdminLogin";
import { Confirmations } from "./Confirmations/ConfirmationsList";

export function Admin() {
    const [token, setToken] = useState<string | null>(
        sessionStorage.getItem("adminToken")
    );

    function handleLogin(newToken: string) {
        setToken(newToken);
    }

    function handleLogout() {
        sessionStorage.removeItem("adminToken");
        setToken(null);
    }

    if (!token) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={handleLogout}
                className="fixed right-6 top-6 z-50 rounded-lg border border-[#C8AF88] bg-[#FBF8F2] px-4 py-2 font-body text-[0.65rem] uppercase tracking-[0.1em] text-[#59613B]"
            >
                Sair
            </button>

            <Confirmations token={token} />
        </div>
    );
}