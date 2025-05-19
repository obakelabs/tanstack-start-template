import { createFileRoute } from "@tanstack/react-router";
import Header from "~/components/header";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />

      <main className="page-container">
        <h3>Welcome Home!!!</h3>
      </main>
    </>
  );
}
