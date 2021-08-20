<template>
  <div :style="inlineStyles" class="font">
    <slot></slot>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          hid: "googleapis",
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          hid: "gstatic",
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          hid: "font",
          rel: "stylesheet",
          href: `https://fonts.googleapis.com/css2?family=${this.getFontFamily}:wght@400;600&display=swap`,
        },
      ],
    };
  },
  computed: {
    getFontFamily: function () {
      return _get(this.$store.state.pbConfig, [
        "general",
        "fonts",
        "primaryFont",
      ]);
    },
    inlineStyles: function () {
      return this.getFontFamily
        ? {
            // assigning font family to a css var isn't useful now since there's only one font family
            // and it's being set here but it might be needed later if we need to support multiple font families
            // and want to set it somewhere down in the tree
            "--font-primary": this.getFontFamily,
          }
        : null;
    },
  },
};
</script>

<style scoped>
.font {
  font-family: var(--font-primary, Arial, sans-serif);
}
</style>
