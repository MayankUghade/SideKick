"use server";

import prisma from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export async function addData(profileData: any) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userEmail = user?.email;

  await prisma.profile.create({
    data: { userEmail, ...profileData },
  });

  if (userEmail) {
    await prisma.user.update({
      where: { email: userEmail },
      data: { proflieComplete: true },
    });
  }

  revalidatePath("/");
}
