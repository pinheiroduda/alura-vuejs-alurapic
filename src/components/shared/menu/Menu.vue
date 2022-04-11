<template>
  <nav>
    <ul class="menu-list">
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path ? route.path : '/'" class="menu-list-item">
          {{ route.titulo }}
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  background: lightblue;
  border-radius: 2px;
  list-style: none;
}

.menu-list-item {
  text-decoration: none;
  color: black;
  padding: 6px;
}

.menu-list-item:hover {
  opacity: 0.9;
}
</style>
