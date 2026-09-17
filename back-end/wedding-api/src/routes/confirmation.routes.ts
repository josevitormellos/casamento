import { Router } from "express";
import { createConfirmation } from "../controllers/confirmation.controller.js";

const confirmationRouter = Router();

confirmationRouter.post("/", createConfirmation);

export default confirmationRouter;