import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="mt-5 p-3 flex items-center justify-between xl:container">
      <div className="flex items-center gap-3">
        <Image src="/superhero.png" alt="logo" width={40} height={40} />
        <h1 className="font-bold text-2xl md:text-3xl">SideKick</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button>SignUp</Button>
        <ModeToggle />
      </div>
    </div>
  );
}
