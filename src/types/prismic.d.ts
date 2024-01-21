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
  builtAt?: string | undefined;
  tags?: string[];
};

export type PrismicExperience = {
  id?: string | undefined;
  title?: string | undefined;
  description?: PrismicRichText[] | undefined;
  company?: string | undefined;
  location?: string | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
};

export type PrismicEducation = {
  id?: string | undefined;
  title?: string | undefined;
  institution?: string | undefined;
  location?: string | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
};
