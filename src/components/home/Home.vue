<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>
    <input
      type="search"
      class="filter"
      placeholder="filtre as imagens pelo título"
      @input="filter = $event.target.value"
    />
    <ul class="photo-list">
      <li
        class="photo-list-item"
        v-for="(photo, index) of filteredPhotos"
        :key="index"
      >
        <my-panel :titulo="photo.titulo">
          <responsive-image
            v-my-transform:scale.animate="1.2"
            :url="photo.url"
            :titulo="photo.titulo"
          />
          <my-button
            type="button"
            label="Remover"
            @activeButton="remove(photo)"
            :confirmation="true"
            buttonColor="default"
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
      titulo: "Alurapic",
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
.titulo {
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
