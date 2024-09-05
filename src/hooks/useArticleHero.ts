import article from "@/data/article.json";
import { ArticleHero } from "@/types/article.type";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";

export const useArticleHero = (): { hero: ArticleHero } => {
  return {
    hero: article.content.find(
      (item) => item.type === SECTION_TYPE.HERO_ARTICLE
    ) as ArticleHero,
  };
};
