import { Link } from "@tanstack/react-router";
import { IndigoLogo, WhiteLogo } from "~/components/logo/obakelabs-logo";
import { cn } from "~/lib/utils";

const Footer = () => {
  return (
    <footer className="mt-auto border-t">
      <div
        className={cn(
          "page-container bg-background flex h-14 items-center justify-between",
        )}
      >
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
        <div className="flex items-center gap-4">
          <Link
            to="/privacy"
            className="text-sm transition-all hover:underline"
          >
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm transition-all hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
