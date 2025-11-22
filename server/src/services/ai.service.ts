import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: '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',
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
