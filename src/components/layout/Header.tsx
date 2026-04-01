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
    <Box py={4}>
      <Box maxW="1100px" mx="auto" px={{ base: 4, md: 6 }}>
        {/* Desktop */}
        <HStack spacing={8} align="center" display={{ base: "none", md: "flex" }}>
          <Box w="220px" flexShrink={0}>
            <Text
              fontSize="3xl"
              fontWeight="semibold"
              cursor="pointer"
              fontFamily="Nunito, sans-serif"
              onClick={() => navigate("/")}
            >
              <Box as="span" color="brand.blue">Search </Box>
              <Box as="span" color="brand.purple">d_evs</Box>
            </Text>
          </Box>

          <HStack flex={1} justify="space-between" align="center">
            <InputGroup w="520px">
              <InputLeftElement pointerEvents="none" h="100%">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("search.placeholder")}
                focusBorderColor="brand.purple"
                borderRadius="lg"
                fontWeight="normal"
                h="42px"
              />
            </InputGroup>

            <Button
              onClick={toggleLanguage}
              variant="outline"
              borderColor="brand.purple"
              color="brand.purple"
              size="md"
              fontWeight="normal"
              _hover={{ bg: "#8C19D2", color: "white" }}
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
              fontSize="3xl"
              fontWeight="semibold"
              cursor="pointer"
              fontFamily="Nunito, sans-serif"
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
              _hover={{ bg: "#8C19D2", color: "white" }}
              borderRadius="md"
            >
              {i18n.language === "pt" ? "EN" : "PT"}
            </Button>
          </HStack>

          <InputGroup>
            <InputLeftElement pointerEvents="none" h="100%">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("search.placeholder")}
              focusBorderColor="brand.purple"
              borderRadius="lg"
              fontWeight="normal"
              h="42px"
            />
          </InputGroup>
        </VStack>
      </Box>
    </Box>
  );
}
