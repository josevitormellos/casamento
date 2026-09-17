import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "Wedding API está funcionando!",
    });
});

export default healthRouter;