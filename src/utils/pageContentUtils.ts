import ContentType, { DataParentType, DataType } from "@/api/types/ContentType";

export const findDataByType = <T>(
  pageContent: ContentType[] | string | undefined,
  type: DataType,
  title?: string
): T | null => {
  if (!pageContent || typeof pageContent === "string") {
    return null;
  }
  for (const item of pageContent) {
    if (
      item.type === type &&
      (!title || item.title?.toLowerCase() === title.toLowerCase())
    ) {
      return item as T;
    }
  }
  return null;
};

export const findDataString = (
  pageContent: ContentType[] | string | undefined,
  type: DataType,
  title?: string
): string => {
  const data = findDataByType<ContentType>(pageContent, type, title);
  return (data?.content as string) ?? "";
};
