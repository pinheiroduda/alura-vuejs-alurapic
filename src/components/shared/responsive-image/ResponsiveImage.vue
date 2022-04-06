<template>
  <img class="image" :src="url" :alt="title" />
</template>

<script>
export default {
  props: ["url", "title"]
};
</script>

<style scoped>
.image {
  width: 100%;
}
</style>
