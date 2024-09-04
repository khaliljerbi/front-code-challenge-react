import { Metadata } from "next";
import { Box } from "@chakra-ui/react";

import CardGrid from "@/components/card-grid";
import Banner from "@/components/banner";

import home from '@/data/index.json';

export const metadata: Metadata = {
  title: home.title,
  keywords: home.keywords
};

export default function Home() {
  return (
    <Box>
      <Banner />
      <CardGrid />
    </Box>
  );
}
