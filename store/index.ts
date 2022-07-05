import { Context } from "@nuxt/types";
import {
  getAccessorType,
  mutationTree,
  actionTree,
  getterTree,
} from "typed-vuex";

// Import all your submodules
import * as system from "~/store/system";

export const state = () => ({
  counter: 0 as number,
});

export type RootState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  setCounter(state, value: number) {
    state.counter = value;
  },

  initialiseStore() {
    console.log("initialised");
  },
});

export const getters = getterTree(state, {
  justCounter: (state) => state.counter,
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    setInitialCounter({ state }, initValue: number) {
      this.app.$accessor.setCounter(initValue);
    },

    increment({ commit, dispatch, getters, state }) {
      this.app.$accessor.setCounter(state.counter++);
    },
    decrement({ commit, dispatch, getters, state }) {
      this.app.$accessor.setCounter(state.counter--);
    },

    // nuxt server init
    async nuxtServerInit(_vuexContext, nuxtContext: Context) {},
  }
);

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,

  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    system,
  },
});
