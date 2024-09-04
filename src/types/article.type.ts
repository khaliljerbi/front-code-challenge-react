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

export interface CarouselItem {
  url: string;
  alt: string;
  description: string;
  type: string;
}

export interface ArticleParagraph {
  text: string;
  type?: string;
  highlight?: boolean;
}
