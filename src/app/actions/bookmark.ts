"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function createBookmark(postId: any, userEmail: any) {
  revalidatePath(`/post/${postId}`, "page");
  revalidatePath("/");
  revalidatePath("/bookmarks");
  await prisma.bookmark.create({
    data: {
      postId,
      userEmail,
    },
  });
}

export async function removeBookmark(postId: any, userEmail: any, id: any) {
  revalidatePath(`/post/${postId}`, "page");
  revalidatePath("/");
  revalidatePath("/bookmarks");
  await prisma.bookmark.delete({
    where: {
      id,
      postId,
      userEmail,
    },
  });
}

export async function fetchBookmarks(postId: any, userEmail: any) {
  return await prisma.bookmark.findMany({
    where: {
      postId,
      userEmail,
    },
  });
}
