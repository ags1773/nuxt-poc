export const state = () => ({
  config: null,
});

export const mutations = {
  setConfig(state, config) {
    if (!state.config) state.config = config;
  },
};

export const actions = {
  async FETCH_CONFIG({ commit }) {
    const config = await this.$http.$get("/api/v1/config");
    commit("setConfig", config);
  },
  // async nuxtServerInit({ dispatch }, { req }) {
  //   console.log("**** req >> ", req);
  //   await dispatch("FETCH_CONFIG");
  // },
};
