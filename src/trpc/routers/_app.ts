import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export const appRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(({ ctx }) => {
    inngest.send({
      name: "execute.ai",
    });
    return { success: true, message: "AI test successful" };
  }),

  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(({ ctx }) => {
    inngest.send({
      name: "test/hello.world",
      data: {
        email: "test-workflow",
      },
    });

    return prisma.workflow.create({
      data: {
        name: "test-workflow",
      },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
