import content from "@/data/index.json";
import { Banner as BannerType } from "@/types/banner.type";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";

export const useBanner = (): { banner: BannerType } => {
  return {
    banner: content.content.find(
      (x) => x.type === SECTION_TYPE.HERO
    ) as BannerType,
  };
};
