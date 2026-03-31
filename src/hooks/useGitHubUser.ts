import { useState, useEffect } from "react";
import { getUser } from "../services/github.service";
import type { User } from "../types";

interface UseGitHubUserResult {
  data: User | null;
  isLoading: boolean;
  notFound: boolean;
  error: string | null;
}

export function useGitHubUser(username: string): UseGitHubUserResult {
  const [data, setData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    setIsLoading(true);
    setNotFound(false);
    setError(null);
    setData(null);

    getUser(username)
      .then((user) => {
        if (user === null) {
          setNotFound(true);
        } else {
          setData(user);
        }
      })
      .catch(() => setError("Something went wrong. Please try again."))
      .finally(() => setIsLoading(false));
  }, [username]);

  return { data, isLoading, notFound, error };
}
