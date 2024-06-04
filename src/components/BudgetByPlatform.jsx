import { Box, Heading, VStack, HStack, Text, Progress } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaGoogle, FaTiktok, FaMicrosoft } from "react-icons/fa";

const BudgetByPlatform = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Budget by Platform</Heading>
      <VStack spacing={4} align="start">
        <HStack w="full" justify="space-between">
          <HStack>
            <FaFacebook />
            <Text>Remaining: $12,345</Text>
          </HStack>
          <Progress value={60} size="sm" colorScheme="green" w="50%" />
        </HStack>
        <HStack w="full" justify="space-between">
          <HStack>
            <FaTwitter />
            <Text>Remaining: $1,543</Text>
          </HStack>
          <Progress value={86} size="sm" colorScheme="green" w="50%" />
        </HStack>
        <HStack w="full" justify="space-between">
          <HStack>
            <FaGoogle />
            <Text>Remaining: $5,678</Text>
          </HStack>
          <Progress value={67} size="sm" colorScheme="green" w="50%" />
        </HStack>
        <HStack w="full" justify="space-between">
          <HStack>
            <FaTiktok />
            <Text>Remaining: $3,456</Text>
          </HStack>
          <Progress value={21} size="sm" colorScheme="red" w="50%" />
        </HStack>
        <HStack w="full" justify="space-between">
          <HStack>
            <FaMicrosoft />
            <Text>Remaining: $2,098</Text>
          </HStack>
          <Progress value={35} size="sm" colorScheme="yellow" w="50%" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default BudgetByPlatform;