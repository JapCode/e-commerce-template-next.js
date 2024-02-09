/* eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import { User } from "@/payload-types";

import useAuth from "@/hooks/use-auth";
import Link from "next/link";
import { Button } from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          My account
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-60 bg-white p-2" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="text-sm font-medium text-black">{user.email}</p>
          </div>
        </div>

        <DropdownMenuItem>
          <Link href="sell"> Seller Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
