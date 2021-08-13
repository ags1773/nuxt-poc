<template>
  <div>
    <Header />
    <Nuxt />
    <LazyFooter />
  </div>
</template>

<style>
:root {
  --primary-color: rgb(196, 33, 60);
  --white: #fff;
  
  /* Spacing */
  --spacing-xxs: 4px;
  --spacing-xs: 8px;
  --spacing-s: 12px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  /* Line height */
  --lh-1: 1;
  --lh-2: 1.2;
  --lh-3: 1.3;
  --lh-4: 1.4;
  --lh-5: 1.5;
}
html, body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
