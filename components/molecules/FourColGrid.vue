<template>
  <div class="four-col-grid-wrapper">
    <div>this is four-col-grid</div>
    <div>{{ collectionSlug }}</div>
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
// import { getCollectionBySlug } from "~/api-helpers";
export default {
  props: ["collectionSlug"],
  // data() {
  //   return {
  //     collection: {},
  //   };
  // },
  // computed: {
  //   stories: function () {
  //     return collection.items
  //       .filter((item) => item.type === "story")
  //       .slice(0, 8)
  //       .map((item) => item.story);
  //   },
  // },
  // async fetch() {
  //   // const qs = {
  //   //   // "item-type": "collection",
  //   //   "story-fields":
  //   //     "headline,subheadline,slug,url,hero-image-s3-key,hero-image-caption,hero-image-metadata,hero-image-attribution,last-published-at,alternative,authors,author-name,author-id",
  //   // };
  //   this.collection = await this.$http.$get("/api/v1/collections/top-stories");
  // },
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
