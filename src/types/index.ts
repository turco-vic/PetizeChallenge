export type { User } from "../schemas/user.schema";
export type { Repository } from "../schemas/repository.schema";

export type SortOption =
  | "updated"
  | "pushed"
  | "full_name"
  | "created"
  | "stars";
  