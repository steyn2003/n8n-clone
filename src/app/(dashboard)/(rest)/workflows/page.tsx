import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();

  return (
    <div>
      <h1>Workflows</h1>
      <p>This is the workflows page.</p>
    </div>
  );
};

export default Page;
