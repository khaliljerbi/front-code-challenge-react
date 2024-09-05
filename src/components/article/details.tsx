"use client";
import Paragraph from "./paragraph";
import { Stack } from "@chakra-ui/react";
import CaptionCarousel from "../carousel";
import { useParagraph } from "@/hooks/useParagraph";

const Details = () => {
  const { highlightedParagraph, regularParagraph } = useParagraph();
  return (
    <Stack gap={{ base: "40px", md: "80px" }}>
      <Paragraph highlight text={highlightedParagraph?.text as string} />
      <Paragraph text={regularParagraph?.text as string} />
      <CaptionCarousel />
      <Paragraph text={regularParagraph?.text as string} />
    </Stack>
  );
};

export default Details;
