export const APP_HOME = "/";

type AppRoutes = {
  [key: string]: AppRouteItem;
};

type AppRouteItem = {
  path: string;
  text: string;
  isExternal?: boolean;
};

export const APP_ROUTES: AppRoutes = {
  BLOG: {
    path: "https://blog.alexwilkinson.co/",
    isExternal: true,
    text: "Blog",
  },
  PORTFOLIO: {
    path: "/portfolio",
    text: "Portfolio",
  },
  RESUME: {
    path: "/resume",
    text: "Resume",
  },
  ABOUT: {
    path: "/about",
    text: "About",
  },
};
