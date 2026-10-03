import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const authorization = req.headers.authorization;

    if (!authorization) {
        res.status(401).json({
            message: "Token de autenticação não informado.",
        });

        return;
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer" || !token) {
        res.status(401).json({
            message: "Token de autenticação inválido.",
        });

        return;
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        res.status(500).json({
            message: "Autenticação não configurada.",
        });

        return;
    }

    try {
        jwt.verify(token, jwtSecret);

        next();
    } catch {
        res.status(401).json({
            message: "Token de autenticação inválido ou expirado.",
        });
    }
}