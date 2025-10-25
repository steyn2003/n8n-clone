"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

const page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(trpc.testAI.mutationOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
    }),
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        protected server component <br />
        {JSON.stringify(data)}
        <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
          Test AI
        </Button>
        <Button disabled={create.isPending} onClick={() => create.mutate()}>
          Create Workflow
        </Button>
      </main>
    </div>
  );
};

export default page;
