import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { userProfileWithId } from "./actions";
import PostCard from "@/components/Dashboard/Postcard";
import Image from "next/image";

interface PageProps {
  params: {
    userId: string;
  };
}

export default async function Component({ params }: PageProps) {
  const { userId } = params;

  // Fetch user profile data
  const userProfile = await userProfileWithId(userId);
  console.log(userProfile);

  const profilePosts = userProfile?.posts;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* User profile section */}
        <div className="flex flex-col items-center">
          {/* Profile image */}
          <div className="rounded-full w-32 h-32 overflow-hidden">
            <img
              src={userProfile?.profileImage}
              width={128}
              height={128}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* User name */}
          <div className="flex items-center gap-1">
            <h2 className="text-2xl font-bold mt-4">
              {userProfile?.user.firstName}
            </h2>
            <h2 className="text-2xl font-bold mt-4">
              {userProfile?.user.lastName}
            </h2>
          </div>

          {/* Username and role */}
          <p className="text-gray-500 dark:text-gray-400">
            @{userProfile?.userName}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {userProfile?.role}
          </p>

          {/* Social media links */}
          <div className="flex items-center gap-4 mt-4">
            {userProfile?.instagramProfile && (
              <Link
                href={userProfile.instagramProfile}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <InstagramLogoIcon className="w-6 h-6" />
              </Link>
            )}
            {userProfile?.githubProfile && (
              <Link
                href={userProfile.githubProfile}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <GitHubLogoIcon className="w-6 h-6" />
              </Link>
            )}
            {userProfile?.linkedinProfile && (
              <Link
                href={userProfile.linkedinProfile}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <LinkedInLogoIcon className="w-6 h-6" />
              </Link>
            )}
            {userProfile?.twitterProfile && (
              <Link
                href={userProfile.twitterProfile}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <TwitterLogoIcon className="w-6 h-6" />
              </Link>
            )}
          </div>
        </div>

        {/* User posts section */}
        <div className="flex-1 grid gap-8">
          <div className="grid gap-2">
            <h3 className="text-xl font-bold">About</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {userProfile?.description}
            </p>
          </div>
          <h3 className="text-xl font-bold">Posts</h3>
          <div className="flex items-center justify-center flex-wrap gap-5">
            {profilePosts !== undefined && profilePosts.length > 0 ? (
              profilePosts.map((post) => (
                <PostCard
                  id={post.id}
                  key={post.id}
                  projectTitle={post.projectTitle}
                  githubLink={post.githubUrl}
                  description={post.description}
                  name={userProfile?.userName as string}
                  role={userProfile?.role as string}
                  userImage={userProfile?.profileImage as string}
                  projectImages={post.projectImages}
                  tags={post.tags}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 mt-5">
                <h2 className="text-xl font-semibold text-gray-500">
                  No posts created yet
                </h2>
                <Image
                  src="/no_data.svg"
                  alt="No data"
                  width={300}
                  height={300}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
