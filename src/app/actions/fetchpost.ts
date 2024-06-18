"use server";

import prisma from "@/utils/db";
import { unstable_noStore } from "next/cache";

export async function fetchPosts() {
  unstable_noStore();
  return await prisma.post.findMany({
    include: {
      profile: true,
    },
  });
}
