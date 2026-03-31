import {
  Box,
  Text,
  Link,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { Repository } from "../../types";

interface RepositoryCardProps {
  repository: Repository;
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const { t } = useTranslation();

  const formattedDate = repository.updated_at
    ? new Date(repository.updated_at).toLocaleDateString()
    : null;

  return (
    <Box py={4}>
      <Link
        href={repository.html_url}
        isExternal
        fontWeight="bold"
        fontSize="lg"
        color="gray.800"
        _hover={{ color: "brand.purple" }}
      >
        {repository.name}
      </Link>

      {repository.description && (
        <Text mt={1} color="gray.600" fontSize="sm">
          {repository.description}
        </Text>
      )}

      <HStack mt={2} spacing={4} color="gray.500" fontSize="sm">
        <HStack spacing={1}>
          <Text>⭐</Text>
          <Text>{repository.stargazers_count}</Text>
        </HStack>

        {formattedDate && (
          <Text>
            {t("repo.updatedAt")} {formattedDate}
          </Text>
        )}

        {repository.language && (
          <Text>{repository.language}</Text>
        )}
      </HStack>

      <Divider mt={4} />
    </Box>
  );
}
