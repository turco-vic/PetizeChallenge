import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      bg="#FCFCFC"
    >
      <Box
        w="full"
        maxW="520px"
        bg="white"
        borderRadius="xl"
        boxShadow="sm"
        borderWidth="1px"
        borderColor="gray.100"
        textAlign="center"
        px={{ base: 6, md: 10 }}
        py={{ base: 10, md: 12 }}
      >
        <Text
          fontSize={{ base: "7xl", md: "8xl" }}
          lineHeight="1"
          fontWeight="extrabold"
          color="brand.purple"
        >
          404
        </Text>

        <Text mt={4} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="gray.800">
          Page not found
        </Text>

        <Text mt={3} fontSize={{ base: "md", md: "lg" }} color="gray.500">
          The page you are looking for does not exist or has been moved.
        </Text>

        <Button
          mt={8}
          h="52px"
          px={8}
          w={{ base: "full", sm: "auto" }}
          bg="brand.purple"
          color="white"
          fontWeight="semibold"
          fontSize="md"
          _hover={{ bg: "#6B0BA3" }}
          borderRadius="lg"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}
