"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
exports.AIService = {
    summarize: async (content) => {
        const result = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Summarize the user's note in 1–2 sentences."
                },
                { role: "user", content },
            ],
        });
        return result.choices[0].message.content;
    },
};
