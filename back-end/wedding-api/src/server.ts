import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";
import confirmationRouter from "./routes/confirmation.routes.js";
import { pool } from "./database/connection.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors({
    origin: ["http://localhost:5173",
        "https://casamento-ebon.vercel.app"
    ],
}));

app.use(express.json());

app.use("/api", healthRouter);
app.use("/api/confirmacoes", confirmationRouter);

pool.query("SELECT NOW()")
    .then(() => {
        console.log("Conexão com PostgreSQL estabelecida!");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao PostgreSQL:", error);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Wedding API rodando na porta ${PORT}`);
});