<template>
  <div class="card-image-wrapper">
    <!-- <img class="card-image" :src="imageSlug" :alt="alt" /> -->
  </div>
</template>

<script>
export default {
  props: ["slug", "alt"],
  // computed: {
  //   imageSlug: function() {
  //     const cdn = this.$store.state.config["cdn-name"];
  //     const qs = "?w=300&dpr=2.0";
  //     return cdn.endsWith("/")
  //       ? `${cdn}${this.slug}${qs}`
  //       : `${cdn}/${this.slug}${qs}`;
  //   },
  // },
};
</script>

<style scoped lang="scss">
.card-image-wrapper {
  position: relative;
  padding: 56.25% 0 0;
  margin: 0;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
