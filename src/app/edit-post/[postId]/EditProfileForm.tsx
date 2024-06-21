"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { updatePost } from "./actions";

const formSchema = z.object({
  projectTitle: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  tags: z.string().min(1, {
    message: "There should be atleast one tag.",
  }),
  githubUrl: z.string().url({
    message: "Add a valid GitHub link to your project",
  }),
  projectImages: z.array(z.string()).nonempty({
    message: "At least one image is required.",
  }),
});

export function EditPostForm({ post }: any) {
  const router = useRouter();
  const postId = post.id;
  const [projectImages, setprojectImages] = useState(post.projectImages);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectTitle: post.projectTitle,
      description: post.description,
      tags: post.tags,
      githubUrl: post.githubUrl,
      projectImages: projectImages,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    router.push("/");
    await updatePost(postId, { ...values, projectImages });
    form.reset();
    setLoading(false);
  }
  return (
    <Form {...form}>
      <h1 className="font-bold text-3xl">Edit project</h1>
      <h1 className="mb-5 text-gray-500">
        Edit your project by adding the new values
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="projectTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="Expense tracker" {...field} />
              </FormControl>
              <FormDescription>This will be your project title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Helps to track expences" {...field} />
              </FormControl>
              <FormDescription>
                This will be your public description
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nextjs, Tailwind-Css, Kinde, Javascript"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Add your tags with a comma for seprated list.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Url</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://github.com/MayankUghade/SideKick"
                  {...field}
                />
              </FormControl>
              <FormDescription>This will be your github url</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectImages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Images</FormLabel>
              <FormControl>
                <div>
                  <UploadDropzone
                    className="p-5 mt-5 mb-5"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res: any) => {
                      const urls = res.map((item: any) => item.url);
                      setprojectImages(urls);
                      field.onChange(urls);
                    }}
                    onUploadError={(error) => {
                      console.error("Upload error:", error);
                    }}
                  />
                </div>
              </FormControl>
              <FormDescription>Upload images of your project.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {loading ? (
          <Button disabled className="w-fit">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-fit">
            Edit
          </Button>
        )}
      </form>
    </Form>
  );
}
