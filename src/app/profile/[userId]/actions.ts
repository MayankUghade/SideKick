"use server";

import prisma from "@/utils/db";

export async function userProfileWithId(userId: string) {
  return await prisma.profile.findUnique({
    where: {
      id: userId as string,
    },
    include: {
      posts: true,
      user: true,
    },
  });
}
