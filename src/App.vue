<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of photos" :key="photo">
        <div class="panel">
          <h2 class="panel-title">{{ photo.titulo }}</h2>
          <div class="panel-content">
            <img class="image" :src="photo.url" :alt="photo.titulo" />
          </div>
        </div>
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

.panel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.panel .panel-title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  text-transform: uppercase;
}

.image {
  width: 100%;
}
</style>
