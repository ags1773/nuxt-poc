export const state = () => ({
  config: null,
  pbConfig: null,
});

export const mutations = {
  setConfig(state, config) {
    state.config = config;
  },
  setPbConfig(state, pbConfig) {
    state.pbConfig = pbConfig;
  },
};

export const actions = {
  async FETCH_CONFIG({ commit, state }, opts) {
    try {
      if (!state.config) {
        const config = await this.$client.getConfig();
        if (config) commit("setConfig", config);
        else throw new Error("Error fetching /api/v1/config");
      }
      if (!state.pbConfig) {
        const pbConfig = await this.$client.getPbConfig(opts.publisherId);
        if (pbConfig) commit("setPbConfig", pbConfig.config);
        else throw new Error(`Error fetching pagebuilder config`);
      }
    } catch (e) {
      console.log(e);
    }
  },
  // async nuxtServerInit({ dispatch }, { req }) {
  //   console.log("**** req >> ", req);
  //   await dispatch("FETCH_CONFIG");
  // },
};
