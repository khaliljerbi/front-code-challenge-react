import article from "@/data/article.json";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";

export const useParagraph = () => {
  return {
    highlightedParagraph: article.content.find(
      (item) => item.type === SECTION_TYPE.PARAGRAPH && item.highlight
    ),
    regularParagraph: article.content.find(
      (item) => item.type === SECTION_TYPE.PARAGRAPH && !item.highlight
    ),
  };
};
