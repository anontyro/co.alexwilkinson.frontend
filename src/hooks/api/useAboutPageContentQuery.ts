export type AboutSectionItem = {
  id: string;
  title: string;
  subTitle: string;
  body: string;
};

export type AboutSection = {
  id: string;
  title: string;
  contents: AboutSectionItem[];
};

export type AboutPageData = {
  title: string;
  content: string;
  sections: AboutSection[];
};
