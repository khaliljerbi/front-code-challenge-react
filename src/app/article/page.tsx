import { Metadata } from "next";
import Hero from "@/components/article/hero";
import article from "@/data/article.json";
import { Stack } from "@chakra-ui/react";
import Details from "@/components/article/details";


export const metadata: Metadata = {
  title: article.title,
  keywords: article.keywords
};

const page = () => {


  return (
    <Stack gap="80px">
      <Hero />
      <Details />
    </Stack>
  );
};

export default page;
