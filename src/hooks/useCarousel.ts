import article from "@/data/article.json";
import { CarouselItem } from "@/types/article.type";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";

export const useCarousel = (): { cards: CarouselItem[] } => {
  return {
    cards: article.content.find((item) => item.type === SECTION_TYPE.CAROUSEL)
      ?.items as CarouselItem[],
  };
};
