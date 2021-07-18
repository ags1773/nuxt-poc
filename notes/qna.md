#### Q. Where to fetch data?
in a normal vue app, data fetching would've been done in `mounted()` hook. But in order to make it work serverside, use Nuxt.js-specific hooks like `asyncData` and `fetch`

#### Q. How to load things only on client-side?
use `<client-only>` nuxt component

#### Q. When do *middlewares* run?
In universal mode, middlewares will be called once on server-side and on the client-side when navigating to further routes. With ssr: false, middlewares will be called on the client-side in both situations

<!-- #### Q. Where to put css?
In vue, css goes in the `.vue` file itself inside the `<style>` tags -->
