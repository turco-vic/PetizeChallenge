import {
  Box,
  Avatar,
  Text,
  HStack,
  VStack,
  Button,
  Link,
  Divider,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { User } from "../../types";

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  const { t } = useTranslation();

  return (
    <Box w={{ base: "100%", md: "260px" }} flexShrink={0}>
      <VStack align="start" spacing={3}>
        <HStack spacing={3}>
          <Avatar src={user.avatar_url} name={user.name ?? user.login} size="lg" />
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {user.name ?? user.login}
            </Text>
            <Text color="gray.500" fontSize="sm">
              @{user.login}
            </Text>
          </Box>
        </HStack>

        {user.bio && (
          <Text fontSize="sm" color="gray.600">
            {user.bio}
          </Text>
        )}

        <Divider />

        <HStack spacing={4} fontSize="sm">
          <Text>
            <strong>{user.followers}</strong> {t("profile.followers")}
          </Text>
          <Text>
            <strong>{user.following}</strong> {t("profile.following")}
          </Text>
        </HStack>

        <VStack align="start" spacing={1} fontSize="sm" color="gray.600">
          {user.company && <Text>🏢 {user.company}</Text>}
          {user.location && <Text>📍 {user.location}</Text>}
          {user.email && <Text>✉️ {user.email}</Text>}
          {user.blog && (
            <Link href={user.blog} isExternal color="brand.blue">
              🔗 {user.blog}
            </Link>
          )}
          {user.twitter_username && (
            <Link
              href={`https://twitter.com/${user.twitter_username}`}
              isExternal
              color="brand.blue"
            >
              🐦 @{user.twitter_username}
            </Link>
          )}
        </VStack>

        <Divider />

        {user.blog && (
          <Button
            as={Link}
            href={user.blog}
            isExternal
            w="100%"
            bg="brand.purple"
            color="white"
            _hover={{ bg: "#6a28a8", textDecoration: "none" }}
          >
            {t("profile.contact")}
          </Button>
        )}

        {user.twitter_username && (
          <Button
            as={Link}
            href={`https://twitter.com/${user.twitter_username}`}
            isExternal
            w="100%"
            variant="outline"
            borderColor="brand.purple"
            color="brand.purple"
            _hover={{ bg: "purple.50", textDecoration: "none" }}
          >
            {t("profile.twitter")}
          </Button>
        )}
      </VStack>
    </Box>
  );
}
