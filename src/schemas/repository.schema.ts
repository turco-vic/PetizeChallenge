import { z } from "zod";

export const RepositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  stargazers_count: z.number(),
  language: z.string().nullable(),
  updated_at: z.string().nullable(),
  forks_count: z.number(),
  open_issues_count: z.number(),
  visibility: z.string(),
});

export const RepositoryListSchema = z.array(RepositorySchema);

export type Repository = z.infer<typeof RepositorySchema>;
