
import {Client} from "@/app/client";
import {getQueryClient, trpc} from "@/trpc/server";
import {HydrationBoundary} from "@tanstack/react-query";
import {dehydrate} from "@tanstack/query-core";
import {Suspense} from "react";

const page = async () => {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.getUsers.queryOptions())


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <HydrationBoundary state={dehydrate(queryClient)}>
              <Suspense fallback={<p>Loading...</p>}>
                  <Client/>
              </Suspense>

          </HydrationBoundary>

      </main>
    </div>
  );
}

export default page;
