<template>
  <div>
    <FourColGrid
      v-for="collection in homeCollectionData"
      v-bind:key="collection.id"
      v-bind:collection="collection"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $http, store }) {
    const config = await $http.$get("/api/v1/config");
    await store.dispatch("fetchConfig", config);

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
