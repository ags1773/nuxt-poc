<template>
  <div class="four-col-grid-wrapper">
    <div>{{ collectionSlug }}</div>
    <ul>
      <li v-for="story in stories">{{ story.headline }}</li>
    </ul>
    <hr />
    <!--
    <p v-if="$fetchState.pending">Fetching collection...</p>
    <p v-else-if="$fetchState.error">Error occured while fetching collection</p>
    <div v-else class="coll-name">Fetch completed</div>
    
    <div v-else>
      <div class="coll-name">{{ collection.name }}</div>
      <div class="four-col-grid">
        <StoryCard v-for="story in stories" :key="story.id" :story="story" />
      </div>
    </div>
    -->
  </div>
</template>

<script>
export default {
  props: ["collectionSlug"],
  data() {
    return {
      stories: {},
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
