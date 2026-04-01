import {
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Text,
  HStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/profile/${search.trim()}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
      px={{ base: 4, md: 8 }}
    >
      <Text
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        fontWeight="normal"
        textAlign="center"
        whiteSpace="nowrap"
      >
        <Box as="span" color="brand.blue">Search </Box>
        <Box as="span" color="brand.purple">d_evs</Box>
      </Text>

      <HStack maxW="500px" w="100%" spacing={2}>
        <InputGroup size="md" flex={1}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("search.placeholder")}
            focusBorderColor="brand.purple"
            borderRadius="md"
            fontWeight="normal"
          />
        </InputGroup>

        <Button
          onClick={handleSearch}
          bg="brand.purple"
          color="white"
          size="md"
          px={{ base: 4, md: 10 }}
          fontWeight="normal"
          _hover={{ bg: "#6a28a8" }}
          borderRadius="md"
          flexShrink={0}
        >
          {t("search.button")}
        </Button>
      </HStack>
    </Box>
  );
}
