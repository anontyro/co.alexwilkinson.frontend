export type DataParentType =
  | "Hero"
  | "TextBlock"
  | "StandardList"
  | "TextList"
  | "VideoList"
  | "Dates";

export type DataType =
  | DataParentType
  | "Title"
  | "SubTitle"
  | "Body"
  | "StandardList"
  | "Item"
  | "GeoLocation"
  | "Id"
  | "Images"
  | "Image"
  | "EventName"
  | "Date";

type ContentType = {
  type: DataType;
  title?: string;
  content: string | ContentType[];
  meta?: {
    url: string | null;
    tags: string[];
  };
};

export default ContentType;
