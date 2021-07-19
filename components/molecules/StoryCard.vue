<template>
  <div class="">
    <div>
      <img
        class="card-image"
        :src="imageSlug"
        :alt="story['hero-image-caption']"
      />
    </div>
    <CardHeadline class="card-headline" :headline="story.headline" />
  </div>
</template>

<script>
export default {
  props: ["story"],
  computed: {
    imageSlug: function() {
      const cdn = this.$store.state.config["cdn-name"];
      return cdn.endsWith("/")
        ? `${cdn}${this.story["hero-image-s3-key"]}`
        : `${cdn}/${this.story["hero-image-s3-key"]}`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
