"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeNote = void 0;
const ai_service_1 = require("../services/ai.service");
const summarizeNote = async (req, res) => {
    const { content } = req.body;
    const summary = await ai_service_1.AIService.summarize(content);
    res.json({ summary });
};
exports.summarizeNote = summarizeNote;
