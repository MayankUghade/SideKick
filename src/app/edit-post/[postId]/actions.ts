"use server";

import prisma from "@/utils/db";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function fetchPostById(id: string) {
  return await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
}

export async function updatePost(id: string, postData: any) {
  revalidatePath("/");
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      ...postData,
    },
  });
}
