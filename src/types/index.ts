export type { User } from "../schemas/user.schema";
export type { Repository } from "../schemas/repository.schema";

export type SortOption =
  | "created"
  | "updated"
  | "pushed"
  | "full_name"
  | "stargazers";
  