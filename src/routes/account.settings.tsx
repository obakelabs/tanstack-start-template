import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="page-container">
        <h1>Hello "/account/settings"!</h1>
      </section>
    </>
  );
}
