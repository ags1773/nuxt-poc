- `nuxt.config.js` is where the entire app config resides. Even config for additional modules is done here
- all components/layouts etc need to be inside `<template></template>`
- put static assets (images) in `static` dir
- do not use latest sass-loader. Use v10 otherwise nuxt cli complains


#### Load More strategy:
```
Main (home collection)
|-- FourCollGrid (news)
|-- TwoColFourStories (entertainment)
```
- `Main` will fetch just the `home` collection. It will pass down collection slugs to `FourCollGrid` & `OneColFourStories`
- `FourCollGrid` will call the collection `news`. It knows it can display 8 stories initially so it will apply `limit=8` in API call
- on clicking `load more`, it will fetch `limit=4&offset=4`; then `limit=4&offset=8` so on
- similarly `TwoColFourStories` (the 1st row on Mumbaitak homepage) will initially fetch 4 stories, then 4 more on load more 
