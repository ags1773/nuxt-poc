<template>
  <div class="story-card">
    <CardImage :slug="story['hero-image-s3-key']" :alt="story['hero-image-caption']" />
    <CardHeadline class="card-headline" :headline="story.headline" />
  </div>
</template>

<script>
export default {
  props: ["story"],
};
</script>

<style scoped lang="scss"></style>
