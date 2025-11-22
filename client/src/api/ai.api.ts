import { apiPost } from "./apiClient";

export const AIAPI = {
  summarize: (content: string) => apiPost("/ai/summarize", { content })
};
