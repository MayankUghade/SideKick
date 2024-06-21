import Link from "next/link";
import { Button } from "./ui/button";

export default function NavRoutes() {
  return (
    <div className="flex gap-3 items-center">
      <Button variant="ghost" className="text-md">
        <Link href="/profile">Profile</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/bookmarks">Bookmarks</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        Notification
      </Button>
      <Button variant="ghost" className="text-md">
        Message
      </Button>
      <Button variant="ghost" className="text-md">
        Following
      </Button>
    </div>
  );
}
