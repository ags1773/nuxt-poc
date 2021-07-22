## Views:

A Nuxt app has a fixed directory structure. _pages_, _layouts_ etc. are directories that may be present in the root dir and Nuxt provides special functions for stuff that's inside these directories

- **pages**:

  - a vue component for which Nuxt provides special attrs & functions for eg. `head()` for adding seo tags to html head
  - nuxt generates vue-router config based on the files inside the _pages_ directory

- **layouts**:

  - used to change look & feel of page. Eg. if you want a different layout on mobile or for say a video story that needs a particular layout
  - `layouts/default.vue` is used on all pages when no layout is explicitly specified
  - you need to include a `<Nuxt />` component that'll render the page content

- **app.html**: this optional file is where nuxt injects all content. create it if you need to change the html content, which you rarely need to do

## Concepts:

- **SSR** (server-side rendering):

  - needs node server
  - page is fully rendered on server and sent to browser. On the client-side, the browser uses the JS bundle to _hydrate_ i.e. it takes the static html sent by the server and turns it into a dynamic DOM that can react to client-side data changes. `data-server-rendered` attribute is added
  - the client sends initial request. This hits the node server which returns HTML with results from executed functions, e.g. `asyncData`, `nuxtServerInit` or `fetch`. Hooks functions are executed as well
  - the client receives this html alongwith the JS bundle using which it _hydrates_ and makes the app reactive
  - in app navigation using `<NuxtLink>` is done fully client side, so these requests won't hit the server unless the user reloads the page

- **SSG** (static site generation):
  - does not need node server. App can be served directly from a CDN or static hosting services like github pages, Vercel
  - unlike SSR where the page is rendered when a client requests hits the server, in SSG the app is rendered at build time.
  - all `.vue` files are generated into html, js.
  - all API calls are made and results are cached in the `static` dir
  - so when a client requests a page, the request hits the CDN which returns html, js and static assets
  - the client then starts _hydrating_ the page and makes it reactive (like SSR)
  - in-app navigation using `<NuxtLink` is done client side, just like in SSR
  - pages excluded from generation using `generate.exclude` will not exist on CDN and will be fully client-side rendered
  - when there's new data available from API, the site will need to be regenerated
