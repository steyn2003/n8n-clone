import { inngest } from "./client";
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI();

export const executeAi = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute.ai" },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini-2.5-flash"),
      system: "you are a helpful assistant",
      prompt: "what is the capital of France?",
    });

    return steps;
  },
);
