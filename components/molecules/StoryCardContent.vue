<template>
  <div>
    <CardHeadline class="card-headline" :headline="story.headline" />
  </div>
</template>

<script>
export default {
  props: ["story"],
};
</script>

<style scoped lang="scss">
.card-headline {
  font-weight: var(--fw-bold);
  font-size: var(--fs-xs);
  line-height: var(--lh-3);
}
</style>