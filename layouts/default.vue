<template>
  <FontWrapper>
    <Header />
    <Nuxt />
    <LazyFooter />
  </FontWrapper>
</template>

<style>
:root {
  /* Colors */
  --primary-color: #993266;
  --white: #fff;
  /* Shades Of Gray */
  --c-mono1: rgba(0, 0, 0, 1);
  --c-mono2: rgba(0, 0, 0, 0.9);
  --c-mono3: rgba(0, 0, 0, 0.7);
  --c-mono4: rgba(0, 0, 0, 0.6);
  --c-mono5: rgba(0, 0, 0, 0.3);
  --c-mono6: rgba(0, 0, 0, 0.2);
  --c-mono7: rgba(0, 0, 0, 0.1);

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
  /* Font Scale */
  --fs-xxs: 14px;
  --fs-xs: 16px;
  --fs-s: 18px;
  --fs-m: 20px;
  --fs-l: 24px;
  --fs-xl: 26px;
  --fs-xxl: 30px;
  --fs-big: 32px;
  --fs-huge: 40px;
  --fs-jumbo: 54px;
  /* Font Weight */
  --fw-normal: 400;
  --fw-bold: 600;
}
html,
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
