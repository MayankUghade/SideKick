import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user == null || !user.id)
    throw new Error("something went wrong with authentication" + user);

  let dbUser = await prisma.user.findUnique({
    where: { kindeId: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        kindeId: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        userImage:
          user.picture ??
          `https://avatar.vercel.sh/${user.given_name as string}`,
      },
    });
  }

  const profileComplete = dbUser.proflieComplete;

  if (profileComplete) {
    return NextResponse.redirect("http://localhost:3000");
  } else {
    return NextResponse.redirect("http://localhost:3000/create-profile");
  }
}
