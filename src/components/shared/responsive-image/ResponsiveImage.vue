<template>
  <img class="image" :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: ["url", "titulo"]
};
</script>

<style scoped>
.image {
  width: 100%;
}
</style>
