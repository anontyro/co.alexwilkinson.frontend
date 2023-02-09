import PageContent from "./PageContent";
import { GhostPost, PostContent } from "./PostContent";

export type PageContentResponse = {
  data: {
    pageContent: PageContent;
  };
  errors: string[];
};

export type PostContentResponse = {
  data: {
    posts: GhostPost[];
  };
  errors: string[];
};
