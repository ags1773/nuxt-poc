import webpack from 'webpack'

export default {
  modules: ["@nuxt/http", '@nuxtjs/proxy'],
  target: "server", // 'server' (default) or 'static'
  components: [
    { path: "~/components" },
    { path: "~/components/atoms" },
    { path: "~/components/molecules" },
  ],
  http: {
    baseURL: "https://www.mumbaitak.in",
    proxy: true
  },
  loading: {
    color: '#276749',
    height: '5px'
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _get: ['lodash', 'get']
      })
    ]
  }
};
