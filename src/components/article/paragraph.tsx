import { ArticleParagraph } from "@/types/article.type";
import { Container, Heading } from "@chakra-ui/react";
import DOMPurify from "isomorphic-dompurify";

interface ParagraphProps extends ArticleParagraph {}

const Paragraph = ({ highlight, text }: ParagraphProps) => {
  return highlight ? (
    <Heading
      as="h1"
      fontSize={{ base: "xl", md: "2xl", xl: "3xl" }}
      fontWeight="400"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text as string) }}
    />
  ) : (
    <Container maxW={{ base: "350px", md: "600px", xl: "954px" }}>
      <Heading
        as="h6"
        size={{ base: "xs", md: "sm", xl: "md" }}
        fontWeight="400"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text as string) }}
      />
    </Container>
  );
};

export default Paragraph;
