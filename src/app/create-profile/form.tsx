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
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { addData } from "./actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  userName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
  githubProfile: z.string().url({
    message: "Add a valid GitHub profile link",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  twitterProfile: z.string().url().optional(),
  instagramProfile: z.string().url().optional(),
  linkedinProfile: z.string().url().optional(),
  profileImage: z.string().url().optional(),
});

export default function ProfileForm({ userImage }: { userImage: string }) {
  const [image, setImage] = useState<string>(userImage);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      role: "",
      githubProfile: "",
      description: "",
      twitterProfile: "",
      instagramProfile: "",
      linkedinProfile: "",
      profileImage: userImage,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    addData(values);
    router.push("/");
    setLoading(false);
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Create Your Profile</CardTitle>
          <Button variant="outline">
            <Link href="/">Skip</Link>
          </Button>
        </div>

        <CardDescription>
          Fill out the form to create your user profile before using the
          application.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col items-center justify-center">
              <Avatar className="h-24 w-24">
                <img src={image} alt="User Avatar" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>

              <h1 className="text-sm mt-2 text-gray-500">
                Choose a profile image
              </h1>
              <UploadButton
                endpoint="profilePicture"
                onClientUploadComplete={(res: any) => {
                  const url = res[0]?.url;
                  setImage(url);
                  form.setValue("profileImage", url);
                }}
                onUploadError={(error) => {
                  console.error("Upload error:", error);
                }}
              />
            </div>

            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Software Engineer, Ui-Ux designer, crazy engineer⚙️"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubProfile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your GitHub profile link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid sm:grid-cols-3 gap-3">
              <FormField
                control={form.control}
                name="twitterProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Twitter profile link"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="instagramProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Instagram profile link"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedinProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your LinkedIn profile link"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {loading ? (
              <>
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              </>
            ) : (
              <>
                <Button type="submit" className="w-full">
                  Create Profile
                </Button>
              </>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
