import {
  Box,
  Flex,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import UserProfile from "../components/user/UserProfile";
import RepositoryCard from "../components/repository/RepositoryCard";
import RepositorySort from "../components/repository/RepositorySort";
import { useGitHubUser } from "../hooks/useGitHubUser";
import { useInfiniteRepos } from "../hooks/useInfiniteRepos";
import type { SortOption } from "../types";

export default function Profile() {
  const { username } = useParams<{ username: string }>();
  const { t } = useTranslation();
  const [sort, setSort] = useState<SortOption>("updated");

  const { data: user, isLoading: userLoading, notFound, error: userError } = useGitHubUser(username ?? "");
  const { repos, isLoading: reposLoading, error: reposError, sentinelRef } = useInfiniteRepos(username ?? "", sort);

  const handleSortChange = (newSort: SortOption) => {
    setSort(newSort);
  };

  return (
    <Box minH="100vh">
      <Header />

      <Box
        maxW="1100px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={{ base: 4, md: 8 }}
      >
        {userLoading && (
          <Center mt={20}>
            <Spinner size="xl" color="brand.purple" />
          </Center>
        )}

        {notFound && (
          <Center mt={20}>
            <Text fontSize="lg" color="gray.500">
              {t("search.notFound")}
            </Text>
          </Center>
        )}

        {userError && (
          <Center mt={20}>
            <Text fontSize="lg" color="red.400">
              {userError}
            </Text>
          </Center>
        )}

        {user && (
          <Flex
            gap={{ base: 6, md: 8 }}
            flexDirection={{ base: "column", md: "row" }}
            w="100%"
          >
            <UserProfile user={user} />

            <Box flex={1} minW={0}>
              <RepositorySort value={sort} onChange={handleSortChange} />

              {reposError && (
                <Text color="red.400">{reposError}</Text>
              )}

              {repos.map((repo) => (
                <RepositoryCard key={repo.id} repository={repo} />
              ))}

              {reposLoading && (
                <Center py={4}>
                  <Spinner color="brand.purple" />
                </Center>
              )}

              <Box ref={sentinelRef} h="20px" />
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
