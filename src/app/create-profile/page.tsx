import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Form from "./form";

export default async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userImageUrl =
    user?.picture ?? `https://avatar.vercel.sh/${user?.given_name as string}`;
  console.log(userImageUrl);
  return (
    <div className="p-4 sm:p-1">
      {user?.picture && <Form userImage={userImageUrl} />}
    </div>
  );
}
