"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import { submitRatings } from "./actions";
import { useToast } from "@/components/ui/use-toast";

export default function Rating({ userEmail, postId }: any) {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitRatings(userEmail, postId, rating);
      toast({
        title: "Thank you for rating 😊",
        description: "Your rating has been updated successfully!!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error submitting your rating. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Rate Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Rate this project</DialogTitle>
          <DialogDescription>
            Please select a rating between 1 and 5 stars.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center gap-2 py-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`p-2 transition-colors ${
                star <= rating
                  ? "text-yellow-500 hover:text-yellow-500/80"
                  : "text-muted-foreground hover:text-muted"
              }`}
            >
              <FaStar className="h-8 w-8" />
            </button>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Submit Rating
            <DialogClose />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
