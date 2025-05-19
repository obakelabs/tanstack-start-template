import { Link } from "@tanstack/react-router";
import IndigoLogo from "~/components/logo/indigo-logo";
import { cn } from "~/lib/utils";

const Footer = () => {
  return (
    <footer className="mt-auto border-t">
      <div
        className={cn(
          "page-container flex h-14 items-center justify-between bg-white",
        )}
      >
        <div>
          <Link to="/">
            <IndigoLogo />
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
