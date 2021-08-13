<template>
  <div>
    <div>Home Page</div>
    <FourColGrid
      v-for="collection in collectionItems"
      :key="collection.id"
      :collectionSlug="collection.slug"
    />
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
