import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function CommentCard({ comment }: any) {
  const formattedDate = new Date(comment.createdAt).toLocaleString();

  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg">
      <Avatar className="flex-shrink-0 w-10 h-10">
        <AvatarImage src={comment.profile.profileImage} />
        <AvatarFallback>
          {comment.profile.userName.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 grid gap-2">
        <div className="flex items-center justify-between">
          <div className="font-medium">{comment.profile.userName}</div>
          <time className="text-xs text-muted-foreground">{formattedDate}</time>
        </div>
        <p className="text-sm text-muted-foreground">{comment.message}</p>
      </div>
    </div>
  );
}
