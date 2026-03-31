import {
  Box,
  HStack,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
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
    <Box
      px={8}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
    >
      <HStack justify="space-between">
        <Box
          fontWeight="bold"
          fontSize="xl"
          bgGradient="linear(to-r, brand.blue, brand.purple)"
          bgClip="text"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Search d_evs
        </Box>

        <HStack>
          <InputGroup size="md" w="300px">
            <InputLeftElement pointerEvents="none" color="gray.400">
              🔍
            </InputLeftElement>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("search.placeholder")}
              focusBorderColor="brand.purple"
              borderRadius="md"
            />
          </InputGroup>
          <Button
            onClick={handleSearch}
            bg="brand.purple"
            color="white"
            _hover={{ bg: "#6a28a8" }}
          >
            {t("search.button")}
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
