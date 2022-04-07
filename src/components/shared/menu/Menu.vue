<template>
  <nav>
    <ul class="menu-list">
      <li v-for="route in routes" :key="route">
        <router-link :to="route.path ? route.path : '/'" class="menu-list-item">
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.menu-list {
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  list-style: none;
}

.menu-list-item {
  text-decoration: none;
  background: lightblue;
  color: black;
  padding: 6px;
  border-radius: 2px;
}

.menu-list-item:hover {
  opacity: 0.9;
}
</style>
