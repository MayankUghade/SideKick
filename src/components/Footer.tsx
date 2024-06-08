import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { MountainIcon } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="#" prefetch={false}>
            <MountainIcon className="h-8 w-8 dark:text-white text-gray-400" />
            <span className="sr-only">Sidekick</span>
          </Link>
          <p className="text-md text-gray-400">
            SideKick- created by @mayank_ughade
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
            prefetch={false}
          >
            <TwitterLogoIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
            prefetch={false}
          >
            <GitHubLogoIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
