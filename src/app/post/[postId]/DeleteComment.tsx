"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteComment } from "./actions";
import { Trash2 } from "lucide-react";

interface DeleteCommentProps {
  commentId: string;
}

export default function DeleteComment({ commentId }: DeleteCommentProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2 className="w-5 h-5 text-red-500 cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want to delete this Comment?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove the
            comment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              deleteComment(commentId);
            }}
          >
            Yes, delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
