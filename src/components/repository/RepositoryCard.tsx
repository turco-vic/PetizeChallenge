import {
  Box,
  Text,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import type { Repository } from "../../types";

interface RepositoryCardProps {
  repository: Repository;
}

function getRelativeUpdatedLabel(
  updatedAt: string | null,
  t: (key: string, options?: Record<string, unknown>) => string
) {
  if (!updatedAt) return null;

  const updatedDate = new Date(updatedAt);
  if (Number.isNaN(updatedDate.getTime())) return null;

  const msInDay = 1000 * 60 * 60 * 24;
  const diffMs = Date.now() - updatedDate.getTime();
  const diffDays = Math.floor(Math.max(0, diffMs) / msInDay);

  if (diffDays === 0) {
    return t("repo.updatedToday");
  }

  if (diffDays < 7) {
    return t("repo.updatedAgoDays", { count: diffDays });
  }

  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return t("repo.updatedAgoWeeks", { count: weeks });
  }

  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return t("repo.updatedAgoMonths", { count: months });
  }

  const years = Math.floor(diffDays / 365);
  return t("repo.updatedAgoYears", { count: years });
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const { t } = useTranslation();
  const relativeUpdatedLabel = getRelativeUpdatedLabel(repository.updated_at, t);

  return (
    <>
      <Box py={2.5}>
        <Text
          as="a"
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          fontWeight="700"
          fontSize="lg"
          color="gray.900"
          cursor="pointer"
          _hover={{ color: "brand.purple" }}
          display="block"
          fontFamily="Inter, sans-serif"
        >
          {repository.name}
        </Text>

        {repository.description && (
          <Text mt={2} color="gray.500" fontSize="sm">
            {repository.description}
          </Text>
        )}

        <HStack mt={4} spacing={3} fontSize="xs" align="center">
          <HStack spacing={2} align="center">
            <Icon as={FiStar} color="#4A5568" boxSize={4} opacity={0.6} />
            <Text color="gray.600">{repository.stargazers_count}</Text>
          </HStack>

          {relativeUpdatedLabel && (
            <>
              <Box
                w="4px"
                h="4px"
                borderRadius="full"
                bg="#4A5568"
                mx={0.1}
                alignSelf="center"
              />
              <Text color="#4A5568">{relativeUpdatedLabel}</Text>
            </>
          )}
        </HStack>
      </Box>
      <Divider borderColor="#E2E8F0" />
    </>
  );
}
