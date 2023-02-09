import { PostContent } from "@/api/types/PostContent";
import { PageContentResponse, PostContentResponse } from "@/api/types/Response";

export const getPostData = async (uri: string): Promise<PostContent> => {
  const response = await fetch(`/api/${uri}`);
  const json: PostContentResponse = await response.json();

  if (json.errors.length > 0) {
    throw new Error(json.errors[0]);
  }

  return json.data.posts;
};
