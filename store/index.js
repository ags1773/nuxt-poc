export const state = () => ({
  config: null,
});

export const mutations = {
  setConfig(state, config) {
    if (!state.config) state.config = config;
  }
};

export const actions = {
  fetchConfig (context, config) {
    context.commit("setConfig", config)
  }
}