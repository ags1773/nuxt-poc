import webpack from "webpack";

const sketchesHost = "https://www.barandbench.com";

export default {
  modules: ["@nuxt/http", "@nuxtjs/proxy"],
  target: "server", // 'server' (default) or 'static'
  components: [
    { path: "~/components" },
    { path: "~/components/atoms" },
    { path: "~/components/molecules" },
  ],
  http: {
    // prefix: sketchesHost,
    // baseURL: sketchesHost,
    // browserBaseURL: sketchesHost, // FE shouldn't call sketches directly, it should call through backend
    proxy: true,
  },
  proxy: [`${sketchesHost}/api/v1/**/*`], // proxies /api/v1 requests to sketches
  loading: {
    color: "#276749",
    height: "5px",
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _get: ["lodash", "get"],
      }),
    ],
  },
  plugins: ["~/plugins/http"],
  server: {
    port: process.env.PORT || 3000,
  },
};
