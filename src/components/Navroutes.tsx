import { Button } from "./ui/button";

export default function NavRoutes() {
  return (
    <div className="flex gap-3 items-center">
      <Button variant="ghost" className="text-md">
        Profile
      </Button>
      <Button variant="ghost" className="text-md">
        Explore
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
