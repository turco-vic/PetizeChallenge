import { z } from "zod";

export const UserSchema = z.object({
  login: z.string(),
  name: z.string().nullable(),
  avatar_url: z.string().url(),
  bio: z.string().nullable(),
  followers: z.number(),
  following: z.number(),
  company: z.string().nullable(),
  location: z.string().nullable(),
  email: z.string().nullable(),
  blog: z.string().nullable(),
  twitter_username: z.string().nullable(),
  public_repos: z.number(),
  html_url: z.string().url(),
});

export type User = z.infer<typeof UserSchema>;
