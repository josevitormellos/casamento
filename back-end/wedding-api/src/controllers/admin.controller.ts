import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function loginAdmin(
    req: Request,
    res: Response
): Promise<void> {
    const { email, password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const jwtSecret = process.env.JWT_SECRET;

    if (!adminEmail || !adminPassword || !jwtSecret) {
        console.error("Variáveis de ambiente do administrador não configuradas.");

        res.status(500).json({
            message: "Autenticação administrativa não configurada.",
        });

        return;
    }

    if (email !== adminEmail || password !== adminPassword) {
        res.status(401).json({
            message: "E-mail ou senha inválidos.",
        });

        return;
    }

    const token = jwt.sign(
        {
            role: "admin",
            email: adminEmail,
        },
        jwtSecret,
        {
            expiresIn: "8h",
        }
    );

    res.json({
        token,
    });
}