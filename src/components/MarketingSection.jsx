import { Box, SimpleGrid, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Progress, Heading } from "@chakra-ui/react";

const MarketingSection = () => {
  return (
    <Box p={4} mt="80px">
      <Heading mb={4}>Marketing</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        <Stat>
          <StatLabel>Total Spend</StatLabel>
          <StatNumber>$8,765</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            -14.32%
          </StatHelpText>
          <Progress value={70} size="sm" colorScheme="green" />
        </Stat>
        <Stat>
          <StatLabel>Visitor</StatLabel>
          <StatNumber>14,321</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            +14.23%
          </StatHelpText>
          <Progress value={80} size="sm" colorScheme="green" />
        </Stat>
        <Stat>
          <StatLabel>Acquisition</StatLabel>
          <StatNumber>1,023</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            +16.73%
          </StatHelpText>
          <Progress value={60} size="sm" colorScheme="green" />
        </Stat>
        <Stat>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$18,765</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            +21.67%
          </StatHelpText>
          <Progress value={90} size="sm" colorScheme="green" />
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default MarketingSection;