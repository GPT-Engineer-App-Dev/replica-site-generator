import { Box, VStack, Text, Button, Icon, Divider } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaBriefcase, FaProjectDiagram, FaUserFriends, FaMobileAlt, FaRocket, FaCogs, FaFileAlt, FaAppStore, FaFile, FaUsers, FaBook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="gray.100" w="250px" p={4} h="100vh" position="fixed">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        <Icon as={FaRocket} mr={2} /> Brutalism
      </Text>
      <VStack align="start" spacing={4}>
        <Button variant="ghost" leftIcon={<FaChartLine />}>Marketing</Button>
        <Button variant="ghost" leftIcon={<FaChartPie />}>Analytics</Button>
        <Button variant="ghost" leftIcon={<FaBriefcase />}>Business</Button>
        <Button variant="ghost" leftIcon={<FaProjectDiagram />}>Project</Button>
        <Button variant="ghost" leftIcon={<FaUserFriends />}>HRM</Button>
        <Button variant="ghost" leftIcon={<FaMobileAlt />}>Mobile App</Button>
        <Button variant="ghost" leftIcon={<FaRocket />}>Landingpage</Button>
        <Button variant="ghost" leftIcon={<FaCogs />}>Components</Button>
        <Button variant="ghost" leftIcon={<FaFileAlt />}>Pages</Button>
        <Button variant="ghost" leftIcon={<FaAppStore />}>Apps</Button>
        <Button variant="ghost" leftIcon={<FaFile />}>Content</Button>
        <Button variant="ghost" leftIcon={<FaUsers />}>Users</Button>
        <Button variant="ghost" leftIcon={<FaBook />}>Documentation</Button>
      </VStack>
      <Divider my={6} />
      <Box mt="auto">
        <Text mb={4}>Are you looking for more features? Check out our Pro version.</Text>
        <Button colorScheme="green" w="full">Upgrade Now</Button>
      </Box>
    </Box>
  );
};

export default Sidebar;