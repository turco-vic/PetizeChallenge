import {
  Box,
  Avatar,
  Text,
  HStack,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import {
  FiTwitter,
  FiMapPin,
  FiUsers,
  FiHeart,
  FiMail,
  FiLink,
} from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import type { User } from "../../types";

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  const { t } = useTranslation();

  const openUrl = (url: string) => {
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <Box w={{ base: "100%", md: "220px" }} flexShrink={0}>
      <Box bg="#FFFFFF" px={{ base: 3, md: 4 }} borderRadius="lg">
        <VStack align="start" spacing={2}>

        <HStack spacing={3} align="center">
          <Avatar
            src={user.avatar_url}
            name={user.name ?? user.login}
            size="md"
            borderRadius="full"
          />
          <Box>
            <Text fontWeight="bold" fontSize="md" color="gray.800">
              {user.name ?? user.login}
            </Text>
            <Text color="gray.400" fontSize="sm">
              @{user.login}
            </Text>
          </Box>
        </HStack>

        {user.bio && (
          <>
            <Text fontSize="sm" color="gray.600" lineHeight="1.5" mt={2}>
              {user.bio}
            </Text>
            <Box h={1} />
          </>
        )}

        <VStack align="start" spacing={2} pt={1} fontSize="sm" color="gray.600">
          <HStack spacing={2}>
            <Icon as={FiUsers} color="gray.500" boxSize={3.5} />
            <Text><strong>{user.followers}</strong> {t("profile.followers")}</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FiHeart} color="gray.500" boxSize={3.5} />
            <Text><strong>{user.following}</strong> {t("profile.following")}</Text>
          </HStack>
        </VStack>

        <Box h={1} />

        <VStack align="start" spacing={2} pt={1} fontSize="sm" color="gray.600">
          {user.company && (
            <HStack spacing={2}>
              <Icon as={FaRegBuilding} color="gray.500" boxSize={3.5} />
              <Text>{user.company}</Text>
            </HStack>
          )}
          {user.location && (
            <HStack spacing={2}>
              <Icon as={FiMapPin} color="gray.500" boxSize={3.5} />
              <Text>{user.location}</Text>
            </HStack>
          )}
          {user.email && (
            <HStack spacing={2}>
              <Icon as={FiMail} color="gray.500" boxSize={3.5} />
              <Text>{user.email}</Text>
            </HStack>
          )}
          {user.blog && (
            <HStack
              spacing={2}
              cursor="pointer"
              onClick={() => openUrl(user.blog!)}
              _hover={{ color: "brand.blue" }}
            >
              <Icon as={FiLink} color="gray.500" boxSize={3.5} />
              <Text>{user.blog}</Text>
            </HStack>
          )}
          {user.twitter_username && (
            <HStack
              spacing={2}
              cursor="pointer"
              onClick={() => openUrl(`https://twitter.com/${user.twitter_username}`)}
              _hover={{ color: "brand.blue" }}
            >
              <Icon as={FiTwitter} color="gray.500" boxSize={3.5} />
              <Text>@{user.twitter_username}</Text>
            </HStack>
          )}
        </VStack>

          <Box h={10} />
        </VStack>
      </Box>

      <VStack align="stretch" spacing={2} mt={3} mb={{ base: 16, md: 0 }}>
        {user.blog && (
          <Button
            w="100%"
            bg="brand.purple"
            color="white"
            borderRadius="md"
            fontSize="sm"
            fontWeight="semibold"
            _hover={{ bg: "#6B0BA3" }}
            onClick={() => openUrl(user.blog!)}
          >
            {t("profile.contact")}
          </Button>
        )}

        {user.twitter_username && (
          <Button
            w="100%"
            variant="outline"
            borderColor="gray.300"
            color="gray.600"
            borderRadius="md"
            fontSize="sm"
            fontWeight="normal"
            leftIcon={<Icon as={FiTwitter} color="gray.400" />}
            _hover={{ bg: "gray.100" }}
            onClick={() => openUrl(`https://twitter.com/${user.twitter_username}`)}
          >
            {t("profile.twitter")}
          </Button>
        )}
      </VStack>
    </Box>
  );
}
