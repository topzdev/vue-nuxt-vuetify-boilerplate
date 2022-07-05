import { Plugin } from "@nuxt/types";
import { setClient } from "~/api";

const axiosPortPlugin: Plugin = ({ app }) => {
  setClient(app.$axios);
};

export default axiosPortPlugin;
