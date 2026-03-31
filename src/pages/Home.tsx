import {
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
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
      gap={8}
      px={4}
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        bgGradient="linear(to-r, brand.blue, brand.purple)"
        bgClip="text"
        border="2px solid"
        borderColor="gray.200"
        px={8}
        py={4}
      >
        Search d_evs
      </Text>

      <InputGroup size="lg" maxW="500px" w="100%">
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
          pr="110px"
        />
        <Button
          onClick={handleSearch}
          bg="brand.purple"
          color="white"
          _hover={{ bg: "#6a28a8" }}
          position="absolute"
          right={0}
          top={0}
          h="100%"
          borderLeftRadius={0}
          borderRightRadius="md"
          px={6}
          zIndex={1}
        >
          {t("search.button")}
        </Button>
      </InputGroup>
    </Box>
  );
}
