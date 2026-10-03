import type { Request, Response } from "express";
import { ConfirmationService } from "../services/confirmation.service.js";

const confirmationService = new ConfirmationService();

export async function createConfirmation(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const confirmation = await confirmationService.create(req.body);

        res.status(201).json(confirmation);
    } catch (error) {
        console.error("Erro ao criar confirmação:", error);

        res.status(500).json({
            message: "Não foi possível registrar a confirmação.",
        });
    }
    
}
export async function getConfirmations(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const confirmations = await confirmationService.getAll();

        res.json({
            total: confirmations.length,
            confirmations,
        });
    } catch (error) {
        console.error("Erro ao buscar confirmações:", error);

        res.status(500).json({
            message: "Não foi possível buscar as confirmações.",
        });
    }
}