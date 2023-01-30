export type DataParentType =
  | "Hero"
  | "TextBlock"
  | "StandardList"
  | "VideoList";

export type DataType =
  | DataParentType
  | "Title"
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
  content: string | ContentType[];
  meta?: {
    url: string | null;
    tags: string[];
  };
};

export default ContentType;
