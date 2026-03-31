import { useState, useEffect, useCallback, useRef } from "react";
import { getRepositories } from "../services/github.service";
import type { Repository, SortOption } from "../types";

interface UseInfiniteReposResult {
  repos: Repository[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  sentinelRef: (node: HTMLDivElement | null) => void;
}

export function useInfiniteRepos(
  username: string,
  sort: SortOption
): UseInfiniteReposResult {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setRepos([]);
    setPage(1);
    setHasMore(true);
    setError(null);
  }, [username, sort]);

  useEffect(() => {
    if (!username) return;
    if (sort !== "stargazers" && !hasMore) return;

    setIsLoading(true);

    getRepositories(username, page, sort)
      .then((newRepos) => {
        setRepos((prev) => (page === 1 ? newRepos : [...prev, ...newRepos]));
        if (sort === "stargazers") {
          setHasMore(false);
        } else {
          setHasMore(newRepos.length === 10);
        }
      })
      .catch(() => setError("Failed to load repositories."))
      .finally(() => setIsLoading(false));
  }, [username, page, sort]);

  const sentinelRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return { repos, isLoading, error, hasMore, sentinelRef };
}
