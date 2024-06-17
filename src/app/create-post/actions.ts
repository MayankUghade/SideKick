"user server";

import { z } from "zod";

const profileSchema = z.object({
  profileImage: z.string(),
  userName: z
    .string()
    .min(3, { message: "The username should be of minimum 3 characters." }),
  githubProfile: z.string().url().min(3, { message: "Enter a valid url" }),
  role: z
    .string()
    .min(3, { message: "Role should be of minimum 3 characters" }),
  description: z
    .string()
    .min(1, { message: "Description should be at least 1 character" }),
  twitterProfile: z.string().url(),
  linkedinProfile: z.string().url(),
  instagramProfile: z.string().url(),
});
