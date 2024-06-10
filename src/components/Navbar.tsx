import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="mt-5 p-3 flex items-center justify-between xl:container">
      <div className="flex items-center gap-3">
        <Image
          className="sm:flex hidden"
          src="/superhero.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h1 className="font-bold text-2xl md:text-3xl">SideKick</h1>
      </div>
      <div className="flex items-center gap-2">
        {user ? (
          <div className="flex gap-3 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="py-7">
                  <Avatar>
                    <AvatarImage
                      src={
                        user.picture ??
                        `https://avatar.vercel.sh/${user.given_name as string}`
                      }
                      alt="@shadcn"
                    />
                    <AvatarFallback>SK</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[240px] p-2"
                align="end"
                forceMount
              >
                <h1>{user.given_name as string}</h1>
                <h2 className="text-sm text-gray-500 mb-2">
                  {user.email as string}
                </h2>
                <DropdownMenuSeparator />
                <Button type="submit" variant="link">
                  <LogoutLink>Logout</LogoutLink>
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <>
            <Button asChild className="bg-blue-600 text-white">
              <LoginLink>Login</LoginLink>
            </Button>
            <Button asChild>
              <RegisterLink>Register</RegisterLink>
            </Button>
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
}
