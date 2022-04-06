<template>
  <div class="body">
    <nav>
      <ul class="menu-list">
        <li>
          <router-link to="/" class="menu-list-item">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/register" class="menu-list-item">
            Cadastro
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
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
  color: black;
}
</style>
