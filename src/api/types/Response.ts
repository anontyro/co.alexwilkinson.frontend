import PageContent from "./PageContent";
import { PostContent } from "./PostContent";

export type PageContentResponse = {
  data: {
    pageContent: PageContent;
  };
  errors: string[];
};

export type PostContentResponse = {
  data: {
    posts: PostContent;
  };
  errors: string[];
};
