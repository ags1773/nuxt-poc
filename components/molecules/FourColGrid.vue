<template>
  <div class="four-col-grid-wrapper">
    <p v-if="$fetchState.error">
      Error occured while fetching collection {{ collectionSlug }}
    </p>
    <div v-else>
      <div class="coll-name">{{ collectionName }}</div>
      <div class="four-col-grid">
        <StoryCard v-for="story in stories" :key="story.id" :story="story" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["collectionSlug"],
  data() {
    return {
      stories: {},
      collectionName: "",
    };
  },
  async fetch() {
    const opts = {
      qs: {
        "item-type": "story",
        "story-fields":
          "headline,subheadline,slug,url,hero-image-s3-key,hero-image-caption,hero-image-metadata,hero-image-attribution,last-published-at,alternative,authors,author-name,author-id",
      },
    };
    const collectionData = await this.$client.getCollectionBySlug(
      this.collectionSlug,
      opts
    );
    this.collectionName = collectionData.name;
    this.stories = collectionData.items.slice(0, 8).map((item) => item.story);
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
