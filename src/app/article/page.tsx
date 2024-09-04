"use client";

import Hero from "@/components/article/hero";
import Paragraph from "@/components/article/paragraph";
import CaptionCarousel from "@/components/carousel";
import article from "@/data/article.json";
import { Stack } from "@chakra-ui/react";

const page = () => {
  const highlitedParagph = article.content.find(
    (item) => item.type === "PARAGRAPH" && item.highlight
  );
  const regularParagraph = article.content.find(
    (item) => item.type === "PARAGRAPH" && !item.highlight
  );
  return (
    <Stack gap="80px">
      <Hero />
      <Paragraph highlight text={highlitedParagph?.text as string} />
      <Paragraph text={regularParagraph?.text as string} />
      <CaptionCarousel />
      <Paragraph text={regularParagraph?.text as string} />
    </Stack>
  );
};

export default page;
