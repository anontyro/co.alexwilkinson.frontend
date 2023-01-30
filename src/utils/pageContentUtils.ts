import ContentType, { DataParentType, DataType } from "@/api/types/ContentType";

export const findDataByType = <T>(
  pageContent: ContentType[] | string | undefined,
  type: DataType
): T | null => {
  if (!pageContent || typeof pageContent === "string") {
    return null;
  }
  for (const item of pageContent) {
    if (item.type === type) {
      return item as T;
    }
  }
  return null;
};

export const findDataString = (
  pageContent: ContentType[] | string | undefined,
  type: DataType
): string => {
  const data = findDataByType<ContentType>(pageContent, type);
  return (data?.content as string) ?? "";
};
