import PageContent from "./PageContent";

export type PageContentResponse = {
  data: {
    pageContent: PageContent;
  };
  errors: string[];
};
