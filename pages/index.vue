<template>
  <div>
    <div>Hello World</div>
    <!--
    <div>Config: {{ this.$store.state.config }}</div>
    <FourColGrid
      v-for="collection in homeCollectionItems"
      :key="collection.id"
      :collectionSlug="collection.slug"
    />
    -->
  </div>
</template>

<!-- 
<script>
export default {
  async asyncData({ $http, store }) {
    await store.dispatch("FETCH_CONFIG");
    // const homeCollection = await $http.$get("/api/v1/collections/home");
    // const homeCollectionItems = homeCollection.items
    //   .filter((item) => item.type === "collection")
    //   .slice(0, 1);
    // return { homeCollectionItems };
    // const homeCollectionPromises = homePageCollections.items
    //   .filter((collItems) => collItems.type === "collection")
    //   .map((collItems) => collItems.slug)
    //   .map((collSlug) => $http.$get(`/api/v1/collections/${collSlug}`));
    // const homeCollectionData = await Promise.all(homeCollectionPromises);
    // return { homeCollectionData };
  },
};
</script>
-->