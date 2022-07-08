type PageRoute = {
  title: string;
  route: string;
  icon: string;
  exactPath?: boolean;

  subpages?: {
    [key: string]: PageRoute;
  };
};
type PageRoutes = {
  [key: string]: PageRoute;
};

const pageRoutes: PageRoutes = {
  index: {
    title: "Dashboard",
    route: "/",
    icon: "mdi-home",
    exactPath: true,
  },

  settings: (function () {
    const parentPath = "/settings";

    return {
      title: "Settings",
      route: parentPath,
      icon: "mdi-cog",
      exactPath: true,

      subpages: {
        general: {
          title: "General",
          route: `${parentPath}/general`,
          icon: "mdi-house",
        },
        account: {
          title: "Account",
          route: `${parentPath}/general`,
          icon: "mdi-account",
        },
      },
    };
  })(),
};
