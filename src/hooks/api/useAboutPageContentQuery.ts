import ContentType from "@/api/types/ContentType";
import { getData } from "@/utils/api/getPageContent";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

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
