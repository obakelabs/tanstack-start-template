import { Link, useRouteContext } from "@tanstack/react-router";
import { IndigoLogo, WhiteLogo } from "~/components/logo/obakelabs-logo";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

import UserDropdown from "./user-dropdown";

const Header = ({ className }: { className?: string }) => {
  const { user } = useRouteContext({ from: "__root__" });

  return (
    <header className="bg-background sticky top-0 z-30 border-b">
      <div
        className={cn(
          "page-container flex h-14 items-center justify-between",
          className,
        )}
      >
        <div className="flex items-center space-x-4">
          <div>
            <Link to="/">
              <div
                className="block dark:hidden"
                aria-label="Obake Labs Indigo Logo"
              >
                <IndigoLogo className="h-8 w-auto" />
              </div>
              <div
                className="hidden dark:block"
                aria-label="Obake Labs White Logo"
              >
                <WhiteLogo className="h-8 w-auto" />
              </div>
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

        <div className={cn("flex transition-all ease-in-out")}>
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <Link
              to="/sign-in"
              className={cn(buttonVariants(), "rounded-full")}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
