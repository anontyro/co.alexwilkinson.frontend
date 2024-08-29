import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";

import ContentType from "@/api/types/ContentType";
import { getData } from "@/utils/api/getPageContent";

type ResumePageData = {
  header: {
    title: string;
    content: string;
  };
  workExperience: WorkExpItem[];
};

type WorkExpCompany = {
  name: string;
  location: string;
  url: string | null;
  description: string;
};

export type WorkExpItem = {
  id: string;
  title: string;
  company: WorkExpCompany;
  meta: {
    tags?: string[];
  };
  dates: {
    start: string;
    end?: string | null;
  };
  responsibilities: string[];
};

const mapCompanyData = (company: ContentType | null): WorkExpCompany => {
  const output: Partial<WorkExpCompany> = {
    name: undefined,
    location: undefined,
    url: null,
    description: undefined,
  };

  if (company === null) {
    return output as WorkExpCompany;
  }

  for (const textBlock of company.content) {
    const title = findDataString((textBlock as ContentType)?.content, "Title");
    const body = findDataString((textBlock as ContentType)?.content, "Body");
    switch (title) {
      case "name":
        output.name = body;
        break;
      case "location":
        output.location = body;
        break;
      case "url":
        output.url = body;
        break;
      case "description":
        output.description = body;
        break;
    }
  }

  return output as WorkExpCompany;
};

const mapResponsabilities = (
  responsabilities: ContentType | null
): string[] => {
  const output: string[] = [];

  if (responsabilities === null) {
    return output;
  }

  for (const textBlock of responsabilities.content) {
    const body = findDataString((textBlock as ContentType)?.content, "Body");
    output.push(body);
  }

  return output;
};

const mapWorkExperienceData = (
  workExperience: ContentType[] = []
): WorkExpItem[] => {
  return workExperience.map((workExp) => {
    const companyData = findDataByType<ContentType>(
      workExp.content,
      "TextList",
      "company"
    );
    const dates = findDataByType<ContentType>(workExp.content, "Dates");

    const responsibilities = findDataByType<ContentType>(
      workExp.content,
      "TextList",
      "responsibilities"
    );

    return {
      id: findDataString(workExp.content, "Id"),
      title: findDataString(workExp.content, "Title"),
      company: mapCompanyData(companyData),
      meta: {
        ...workExp.meta,
      },
      dates: {
        start: findDataString(dates?.content, "Date", "Start Date"),
        end: findDataString(dates?.content, "Date", "End Date"),
      },
      responsibilities: [...mapResponsabilities(responsibilities)],
    };
  });
};

const getResumePageData = async (): Promise<ResumePageData> => {
  const response = await getData("resume");
  const header = findDataByType<ContentType>(response.content, "TextBlock");
  const workExperienceData = findDataByType<ContentType>(
    response.content,
    "StandardList"
  );

  const output = {
    header: {
      title: findDataString(header?.content, "Title"),
      content: findDataString(header?.content, "Body"),
    },
    workExperience: [
      ...mapWorkExperienceData(workExperienceData?.content as ContentType[]),
    ],
  };

  return output;
};

export const useResumePageContentQuery = (): UseQueryResult<
  ResumePageData,
  Error
> =>
  useQuery({
    queryKey: ["data", "resume"],
    queryFn: getResumePageData,
  });
