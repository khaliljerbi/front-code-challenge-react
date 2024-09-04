import { Box } from "@chakra-ui/react";

import CardGrid from "@/components/card-grid";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <Box>
      <Banner />
      <CardGrid />
    </Box>
  );
}
