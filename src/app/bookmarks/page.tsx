import PostCard from "@/components/Dashboard/Postcard";
import { yourBookmarks } from "./actions";
import Image from "next/image";

export default async function page() {
  const bookmarkedPosts = await yourBookmarks();

  return (
    <div className="lg:container p-3 flex flex-col items-center justify-center mt-5 gap-3">
      <h1 className="text-3xl font-bold">Your Bookmarked Posts</h1>

      <div className="flex items-center justify-center flex-wrap gap-5">
        {bookmarkedPosts.length > 0 ? (
          bookmarkedPosts.map((item) => (
            <PostCard
              key={item.post.id}
              id={item.post.id}
              projectTitle={item.post.projectTitle}
              githubLink={item.post.githubUrl}
              description={item.post.description}
              name={item.profile.userName}
              role={item.profile.role}
              userImage={item.profile.profileImage}
              projectImages={item.post.projectImages}
              tags={item.post.tags}
            />
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
