import { requireAuth } from "@/lib/auth-utils";
import { AppHeader } from "@/components/app-header";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  await requireAuth();

  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
};

export default Layout;
