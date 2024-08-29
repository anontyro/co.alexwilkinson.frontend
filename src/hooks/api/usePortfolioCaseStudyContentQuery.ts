import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { GhostPost } from "@/api/types/PostContent";
import { getPostData } from "@/utils/api/getPostContent";

/**
 * function that is used to get data from the github branch of static JSON data
 * branch: content/main
 * data should be updated there if new data is needed
 * @returns
 */
const getPortfolioCaseStudyData = async (slug: string) => {
  const response = await getPostData(`portfolio/${slug}`);

  return response;
};

export const usePortfolioCaseStudContentQuery = (
  slug: string
): UseQueryResult<GhostPost[], Error> =>
  useQuery({
    queryKey: ["data", "portfolio", slug],
    queryFn: () => getPortfolioCaseStudyData(slug),
  });
