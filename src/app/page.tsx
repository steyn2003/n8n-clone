import {requireAuth} from "@/lib/auth-utils";
import {caller} from "@/trpc/server";

const page = async () => {
    await requireAuth();

    const data = await caller.getWorkflows();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          protected server component <br/>

          {JSON.stringify(data)}
      </main>
    </div>
  );
}

export default page;
