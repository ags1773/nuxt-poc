<template>
  <div>
    <template v-for="(collection, index) in collectionItems">
      <template v-if="index < 2">
        <FourColGrid :key="collection.id" :collectionSlug="collection.slug" />
      </template>
      <template v-else>
        <client-only placeholder="Loading...">
          <lazy-FourColGrid
            :key="collection.id"
            :collectionSlug="collection.slug"
          />
        </client-only>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $client, query }) {
    const { publisherId } = query;
    if (!publisherId) throw new Error("Please pass publisherId as query param");
    await store.dispatch("FETCH_CONFIG", { publisherId });
    const collectionData = await $client.getCollectionBySlug("home", {
      qs: {
        "item-type": "collection",
      },
    });
    return { collectionItems: collectionData.items };
  },
};
</script>
