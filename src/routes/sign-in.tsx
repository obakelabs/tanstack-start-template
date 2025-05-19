import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { GoogleIcon } from "~/components/icons";
import ObakeIndigoIcon from "~/components/logo/obake-indigo-icon";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { authClient } from "~/lib/auth-client";
import { getSession } from "~/utils/session";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/sign-in")({
  component: SignInPage,
  beforeLoad: async () => {
    const session = await getSession();

    if (session?.user) {
      throw redirect({ to: "/dashboard" });
    }

    return { user: session?.user };
  },
});

const signInFormSchema = z.object({
  email: z.string().email(),
});

function SignInPage() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onChange: signInFormSchema,
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.magicLink({
        email: value.email,
        callbackURL: "/",
        fetchOptions: {
          onSuccess() {
            toast.success("Email sent, Please check your inbox!");
          },
          onError: (error) => {
            console.error("Error signing in:", error);
            toast.error("Error signing in. Please try again.");
          },
        },
      });
    },
  });

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <>
      <section className="page-container flex min-h-[calc(100dvh-(3.5rem+1px))] justify-center">
        <div className="mx-auto flex max-w-md flex-col justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              to="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <ObakeIndigoIcon />
              <span className="sr-only">Obake Labs Template</span>
            </Link>

            <h1 className="text-2xl font-semibold">
              Sign in to Obake Labs Template
            </h1>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-col gap-4"
          >
            <form.Field
              name="email"
              children={(field) => (
                <div className="grid gap-1">
                  <Label htmlFor={field.name}>Email</Label>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    placeholder="Email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={!!form.state.errors[0]?.email}
                  />
                  {field.state.meta.errorMap["onChange"] && (
                    <p className="text-destructive text-sm">
                      {field.state.meta.errorMap["onChange"]?.[0].message}
                    </p>
                  )}
                </div>
              )}
            />

            <div>
              <form.Subscribe
                selector={() => form.state.isSubmitting}
                children={(isSubmitting) => (
                  <Button
                    className="w-full"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>
                )}
              />
            </div>
          </form>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>

          <div>
            <Button
              onClick={signInWithGoogle}
              className="w-full"
              variant="outline"
            >
              <GoogleIcon />
              Continue with Google
            </Button>
          </div>

          <div className="text-muted-foreground text-center text-xs">
            By clicking continue, you agree to our{" "}
            <Link
              to="/terms"
              className="text-primary font-medium transition-all hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-primary font-medium transition-all hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </section>
    </>
  );
}
