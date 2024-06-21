import { Post } from "@prisma/client";
import { EditPostForm } from "./EditProfileForm";
import { fetchPostById } from "./actions";

interface editProfileProps {
  params: {
    postId: string;
  };
}

export default async function page({ params }: editProfileProps) {
  const { postId } = params;

  const postData = await fetchPostById(postId);
  return (
    <div className="p-3">
      <div className="lg:container p-5 border rounded-2xl">
        <EditPostForm post={postData} />
      </div>
    </div>
  );
}
