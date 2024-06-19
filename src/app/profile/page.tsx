import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { fetchUserProfile } from "./actions";
import { fetchUserPosts } from "./actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import PostCard from "@/components/Dashboard/Postcard";

export default async function Component() {
  const userProfile = await fetchUserProfile();
  const userPosts = await fetchUserPosts();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center">
          <div className="rounded-full w-32 h-32 overflow-hidden">
            <img
              src={userProfile?.profileImage}
              width={128}
              height={128}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1">
            <h2 className="text-2xl font-bold mt-4">{user?.given_name}</h2>
            <h2 className="text-2xl font-bold mt-4">{user?.family_name}</h2>
          </div>

          <p className="text-gray-500 dark:text-gray-400">
            @{userProfile?.userName}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {userProfile?.role}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href={userProfile?.instagramProfile as string}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <InstagramLogoIcon className="w-6 h-6" />
            </Link>
            <Link
              href={userProfile?.githubProfile as string}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </Link>
            <Link
              href={userProfile?.linkedinProfile as string}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <LinkedInLogoIcon className="w-6 h-6" />
            </Link>
            <Link
              href={userProfile?.twitterProfile as string}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <TwitterLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex-1 grid gap-8">
          <div className="grid gap-2">
            <h3 className="text-xl font-bold">About</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {userProfile?.description}
            </p>
          </div>
          <h3 className="text-xl font-bold">Posts</h3>
          <div className="flex items-center justify-center flex-wrap gap-5">
            {userPosts.map((post) => (
              <PostCard
                key={post.id}
                projectTitle={post.projectTitle}
                githubLink={post.githubUrl}
                description={post.description}
                name={post.profile.userName}
                role={post.profile.role}
                userImage={post.profile.profileImage}
                projectImages={post.projectImages}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
