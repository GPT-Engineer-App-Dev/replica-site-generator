import { Box, Input, InputGroup, InputLeftElement, IconButton, HStack, Avatar } from "@chakra-ui/react";
import { FaSearch, FaCog, FaBell, FaEnvelope } from "react-icons/fa";

const TopNav = () => {
  return (
    <Box bg="white" w="full" p={4} boxShadow="sm" position="fixed" top="0" left="250px" right="0" zIndex="1000">
      <HStack spacing={4} justify="space-between">
        <InputGroup w="300px">
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
        <HStack spacing={4}>
          <IconButton aria-label="Settings" icon={<FaCog />} />
          <IconButton aria-label="Notifications" icon={<FaBell />} />
          <IconButton aria-label="Messages" icon={<FaEnvelope />} />
          <Avatar name="User" src="https://bit.ly/broken-link" />
        </HStack>
      </HStack>
    </Box>
  );
};

export default TopNav;