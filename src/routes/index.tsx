import { createFileRoute } from "@tanstack/react-router";
import { Terminal } from "~/components/terminal";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="page-container">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-extrabold md:text-6xl lg:text-7xl">
              Start your next project
              <br />
              with TanStack
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg md:text-2xl">
              A powerful collection of libraries for building robust and
              high-performance applications with React.
            </p>
          </div>

          <Terminal />
        </div>
      </section>
    </>
  );
}
