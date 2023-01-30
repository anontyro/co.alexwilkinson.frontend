import PageContent from "@/api/types/PageContent";
import { PageContentResponse } from "@/api/types/Response";

export const getData = async (uri: string): Promise<PageContent> => {
  const response = await fetch(`/api/${uri}`);
  const json: PageContentResponse = await response.json();
  return json.data.pageContent;
};
