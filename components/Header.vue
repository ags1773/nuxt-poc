<template>
  <header class="header">
    <div class="publisher-logo">
      <NuxtLink to="/">
        <img class="logo-image" src="/nuxt-icon.png" alt="nuxt icon" />
      </NuxtLink>
    </div>
    <div class="social-links">
      <div class="wrapper">
        <a href="https://www.youtube.com/c/MumbaiTak/videos">🔪</a>
        <a href="https://www.facebook.com/mumbaitak">🎸</a>
        <a href="https://twitter.com/mumbaitak">💅</a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
}
.publisher-logo {
  .logo-image {
    height: 100%;
  }
}
.social-links {
  display: flex;
  align-items: center;

  a {
    padding: 5px;
    border-radius: 50%;
  }
  a:hover {
    box-shadow: 0px 1px 3px 0px rgba(0.75, 0.75, 0.75, 0.75);
  }
}
</style>
