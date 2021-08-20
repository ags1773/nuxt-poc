<template>
  <div class="story-card">
    <CardImage
      class="card-image"
      :slug="story['hero-image-s3-key']"
      :alt="story['hero-image-caption']"
    />
    <StoryCardContent :story="story" />
  </div>
</template>

<script>
export default {
  props: ["story"],
};
</script>

<style scoped lang="scss">
.card-image {
  margin: 0 0 var(--spacing-xs) 0;
}
</style>
