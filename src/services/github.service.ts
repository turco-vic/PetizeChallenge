import { UserSchema } from "../schemas/user.schema";
import { RepositoryListSchema } from "../schemas/repository.schema";
import type { SortOption } from "../types";

const BASE_URL = "https://api.github.com";

export async function getUser(username: string) {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await response.json();
  return UserSchema.parse(data);
}

export async function getRepositories(
  username: string,
  page: number,
  sort: SortOption
) {
  const response = await fetch(
    `${BASE_URL}/users/${username}/repos?page=${page}&per_page=10&sort=${sort}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const data = await response.json();
  return RepositoryListSchema.parse(data);
}
