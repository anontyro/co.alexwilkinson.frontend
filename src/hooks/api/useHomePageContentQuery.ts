import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";

import ContentType from "@/api/types/ContentType";
import { getData } from "@/utils/api/getPageContent";

type HomePageData = {
  title: string;
  content: string;
};

/**
 * function that is used to get data from the github branch of static JSON data
 * branch: content/main
 * data should be updated there if new data is needed
 * @returns
 */
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
