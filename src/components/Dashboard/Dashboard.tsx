import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { PlusIcon, Search } from "lucide-react";
import PostCard from "./Postcard";
import Link from "next/link";
import { fetchPosts } from "@/app/actions/fetchpost";
import Image from "next/image";

export default async function Dashboard() {
  const postData = await fetchPosts();
  return (
    <div className="p-3 flex flex-col gap-5">
      <div className="lg:container flex gap-2 items-center justify-between">
        <div className="lg:w-[570px] md:w-[470px] w-[300px] flex gap-2">
          <Input
            type="text"
            placeholder="Search project by names or tags"
            className=""
          />
          <Button>
            <Search />
          </Button>
        </div>

        <Button variant="outline" className="flex items-center gap-3" asChild>
          <Link href="/create-post">
            <h1 className="hidden sm:flex">Create Post</h1>
            <PlusIcon className="w-5 h-5" />
          </Link>
        </Button>
      </div>

      <h1 className="mt-5 font-bold text-3xl text-center">Your Feed</h1>

      <div className="flex items-center justify-center flex-wrap gap-5">
        {postData.length > 0 ? (
          postData.map((post) => (
            <Link
              href={`/post/${post.id}`}
              key={post.id}
              className="cursor-pointer"
            >
              <PostCard
                projectTitle={post.projectTitle}
                githubLink={post.githubUrl}
                description={post.description}
                name={post.profile.userName}
                role={post.profile.role}
                userImage={post.profile.profileImage}
                projectImages={post.projectImages}
                tags={post.tags}
              />
            </Link>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 mt-5">
            <h2 className="text-xl font-semibold text-gray-500">
              No posts yet
            </h2>
            <Image src="no_data.svg" alt="no data" width={300} height={300} />
          </div>
        )}
      </div>
    </div>
  );
}
