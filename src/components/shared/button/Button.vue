<template>
  <button class="button error-button" :type="type">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["type", "label"]
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.error-button {
  background: firebrick;
  color: white;
}
</style>
