import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: ProtectedLayout,
  beforeLoad: async ({ context }) => {
    if (!context.user) {
      throw redirect({ to: "/sign-in" });
    }

    return { user: context.user };
  },
});

function ProtectedLayout() {
  return <Outlet />;
}
