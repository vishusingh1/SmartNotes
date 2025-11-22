import { Router } from "express";
import { summarizeNote } from "../controllers/ai.controller";

const router = Router();

router.post("/summarize", summarizeNote);

export default router;
