import content from "@/data/index.json";
import { CardList } from "@/types/card.type";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";

export const useCardGrid = (): { cardGrid: CardList } => {
  return {
    cardGrid: content.content.find(
      (x) => x.type === SECTION_TYPE.CARD_GRID
    ) as CardList,
  };
};
