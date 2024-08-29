import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";

import ContentType from "@/api/types/ContentType";
import { getData } from "@/utils/api/getPageContent";

export type AboutPageData = {
  header: {
    title: string;
    content: string;
  };
  myValues: AboutSectionItem[];
};

export type AboutSectionItem = {
  id: string;
  title: string;
  subTitle: string;
  body: string;
};

export type AboutSection = {
  id: string;
  title: string;
  contents: AboutSectionItem[];
};

const mapMyValueData = (myValues: ContentType[]): AboutSectionItem[] => {
  return myValues.map((myValue) => {
    return {
      id: findDataString(myValue.content, "Id"),
      title: findDataString(myValue.content, "Title"),
      subTitle: findDataString(myValue.content, "SubTitle"),
      body: findDataString(myValue.content, "Body"),
    };
  });
};

/**
 * function that is used to get data from the github branch of static JSON data
 * branch: content/main
 * data should be updated there if new data is needed
 * @returns
 */
const getAboutData = async (): Promise<AboutPageData> => {
  const response = await getData("about");
  const header = findDataByType<ContentType>(response.content, "TextBlock");
  const myValuesData = findDataByType<ContentType>(
    response.content,
    "StandardList",
    "my values"
  );

  return {
    header: {
      title: findDataString(header?.content, "Title"),
      content: findDataString(header?.content, "Body"),
    },
    myValues: mapMyValueData(myValuesData?.content as ContentType[]),
  };
};

export const useAboutPageContentQuery = (): UseQueryResult<
  AboutPageData,
  Error
> =>
  useQuery({
    queryKey: ["data", "about"],
    queryFn: getAboutData,
  });
