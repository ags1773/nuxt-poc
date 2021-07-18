<template>
  <div>
    <h1>Home Page</h1>
    <FourColGrid v-for="collection in homeCollectionData" :key="collection.id"  v-bind:collection="collection" />
  </div>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const homePageCollections = await $http.$get("/api/v1/collections/home");
    const homeCollectionPromises = homePageCollections.items
      .filter((collItems) => collItems.type === "collection")
      .map((collItems) => collItems.slug)
      .map((collSlug) => $http.$get(`/api/v1/collections/${collSlug}`));
    const homeCollectionData = await Promise.all(homeCollectionPromises);
    return { homeCollectionData };
  },
};
</script>
