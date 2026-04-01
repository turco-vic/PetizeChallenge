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
      bg="#FCFCFC"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pt="8vh"
      pb="4vh"
      px={{ base: 4, md: 8 }}
    >
      <Text
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight="semibold"
        textAlign="center"
        whiteSpace="nowrap"
        mb={4}
        fontFamily="Nunito, sans-serif"
      >
        <Box as="span" color="brand.blue">Search </Box>
        <Box as="span" color="brand.purple">d_evs</Box>
      </Text>

      <HStack maxW="600px" w="100%" spacing={7} mt={7}>
        <InputGroup flex={1}>
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
            h="40px"
            fontSize="md"
          />
        </InputGroup>

        <Button
          onClick={handleSearch}
          bg="brand.purple"
          color="white"
          h="40px"
          minW={{ base: "120px", md: "150px" }}
          px={{ base: 4, md: 8 }}
          fontWeight="normal"
          _hover={{ bg: "#8C19D2" }}
          borderRadius="md"
          flexShrink={0}
          fontSize="md"
        >
          {t("search.button")}
        </Button>
      </HStack>
    </Box>
  );
}
