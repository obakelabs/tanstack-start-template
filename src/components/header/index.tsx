import { Link } from "@tanstack/react-router";
import IndigoLogo from "~/components/logo/indigo-logo";
import { buttonVariants } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";
import { cn } from "~/lib/utils";

import UserDropdown from "./user-dropdown";

const Header = ({ className }: { className?: string }) => {
  const session = authClient.useSession();

  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div
        className={cn(
          "page-container flex h-14 items-center justify-between",
          className,
        )}
      >
        <div className="flex items-center space-x-4">
          <div>
            <Link to="/">
              <IndigoLogo />
            </Link>
          </div>

          <ul className="flex items-center">
            <li>
              <Link
                to="/"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "rounded-full",
                )}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "rounded-full",
                )}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "rounded-full",
                )}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "rounded-full",
                )}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <nav className="flex items-center space-x-4">
          <div
            className={cn(
              "transition-all ease-in-out",
              session.isPending ? "opacity-0" : "opacity-100",
            )}
          >
            {session?.data?.user ? (
              <UserDropdown user={session.data.user} />
            ) : (
              !session.isPending && (
                <Link
                  to="/sign-in"
                  className={cn(buttonVariants(), "rounded-full")}
                >
                  Sign In
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
