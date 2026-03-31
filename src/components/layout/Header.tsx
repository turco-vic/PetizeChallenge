import {
  Box,
  HStack,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
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
    <Box px={8} py={4} bg="white">
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
        </HStack>
      </HStack>
    </Box>
  );
}
