<template>
  <div class="body">
    <nav>
      <ul class="menu-list">
        <li v-for="route in routes" :key="route">
          <router-link
            :to="route.path ? route.path : '/'"
            class="menu-list-item"
          >
            {{ route.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { routes } from "./routes";

export default {
  data() {
    return {
      routes: routes
    };
  }
};
</script>

<style>
.body {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

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
