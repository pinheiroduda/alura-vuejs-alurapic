<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>
    <p v-show="message" class="centered">{{ message }}</p>
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
          <router-link
            :to="{ name: 'update-register', params: { id: photo._id } }"
          >
            <my-button type="button" label="Alterar" />
          </router-link>
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
import PhotoService from "../../domain/photo/PhotoService";

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
      filter: "",
      message: ""
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
      this.service.delete(photo._id).then(
        () => {
          let index = this.photos.indexOf(photo);
          this.photos.splice(index, 1);
          this.message = "Foto removida com sucesso";
        },
        err => {
          this.message = err.message;
        }
      );
    }
  },

  created() {
    this.service = new PhotoService(this.$resource);

    this.service.list().then(
      photos => (this.photos = photos),
      err => {
        this.message = err.message;
      }
    );
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
