type PageRoute = {
  title: string;
  route: string;
  icon: string;
  exact?: boolean;

  subpages?: {
    [key: string]: PageRoute;
  };
};
type PageRoutes = {
  [key: string]: PageRoute;
};

const pageRoutes = {
  index: {
    title: "Dashboard",
    to: "/",
    icon: "mdi-apps",
    exact: true,
  },

  playground: {
    title: "Playground",
    to: "/playground",
    icon: "mdi-slide",
    exactPath: true,
  },

  settings: (function () {
    const parentPath = "/settings";

    return {
      title: "Settings",
      to: `${parentPath}/general`,
      icon: "mdi-cog",
      exact: true,

      subpages: {
        general: {
          title: "General",
          to: `${parentPath}/general`,
          icon: "mdi-information-outline",
          color: "primary",
        },
        account: {
          title: "Account",
          to: `${parentPath}/account`,
          icon: "mdi-account",
          color: "primary",
        },
      },
    };
  })(),
};

export default pageRoutes;
