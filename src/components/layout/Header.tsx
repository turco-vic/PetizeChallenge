import {
  Box,
  HStack,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
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

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
    <Box px={{ base: 4, md: 8 }} py={4} bg="white">
      {/* Desktop */}
      <HStack justify="space-between" display={{ base: "none", md: "flex" }}>
        <Text
          fontSize="xl"
          fontWeight="normal"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          <Box as="span" color="brand.blue">Search </Box>
          <Box as="span" color="brand.purple">d_evs</Box>
        </Text>

        <HStack spacing={3}>
          <InputGroup size="md" w="300px">
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
            px={8}
            fontWeight="normal"
            _hover={{ bg: "#6a28a8" }}
            borderRadius="md"
          >
            {t("search.button")}
          </Button>
          <Button
            onClick={toggleLanguage}
            variant="outline"
            borderColor="brand.purple"
            color="brand.purple"
            size="md"
            fontWeight="normal"
            _hover={{ bg: "purple.50" }}
            borderRadius="md"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </Button>
        </HStack>
      </HStack>

      {/* Mobile */}
      <VStack display={{ base: "flex", md: "none" }} spacing={3} align="stretch">
        <HStack justify="space-between">
          <Text
            fontSize="xl"
            fontWeight="normal"
            cursor="pointer"
            onClick={() => navigate("/")}
          >
            <Box as="span" color="brand.blue">Search </Box>
            <Box as="span" color="brand.purple">d_evs</Box>
          </Text>
          <Button
            onClick={toggleLanguage}
            variant="outline"
            borderColor="brand.purple"
            color="brand.purple"
            size="sm"
            fontWeight="normal"
            _hover={{ bg: "purple.50" }}
            borderRadius="md"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </Button>
        </HStack>

        <HStack spacing={2}>
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
            px={6}
            fontWeight="normal"
            _hover={{ bg: "#6a28a8" }}
            borderRadius="md"
          >
            {t("search.button")}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
