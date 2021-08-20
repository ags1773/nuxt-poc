<template>
  <div>
    <span>{{ getAuthor }}</span>
    <span>.</span>
    <DatePublished :timestamp="getPublishTimeStamp" />
    <span>.</span>
    <span>{{ getReadTime }}</span>
  </div>
</template>

<script>
export default {
  props: ["story"],
  computed: {
    getAuthor: function () {
      return this.story.authors[0].name;
    },
    getPublishTimeStamp: function() {
      return this.story["published-at"]
    },
    getReadTime: function () {
      const readTime = this.story["read-time"];
      return `${readTime} min read`;
    },
  },
};
</script>
