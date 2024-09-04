export interface ArticleHero {
  type: string;
  title: string;
  subtitle: string;
  author: string;
  publishingDate: string;
  backgroundAsset: {
    url: string;
    alt: string;
    type: string;
  };
  sideAsset: {
    url: string;
    alt: string;
    type: string;
  };
}
