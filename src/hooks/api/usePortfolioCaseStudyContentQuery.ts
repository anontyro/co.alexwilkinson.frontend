import { getData } from "@/utils/api/getPageContent";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const getPortfolioCaseStudyData = async (slug: string) => {
  const response = await getData(`portfolio/${slug}`);

  return null;
};

export const usePortfolioCaseStudContentQuery = (
  slug: string
): UseQueryResult<any, Error> =>
  useQuery({
    queryKey: ["data", "portfolio", slug],
    queryFn: () => getPortfolioCaseStudyData(slug),
  });
