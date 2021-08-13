export const state = () => ({
  config: null,
});

export const mutations = {
  setConfig(state, config) {
    if (!state.config) state.config = config;
  },
};

export const actions = {
  async SET_CONFIG(context, config) {
    context.commit("setConfig", config)
  },
  // async nuxtServerInit({ dispatch }, { req }) {
  //   console.log("**** req >> ", req);
  //   await dispatch("FETCH_CONFIG");
  // },
};
