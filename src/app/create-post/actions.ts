"use server";

import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createPost(postData: any) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const email = user?.email;

  await prisma.post.create({
    data: { email, ...postData },
  });
}
