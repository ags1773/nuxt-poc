<!-- Haven't checked if lazy loading is working. It should lazy load rows whose index >= 2 -->
<template>
  <div>
    <template v-for="(collection, index) in collectionItems">
      <template v-if="index < 2">
        <FourColGrid
          :key="collection.id"
          :collectionSlug="collection.slug"
        />
      </template>
      <template v-else>
        <lazy-FourColGrid
          :key="collection.id"
          :collectionSlug="collection.slug"
        />
      </template>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $http, $client }) {
    // await store.dispatch("FETCH_CONFIG");
    const collectionData = await $client.getCollectionBySlug("home", {
      qs: {
        "item-type": "collection",
      },
    });
    const collectionItems = collectionData.items;
    return { collectionItems };

    // const homeCollectionPromises = homePageCollections.items
    //   .filter((collItems) => collItems.type === "collection")
    //   .map((collItems) => collItems.slug)
    //   .map((collSlug) => $http.$get(`/api/v1/collections/${collSlug}`));
    // const homeCollectionData = await Promise.all(homeCollectionPromises);
    // return { homeCollectionData };
  },
};
</script>
