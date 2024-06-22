"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { createComment } from "./actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export function CommentForm({ postId, userEmail }: any) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const { message } = values;
    createComment(postId, userEmail, message);
    form.reset();
    setLoading(false);
  }

  return (
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
        {loading ? (
          <>
            <Button disabled className="w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          </>
        ) : (
          <>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
