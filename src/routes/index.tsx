import { createFileRoute } from "@tanstack/react-router";
import Header from "~/components/header";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="p-2">
      <h3>Welcome Home!!!</h3>
    </main>
  );
}
