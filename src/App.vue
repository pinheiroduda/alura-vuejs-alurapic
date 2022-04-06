<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>
    <input
      type="search"
      class="filter"
      placeholder="filtre as imagens pelo título"
      v-on:input="filter = $event.target.value"
    />
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of filteredPhotos" :key="photo">
        <my-panel :title="photo.titulo">
          <img class="image" :src="photo.url" :alt="photo.titulo" />
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "./components/shared/panel/Panel.vue";

export default {
  components: {
    "my-panel": Panel
  },

  data() {
    return {
      title: "Alurapic",
      photos: [],
      filter: ""
    };
  },

  computed: {
    filteredPhotos() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), "i");
        return this.photos.filter(photo => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
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

.filter {
  display: block;
  width: 100%;
}

.photo-list {
  list-style: none;
}

.photo-list-item {
  display: inline-block;
}

.image {
  width: 100%;
}
</style>
