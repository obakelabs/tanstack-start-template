import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getSession } from "~/utils/session";

export const Route = createFileRoute("/_protected")({
  component: ProtectedLayout,
  beforeLoad: async () => {
    const session = await getSession();

    if (!session?.user) {
      throw redirect({ to: "/sign-in" });
    }

    return { user: session?.user };
  },
});

function ProtectedLayout() {
  return <Outlet />;
}
