<template>
  <div>
    <h1>{{ collection.name }}</h1>
    <StoryCard v-for="story in stories" :key="story.id" :story="story" />
  </div>
</template>

<script>
export default {
  props: ["collection"],
  computed: {
    stories: function() {
      return this.collection.items
        .filter((item) => item.type == "story")
        .slice(0, 8)
        .map((item) => item.story);
    },
  },
};
</script>
