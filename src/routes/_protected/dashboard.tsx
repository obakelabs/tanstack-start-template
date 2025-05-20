import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <>
      <section className="page-container">
        <h1>Dashboard</h1>
      </section>
    </>
  );
}
