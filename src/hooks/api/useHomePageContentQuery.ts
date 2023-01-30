import ContentType from "@/api/types/ContentType";
import { getData } from "@/utils/api/getPageContent";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type HomePageData = {
  title: string;
  content: string;
};

const getHomeData = async (): Promise<HomePageData> => {
  const response = await getData("home");
  const hero = findDataByType<ContentType>(response.content, "Hero");
  if (hero) {
    return {
      title: findDataString(hero.content, "Title"),
      content: findDataString(hero.content, "Body"),
    };
  }

  return {
    title: "",
    content: "",
  };
};

export const useHomePageContentQuery = (): UseQueryResult<
  HomePageData,
  Error
> => useQuery({ queryKey: [`data`, "home"], queryFn: getHomeData });
