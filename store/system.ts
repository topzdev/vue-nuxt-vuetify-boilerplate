import { actionTree, mutationTree } from "typed-vuex";

type DialogButtonsCallback = {
  hideDialog: () => void;
};

type DialogButtonsFunction = (cb: DialogButtonsCallback) => void;

export type AppDialogConfig = {
  show: boolean;
  title: string;
  message: string;
  button?: {
    yesLabel?: string;
    noLabel?: string;
    showNo?: boolean;
    showYes?: boolean;
    preventDefault?: boolean;
    spaceBetween?: boolean;
    yesFunction?: DialogButtonsFunction;
    noFunction?: DialogButtonsFunction;
  };
};

const defaultAppDialog: AppDialogConfig = {
  show: false,
  title: "",
  message: "",
  button: {
    yesLabel: "",
    noLabel: "",
    showNo: true,
    showYes: true,
    preventDefault: false,
    spaceBetween: false,
    yesFunction: undefined,
    noFunction: undefined,
  },
};

type AppSnackbarConfig = {
  show: boolean;
  message: string;
  color: "success" | "error" | "primary" | string;
  timeout?: number;
};

const defaultAppSnackbar: AppSnackbarConfig = {
  show: false,
  message: "",
  color: "",
  timeout: -1,
};

export const state = () => ({
  app: {
    dialog: Object.assign({}, defaultAppDialog),
    snackbar: Object.assign({}, defaultAppSnackbar),
  },
});

export const mutations = mutationTree(state, {
  setAppDialog(state, payload) {
    state.app.dialog = payload;
  },
  setAppSnackbar(state, payload) {
    state.app.snackbar = payload;
  },
});

export const actions = actionTree(
  { state, mutations },
  {
    async showAppDialog({ commit }, _config: AppDialogConfig) {
      console.log("Hello?", _config);
      commit("setAppDialog", _config);
    },

    async resetAppDialog({ commit }) {
      commit("setAppDialog", defaultAppDialog);
    },

    async showSnackbar({ commit }, _config: AppSnackbarConfig) {
      commit("setAppSnackbar", _config);
    },

    async resetSnackbar({ commit }) {
      commit("setAppSnackbar", Object.assign({}, defaultAppSnackbar));
    },
  }
);
