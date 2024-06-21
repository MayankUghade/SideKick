"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function singlePostData(postId: string) {
  return await prisma.post.findUnique({
    where: {
      id: postId as string,
    },
    include: {
      profile: true,
    },
  });
}

export async function createComment(
  postId: string,
  userEmail: string,
  message: string
) {
  await prisma.comment.create({
    data: {
      postId,
      userEmail,
      message,
    },
  });
  revalidatePath(`/post/${postId}`, "page");
}

export async function fetchComment(postId: string) {
  return await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      profile: true,
    },
  });
}

export async function submitRatings(
  userEmail: string,
  postId: string,
  rating: number
) {
  const existingRating = await prisma.rating.findFirst({
    where: {
      userEmail,
      postId,
    },
  });

  if (existingRating) {
    await prisma.rating.update({
      where: {
        id: existingRating.id,
      },
      data: {
        rating,
      },
    });
  } else {
    await prisma.rating.create({
      data: {
        userEmail,
        postId,
        rating,
      },
    });
  }

  revalidatePath(`/post/${postId}`, "page");
}

export async function fetchRatings(postId: string) {
  const avgRating = await prisma.rating.aggregate({
    _avg: {
      rating: true,
    },
    where: {
      postId,
    },
  });

  return avgRating._avg.rating;
}
