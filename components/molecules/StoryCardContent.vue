<template>
  <div>
    <CardHeadline class="card-headline" :headline="story.headline" />
    <AuthorWithTime class="author-datetime" :story="story" />
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
.author-datetime {
  color: var(--c-mono4);
  font-size: var(--fs-xxs);
}
</style>
