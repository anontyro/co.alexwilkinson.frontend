import { GhostPost, PostContent } from "@/api/types/PostContent";
import { getPostData } from "@/utils/api/getPostContent";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

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
