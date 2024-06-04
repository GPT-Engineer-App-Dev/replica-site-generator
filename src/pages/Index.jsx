import { Box, Container } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import MarketingSection from "../components/MarketingSection";
import TrafficSource from "../components/TrafficSource";
import BudgetByPlatform from "../components/BudgetByPlatform";

const Index = () => {
  return (
    <Box>
      <Sidebar />
      <TopNav />
      <Container maxW="container.xl" ml="250px" pt="80px">
        <MarketingSection />
        <TrafficSource />
        <BudgetByPlatform />
      </Container>
    </Box>
  );
};

export default Index;