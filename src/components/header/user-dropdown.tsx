"use client";

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
import { cn, getInitials } from "~/lib/utils";
import { User as TSessionUser } from "better-auth";
import {
  HeadsetIcon,
  LaptopIcon,
  LogOutIcon,
  MoonStarIcon,
  SunIcon,
  SunMoonIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { toast } from "sonner";

function ThemeMenuItem() {
  const [currentTheme, setCurrentTheme] = React.useState<
    "auto" | "light" | "dark"
  >(() => {
    if (!localStorage.theme) return "auto";
    return localStorage.theme as "light" | "dark";
  });

  function setAutoTheme(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem("theme");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setCurrentTheme("auto");
  }

  function setLightTheme(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setCurrentTheme("light");
  }

  function setDarkTheme(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setCurrentTheme("dark");
  }

  return (
    <div className="flex items-center gap-1 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.145)]">
      <button
        className={cn(
          "flex size-6 items-center justify-center rounded-full p-0.5",
          {
            "shadow-[0_0_0_1px_hsla(0,0%,92%,1),0_1px_2px_0_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_hsla(0,0%,18%,1),0_1px_2px_0_rgba(255,255,255,0.06)]":
              currentTheme === "auto",
          },
        )}
        onClick={setAutoTheme}
        title="System Preference"
        type="button"
      >
        <LaptopIcon className="size-4" />
      </button>
      <button
        className={cn(
          "flex size-6 items-center justify-center rounded-full p-0.5",
          {
            "shadow-[0_0_0_1px_hsla(0,0%,92%,1),0_1px_2px_0_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_hsla(0,0%,18%,1),0_1px_2px_0_rgba(255,255,255,0.06)]":
              currentTheme === "light",
          },
        )}
        onClick={setLightTheme}
        title="Light Mode"
        type="button"
      >
        <SunIcon className="size-4" />
      </button>
      <button
        className={cn(
          "flex size-6 items-center justify-center rounded-full p-0.5",
          {
            "shadow-[0_0_0_1px_hsla(0,0%,92%,1),0_1px_2px_0_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_hsla(0,0%,18%,1),0_1px_2px_0_rgba(255,255,255,0.06)]":
              currentTheme === "dark",
          },
        )}
        onClick={setDarkTheme}
        title="Dark Mode"
        type="button"
      >
        <MoonStarIcon className="size-4" />
      </button>
    </div>
  );
}

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
      <DropdownMenuTrigger className="bg-foreground relative size-9 rounded-full focus:outline-none">
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

      <DropdownMenuContent className="min-w-[13rem]" align="end">
        <DropdownMenuRadioGroup>
          <DropdownMenuItem asChild>
            <Link to="/account/settings">
              <UserIcon />
              Account
            </Link>
          </DropdownMenuItem>

          <div
            className={cn(
              // exactly the same styles as the DropdownMenuItem
              "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              "justify-between",
            )}
          >
            <div className="flex items-center gap-2">
              <SunMoonIcon />
              Theme
            </div>

            <ThemeMenuItem />
          </div>
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
