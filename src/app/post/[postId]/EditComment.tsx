"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"; // Ensure Button is imported
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Ensure these components are imported
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PencilIcon } from "lucide-react";
import { updateComment } from "./actions";

interface EditCommentProps {
  commentId: string;
  commentMessage: string;
  postId: string;
}

const formSchema = z.object({
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export default function EditComment({
  commentId,
  commentMessage,
  postId,
}: EditCommentProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: commentMessage,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { message } = values;
    updateComment(commentId, message, postId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <PencilIcon className="w-5 h-5 hover:cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Comment</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your comment"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
