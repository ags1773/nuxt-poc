export const state = () => ({
  config: null,
});

export const mutations = {
  setConfig(state, config) {
    state.config = config;
  },
};

export const actions = {
  async FETCH_CONFIG({ commit, state }) {
    if (!state.config) {
      const config = await this.$http.$get("/api/v1/config");
      commit("setConfig", config);
    }
  },
  // async nuxtServerInit({ dispatch }, { req }) {
  //   console.log("**** req >> ", req);
  //   await dispatch("FETCH_CONFIG");
  // },
};
