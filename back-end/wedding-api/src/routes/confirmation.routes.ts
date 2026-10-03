import { Router } from "express";
import {
    createConfirmation,
    getConfirmations,
} from "../controllers/confirmation.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const confirmationRouter = Router();

confirmationRouter.post("/", createConfirmation);

confirmationRouter.get(
    "/",
    authMiddleware,
    getConfirmations
);

export default confirmationRouter;