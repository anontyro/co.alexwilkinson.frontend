// All data is stored on the remote GitHub branch that should be checked out and updated as required
// Branch: content/main

type DataType = "home" | "about" | "resume" | "portfolio";

const makeApiRouteBase = (route: string) =>
  `https://raw.githubusercontent.com/anontyro/co.alexwilkinson.frontend${route}`;

const makeContentValue = (type: DataType) =>
  `/content/main/content/${type}-content.json`;

export const apiDataRoute = (dataType: DataType) =>
  makeApiRouteBase(makeContentValue(dataType));
