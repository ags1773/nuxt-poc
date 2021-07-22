<template>
  <div class="four-col-grid-wrapper">
    <div class="coll-name">{{ collection.name }}</div>
    <div class="four-col-grid">
      <StoryCard v-for="story in stories" :key="story.id" :story="story" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["collection"],
  computed: {
    stories: function() {
      return this.collection.items
        .filter((item) => item.type === "story")
        .slice(0, 8)
        .map((item) => item.story);
    },
  },
};
</script>

<style scoped lang="scss">
.four-col-grid-wrapper {
  max-width: 1172px;
  margin: auto;
}
.four-col-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
}
.coll-name {
  display: inline-block;
  border-bottom: 4px solid var(--primary-color);
  font-size: 24px;
  margin: 0 0 24px;
  font-weight: 700;
}
</style>
