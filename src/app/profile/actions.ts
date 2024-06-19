"use server";

import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function fetchUserProfile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userEmail = user?.email;
  return await prisma.profile.findUnique({
    where: {
      userEmail: userEmail as string,
    },
  });
}

export async function fetchUserPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userEmail = user?.email;
  return await prisma.post.findMany({
    where: {
      email: userEmail as string,
    },
    include: {
      profile: true,
    },
  });
}
