import { fetchComment, singlePostData, fetchRatings } from "./actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookmarkIcon,
  ShareIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CommentForm } from "./comment";
import { ScrollArea } from "@/components/ui/scroll-area";
import CommentCard from "./commentCard";
import Rating from "./Ratings";
import Bookmark from "@/components/Dashboard/Bookmark";

interface PageProps {
  params: {
    postId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const { postId } = params;

  const postData = await singlePostData(postId);
  const comment = await fetchComment(postId);
  const ratings = await fetchRatings(postId);

  const tagList = postData?.tags.split(",").map((tag) => tag.trim());

  return (
    <div className="px-4 py-6 md:px-6 lg:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-6">
                {postData?.projectTitle}
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <Link
                  href={`/profile/${postData?.profile.id}`}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <Avatar className="w-12 h-12 ring-4 ring-white dark:ring-gray-950">
                    <AvatarImage
                      src={postData?.profile.profileImage}
                      alt={postData?.profile.userName}
                    />
                    <AvatarFallback>
                      {postData?.profile.userName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hover:underline">
                    <h3 className="text-md font-semibold">
                      {postData?.profile.userName}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {postData?.profile.role}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ShareIcon className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
              <Bookmark postId={postData?.id} userEmail={postData?.email} />
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={postData?.githubUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                  <span className="sr-only">Bookmark</span>
                </Link>
              </Button>
            </div>
          </div>
          <Carousel className="rounded-xl">
            <CarouselContent>
              {postData?.projectImages.map((image, index) => (
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
          <div className="space-y-4">
            <p>{postData?.description}</p>
          </div>
          <div className="py-2 flex gap-2 flex-wrap mt-4">
            {tagList?.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`transition-colors ${
                  ratings !== null && star <= ratings
                    ? "text-yellow-500"
                    : "text-muted-foreground"
                }`}
              >
                <FaStar className="h-7 w-7" />
              </div>
            ))}
            <p className="text-muted-foreground">{ratings} out of 5</p>
          </div>
          <Rating userEmail={user?.email} postId={postData?.id} />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Leave a Comment</h2>
            <div className="grid gap-4">
              <CommentForm postId={postData?.id} userEmail={user?.email} />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Comments</h2>
          </div>

          <ScrollArea className="w-full h-[400px] mt-2 border-2 p-3 rounded-lg">
            {comment.length > 0 ? (
              comment.map((comment) => (
                <div key={comment.id} className="mb-2">
                  <CommentCard comment={comment} />
                </div>
              ))
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-500">
                  No Comments yet
                </h2>
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
