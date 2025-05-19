import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { authClient } from "~/lib/auth-client";
import { getInitials } from "~/lib/utils";
import { User as TSessionUser } from "better-auth";
import { HeadsetIcon, LayoutDashboardIcon, LogOutIcon } from "lucide-react";
import { toast } from "sonner";

const UserDropdown = ({ user }: { user: TSessionUser }) => {
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed Out Successfully");
        },
        onError: (error) => {
          console.error("Error signing out:", error);
          toast.error("Error signing out. Please try again.");
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative size-9 rounded-full bg-indigo-600 focus:outline-none">
        <img
          src={
            user.image ||
            `https://avatar.vercel.sh/${encodeURIComponent(
              user.name,
            )}.svg?text=${getInitials(user.name)}&size=36&rounded=9999`
          }
          className="rounded-full object-cover"
          alt={`Avatar for ${user.name}`}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[12rem]" align="end">
        <DropdownMenuRadioGroup>
          <DropdownMenuItem asChild>
            <Link to="/account/settings">
              <LayoutDashboardIcon />
              Account
            </Link>
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HeadsetIcon />
            Contact Support
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleSignOut}>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
