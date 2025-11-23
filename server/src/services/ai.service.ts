import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const AIService = {
  summarize: async (content: string) => {
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
