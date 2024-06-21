"use server";

import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function yourBookmarks() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userEmail = user?.email as string;
  return await prisma.bookmark.findMany({
    where: {
      userEmail,
    },
    include: {
      post: true,
      profile: true,
    },
  });
}
