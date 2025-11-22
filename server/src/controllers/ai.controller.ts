import { Request, Response } from "express";
import { AIService } from "../services/ai.service";

export const summarizeNote = async (req: Request, res: Response) => {
  const { content } = req.body;
  const summary = await AIService.summarize(content);
  res.json({ summary });
};
