"use client";

import { Button } from "../ui/button";
import { BookmarkIcon } from "lucide-react";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import {
  createBookmark,
  fetchBookmarks,
  removeBookmark,
} from "@/app/actions/bookmark";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Bookmark({ postId, userEmail }: any) {
  const { toast } = useToast();

  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState<string>("");

  useEffect(() => {
    const checkIfBookmarked = async () => {
      const isBookmarked = await fetchBookmarks(postId, userEmail);
      if (isBookmarked.length === 0) {
        setBookmarked(false);
      } else {
        setBookmarked(true);
        setBookmarkId(isBookmarked[0].id);
      }
      console.log(isBookmarked);
    };
    checkIfBookmarked();
  }, [postId, userEmail]);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      toast({
        description: "Removed from bookmarks!",
      });
      removeBookmark(postId, userEmail, bookmarkId);
    } else {
      toast({
        description: "Added this post to your bookmarks!",
      });
      createBookmark(postId, userEmail);
    }
    setBookmarked(!bookmarked);
  };

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={handleToggleBookmark}>
        {bookmarked ? (
          <BookmarkFilledIcon className="h-5 w-5" />
        ) : (
          <BookmarkIcon className="h-5 w-5" />
        )}
        <span className="sr-only">Bookmark</span>
      </Button>
    </div>
  );
}
