import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

export default async function CommentCard({ comment }: any) {
  const formattedDate = new Date(comment.createdAt).toLocaleString();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const currentUserEmail = user?.email;

  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg">
      <Avatar className="flex-shrink-0 w-10 h-10">
        <AvatarImage src={comment.profile.profileImage} />
        <AvatarFallback>
          {comment.profile.userName.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 grid gap-2">
        <div className="flex flex-col gap-1">
          <Link
            href={`/profile/${comment.profile.id}`}
            className="font-medium cursor-pointer hover:underline"
          >
            {comment.profile.userName}
          </Link>
          <time className="text-xs text-gray-500">{formattedDate}</time>
        </div>
        <p className="text-sm text-muted-foreground">{comment.message}</p>
      </div>
      {comment.userEmail === currentUserEmail && (
        <>
          <DeleteComment commentId={comment.id} />
          <EditComment
            commentId={comment.id}
            commentMessage={comment.message}
            postId={comment.postId}
          />
        </>
      )}
    </div>
  );
}
