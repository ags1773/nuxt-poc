export default {
  modules: ["@nuxt/http"],
  target: "server", // 'server' (default) or 'static'
  components: true, // auto import components
  http: {
    baseURL: "https://www.mumbaitak.in",
  },
};
