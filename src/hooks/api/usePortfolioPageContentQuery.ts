import ContentType from "@/api/types/ContentType";
import { getData } from "@/utils/api/getPageContent";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type PortfolioPageData = {
  header: {
    title: string;
    content: string;
  };
  myProjects: any[];
  myTalks: any[];
};

const mapProjectData = (projects: ContentType[]) => {
  return projects.map((project) => {
    return {
      title: findDataString(project.content, "Title"),
      id: findDataString(project.content, "Id"),
      description: findDataString(project.content, "Body"),
      image: findDataString(project.content, "Images"),
      meta: {
        ...project.meta,
        location: findDataString(project.content, "GeoLocation"),
      },
    };
  });
};

const mapTalksData = (talks: ContentType[]) => {
  return talks.map((talk) => {
    return {
      title: findDataString(talk.content, "Title"),
      eventName: findDataString(talk.content, "EventName"),
      id: findDataString(talk.content, "Id"),
      date: findDataString(talk.content, "Date"),
      image: findDataString(talk.content, "Images"),
      meta: {
        ...talk.meta,
        location: findDataString(talk.content, "GeoLocation"),
      },
    };
  });
};

const getPortfolioData = async (): Promise<PortfolioPageData> => {
  const response = await getData("portfolio");
  const header = findDataByType<ContentType>(response.content, "TextBlock");
  const myProjectData = findDataByType<ContentType>(
    response.content,
    "StandardList"
  );
  const myTalkData = findDataByType<ContentType>(response.content, "VideoList");
  return {
    header: {
      title: findDataString(header?.content, "Title"),
      content: findDataString(header?.content, "Body"),
    },
    myProjects: mapProjectData(myProjectData?.content as ContentType[]),
    myTalks: mapTalksData(myTalkData?.content as ContentType[]),
  };
};

export const usePortfolioPageContentQuery = (): UseQueryResult<
  PortfolioPageData,
  Error
> => useQuery({ queryKey: [`data`, "portfolio"], queryFn: getPortfolioData });
