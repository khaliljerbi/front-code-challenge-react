import { Metadata } from "next";
import Hero from "@/components/article/hero";
import Paragraph from "@/components/article/paragraph";
import CaptionCarousel from "@/components/carousel";
import article from "@/data/article.json";
import { Stack } from "@chakra-ui/react";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";


export const metadata: Metadata = {
  title: article.title,
  keywords: article.keywords
};

const page = () => {
  const highlitedParagph = article.content.find(
    (item) => item.type === SECTION_TYPE.PARAGRAPH && item.highlight
  );
  const regularParagraph = article.content.find(
    (item) => item.type === SECTION_TYPE.PARAGRAPH && !item.highlight
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
