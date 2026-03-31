import { UserSchema } from "../schemas/user.schema";
import { RepositoryListSchema } from "../schemas/repository.schema";
import type { SortOption } from "../types";

const BASE_URL = "https://api.github.com";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
};

export async function getUser(username: string) {
  const response = await fetch(`${BASE_URL}/users/${username}`, { headers });

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
  if (sort === "stargazers") {
    const response = await fetch(
      `${BASE_URL}/users/${username}/repos?page=1&per_page=100&sort=updated`,
      { headers }
    );
    if (!response.ok) throw new Error("Failed to fetch repositories");
    const data = await response.json();
    const repos = RepositoryListSchema.parse(data);
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  const direction =
    sort === "full_name" ? "asc" : "desc";

  const response = await fetch(
    `${BASE_URL}/users/${username}/repos?page=${page}&per_page=10&sort=${sort}&direction=${direction}`,
    { headers }
  );

  if (!response.ok) throw new Error("Failed to fetch repositories");

  const data = await response.json();
  return RepositoryListSchema.parse(data);
}
