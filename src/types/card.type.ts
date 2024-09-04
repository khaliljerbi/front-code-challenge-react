export interface CardItem {
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: {
    url: string;
    alt: string;
    type: string;
  };
  cta?: {
    url: string;
    text: string;
    ariaLabel: string;
    target: string;
  };
  type?: string;
}

export interface CardList {
  type: string;
  title: string;
  cards: CardItem[];
}
