import { createFileRoute, redirect } from "@tanstack/react-router";
import { getHeaders } from "@tanstack/react-start/server";
import Header from "~/components/header";
import { authClient } from "~/lib/auth-client";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  beforeLoad: async () => {
    try {
      const session = await authClient.getSession({
        fetchOptions: {
          headers: getHeaders() as HeadersInit,
        },
      });

      return { session: session.data };
    } catch (error) {
      console.error("Error fetching session in beforeLoad:", error);
      // Return null session instead of failing the navigation
      return { session: null };
    }
  },
  loader: async ({ context }) => {
    if (!context?.session?.user) {
      throw redirect({ to: "/sign-in" });
    }

    return { user: context.session.user };
  },
});

function DashboardPage() {
  const { user } = Route.useLoaderData();

  return (
    <>
      <Header />

      <main className="page-container">
        <h1>{user.name || user.email}</h1>
      </main>
    </>
  );
}
