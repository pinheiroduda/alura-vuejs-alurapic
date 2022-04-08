<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <input
      type="search"
      class="filter"
      placeholder="filtre as imagens pelo título"
      @input="filter = $event.target.value"
    />
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of filteredPhotos" :key="photo">
        <my-panel :title="photo.titulo">
          <responsive-image
            v-my-transform
            :url="photo.url"
            :title="photo.title"
          />
          <my-button
            type="button"
            label="Remover"
            @activeButton="remove(photo)"
            :confirmation="true"
            style="default"
          />
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "../shared/panel/Panel.vue";
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage.vue";
import Button from "../shared/button/Button.vue";

export default {
  components: {
    "my-panel": Panel,
    "responsive-image": ResponsiveImage,
    "my-button": Button
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

  methods: {
    remove(photo) {
      alert("removeu a foto " + photo.titulo);
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
</style>
