<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of photos" :key="photo">
        <img :src="photo.url" :alt="photo.title" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Alurapic",
      photos: []
    };
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(photos => (this.photos = photos));
  }
};
</script>

<style>
.body {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.title {
  text-align: center;
}

.photo-list {
  list-style: none;
}

.photo-list-item {
  display: inline-block;
}
</style>
