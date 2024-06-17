import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, MessageCircleIcon, ShareIcon } from "lucide-react";
import { FaStar } from "react-icons/fa";
export default function PostCard() {
  return (
    <Card className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-40 md:h-52">
        <img
          src="/Project.png"
          alt="Cover image"
          className="object-cover w-full h-full"
          width={416}
          height={208}
        />
      </div>
      <CardContent className="p-4 md:p-6">
        <div className=" flex sm:items-center justify-between sm:flex-row flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Avatar className="w-12 h-12 ring-4 ring-white dark:ring-gray-950">
              {/* <img src="/placeholder.svg" alt="@shadcn" /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-md font-semibold">Mayank Ughade</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ShareIcon className="w-5 h-5" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="ghost" size="icon">
              <BookmarkIcon className="w-5 h-5" />
              <span className="sr-only">Bookmark</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircleIcon className="w-5 h-5" />
              <span className="sr-only">Comment</span>
            </Button>
          </div>
        </div>
        <Separator className="my-4" />
        <h1 className="font-bold mb-2">Project title</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is a side project I've been working on in my free time. It's a
          hobby project that I'm passionate about and have been putting a lot of
          effort into..
        </p>
        <div className="py-2 flex gap-2 flex-wrap">
          <p className="text-sm px-2 py-1 rounded-md w-fit bg-gray-500 ">
            Next-js
          </p>
          <p className="text-sm px-2 py-1 rounded-md w-fit bg-gray-500 ">
            Tailwind-Css
          </p>
          <p className="text-sm px-2 py-1 rounded-md w-fit bg-gray-500 ">
            Prisma
          </p>
          <p className="text-sm px-2 py-1 rounded-md w-fit bg-gray-500 ">
            Kinde
          </p>
          <p className="text-sm px-2 py-1 rounded-md w-fit bg-gray-500 ">
            Typescript
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar className="w-5 h-5 fill-yellow-500" />
            <FaStar className="w-5 h-5 fill-yellow-500" />
            <FaStar className="w-5 h-5 fill-yellow-500" />
            <FaStar className="w-5 h-5 fill-yellow-500" />
            <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">4.2</span>
        </div>
      </CardContent>
    </Card>
  );
}
