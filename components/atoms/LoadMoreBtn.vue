<template>
  <div class="loadmore-btn-wrapper">
    <div class="loadmore-btn" v-on:click="onClick">{{ text || "Load More" }}</div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    onClick(e) {
      e.stopPropagation()
      this.$emit("loadMore");
    },
  },
};
</script>

<style scoped lang="scss">
.loadmore-btn-wrapper {
  display: flex;
}
.loadmore-btn {
  padding: var(--spacing-xs) var(--spacing-l);
  margin: var(--spacing-l) auto;
  border: 1px solid;
  border-radius: var(--spacing-xxs);
  display: inline-block;
  cursor: pointer;
}
</style>
