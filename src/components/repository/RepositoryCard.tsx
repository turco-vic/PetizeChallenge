import {
  Box,
  Text,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { StarIcon, TimeIcon } from "@chakra-ui/icons";
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
      <Text
        as="a"
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        fontWeight="bold"
        fontSize="md"
        color="gray.800"
        cursor="pointer"
        _hover={{ color: "brand.purple" }}
      >
        {repository.name}
      </Text>

      {repository.description && (
        <Text mt={1} color="gray.500" fontSize="sm">
          {repository.description}
        </Text>
      )}

      <HStack mt={2} spacing={4} color="gray.500" fontSize="sm">
        <HStack spacing={1}>
          <StarIcon color="gray.500" boxSize={3} />
          <Text>{repository.stargazers_count}</Text>
        </HStack>

        {formattedDate && (
          <HStack spacing={1}>
            <TimeIcon color="gray.500" boxSize={3} />
            <Text>{t("repo.updatedAt")} {formattedDate}</Text>
          </HStack>
        )}

        {repository.language && (
          <Text>{repository.language}</Text>
        )}
      </HStack>

      <Divider mt={4} />
    </Box>
  );
}
