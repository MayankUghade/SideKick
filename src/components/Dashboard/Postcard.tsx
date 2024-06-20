import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookmarkIcon,
  MessageCircleIcon,
  ShareIcon,
} from "lucide-react";
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Badge } from "../ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface PostCardProps {
  projectTitle: string;
  githubLink: string;
  description: string;
  name: string;
  role: string;
  projectImages: string[];
  tags: string;
  userImage: string;
}

export default function PostCard({
  projectTitle,
  githubLink,
  description,
  name,
  role,
  projectImages,
  tags,
  userImage,
}: PostCardProps) {
  const tagList = tags.split(",").map((tag) => tag.trim());

  const truncateDescription = (desc: string, wordLimit: number) => {
    const words = desc.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ........";
    }
    return desc;
  };

  return (
    <Card className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg md:h-[560px]">
      <div className="relative mb-4">
        <Carousel className="rounded-lg">
          <CarouselContent>
            {projectImages.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                  className="w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 ">
            <ArrowLeftIcon className="h-4 w-4 text-white dark:text-gray-100" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 rounded-full p-2 ">
            <ArrowRightIcon className="h-4 w-4 text-white dark:text-gray-100" />
          </CarouselNext>
        </Carousel>
      </div>

      <CardContent className="p-3 md:p-4">
        <div className="flex sm:items-center justify-between">
          <div className="flex gap-2 items-center">
            <Avatar className="w-12 h-12 ring-4 ring-white dark:ring-gray-950">
              <img src={userImage} alt={name} />
              <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-md font-semibold">{name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
            </div>
          </div>
          <div className="flex items-center">
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
        <h1 className="font-bold mb-2">{projectTitle}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {truncateDescription(description, 25)}
        </p>
        <div className="py-2 flex gap-2 flex-wrap mt-4">
          {tagList.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
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
