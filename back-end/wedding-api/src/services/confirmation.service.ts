import type { Confirmation } from "../models/confirmation.model.js";
import { pool } from "../database/connection.js";

export class ConfirmationService {
    async create(confirmation: Confirmation): Promise<Confirmation> {
        const query = `
            INSERT INTO confirmations (
                name,
                phone,
                email,
                has_dietary_restriction,
                dietary_restriction,
                shoe_size,
                message
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING
                id,
                name,
                phone,
                email,
                has_dietary_restriction,
                dietary_restriction,
                shoe_size,
                message,
                confirmed_at;
        `;

        const values = [
            confirmation.name,
            confirmation.phone,
            confirmation.email,
            confirmation.hasDietaryRestriction,
            confirmation.dietaryRestriction ?? null,
            confirmation.shoeSize ?? null,
            confirmation.message ?? null,
        ];

        const result = await pool.query(query, values);

        const row = result.rows[0];

        return {
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            hasDietaryRestriction: row.has_dietary_restriction,
            dietaryRestriction: row.dietary_restriction ?? undefined,
            shoeSize: row.shoe_size ?? undefined,
            message: row.message ?? undefined,
            confirmedAt: row.confirmed_at,
        };
    }
}