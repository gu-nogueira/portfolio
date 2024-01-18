type PrismicUrl = {
  url?: string | undefined;
  target?: string | undefined;
};

type PrismicRichText = {
  text?: string | undefined;
};

export type PrismicProject = {
  id?: string | undefined;
  title?: string | undefined;
  description?: PrismicRichText[] | undefined;
  projectUrl?: PrismicUrl;
  imageUrl?: string;
  alt?: string | undefined;
  sourceCode?: PrismicUrl;
  tags?: string[];
};

export type PrismicData = {
  projects: PrismicProject[];
};
