import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import NavRoutes from "./Navroutes";
import DropdownNav from "./DropdowNav";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="p-3 mt-4 mb-4 flex items-center justify-between xl:container border-b">
      <div className="flex items-center gap-3">
        <Image
          className="w-9 h-9"
          src="/superhero.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h1 className="font-bold text-xl md:text-2xl">SideKick</h1>
      </div>

      {user ? (
        <div className="hidden md:flex">
          <NavRoutes />
        </div>
      ) : (
        <></>
      )}

      <div className="flex items-center gap-2">
        {user ? (
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link">
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
            <div className="flex md:hidden">
              <DropdownNav />
            </div>
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
