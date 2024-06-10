import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMenuSharp } from "react-icons/io5";

export default function DropdownNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-1">
          <IoMenuSharp className="w-7 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[200px] p-4 gap-3"
        align="end"
        forceMount
      >
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Explore</DropdownMenuItem>
        <DropdownMenuItem>Notification</DropdownMenuItem>
        <DropdownMenuItem>Message</DropdownMenuItem>
        <DropdownMenuItem>following</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
