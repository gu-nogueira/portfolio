type PrismicUrl = {
  url?: string | undefined;
  target?: string | undefined;
};

export type PrismicProject = {
  id?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  projectUrl?: PrismicUrl;
  imageUrl?: string;
  alt?: string | undefined;
  sourceCode?: PrismicUrl;
  tags?: string[] | undefined;
};

export type PrismicData = {
  projects: PrismicProject[];
};
