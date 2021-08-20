<template>
  <span>{{ getDatePublished }}</span>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default {
  props: ["timestamp"],
  computed: {
    getDatePublished() {
      return dayjs(this.timestamp).fromNow()
    }
  }
};
</script>
