import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="page-container">
        <h3>Welcome Home!!!</h3>
      </section>
    </>
  );
}
