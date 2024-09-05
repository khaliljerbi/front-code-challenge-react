import { Metadata } from "next";
import Hero from "@/components/article/hero";
import Paragraph from "@/components/article/paragraph";
import CaptionCarousel from "@/components/carousel";
import article from "@/data/article.json";
import { Stack } from "@chakra-ui/react";
import { useParagraph } from "@/hooks/useParagraph";


export const metadata: Metadata = {
  title: article.title,
  keywords: article.keywords
};

const page = () => {
  const { highlightedParagraph, regularParagraph } = useParagraph();

  return (
    <Stack gap="80px">
      <Hero />
      <Paragraph highlight text={highlightedParagraph?.text as string} />
      <Paragraph text={regularParagraph?.text as string} />
      <CaptionCarousel />
      <Paragraph text={regularParagraph?.text as string} />
    </Stack>
  );
};

export default page;
