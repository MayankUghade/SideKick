import { Button } from "./ui/button";

export default function NavRoutes() {
  return (
    <div className="flex gap-3 items-center">
      <Button variant="ghost" className="text-lg">
        Profile
      </Button>
      <Button variant="ghost" className="text-lg">
        Explore
      </Button>
      <Button variant="ghost" className="text-lg">
        Notification
      </Button>
      <Button variant="ghost" className="text-lg">
        Message
      </Button>
      <Button variant="ghost" className="text-lg">
        Following
      </Button>
    </div>
  );
}
