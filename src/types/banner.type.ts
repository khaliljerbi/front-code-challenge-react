export interface Banner {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: {
    url: string;
    alt: string;
    type: string;
  };
  foregroundAsset: {
    url: string;
    alt: string;
    type: string;
  };
}
