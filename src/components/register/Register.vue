<template>
  <div>
    <h1 class="centered">Cadastro</h1>
    <h2 class="centered">{{ photo.titulo }}</h2>

    <form @submit.prevent="record()">
      <div class="control">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="photo.titulo" />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="photo.url" />
        <responsive-image
          v-show="photo.url"
          :url="photo.url"
          :titulo="photo.titulo"
        />
      </div>

      <div class="control">
        <label for="description">DESCRIÇÃO</label>
        <textarea
          id="description"
          autocomplete="off"
          v-model="photo.description"
        ></textarea>
      </div>

      <div class="centered">
        <my-button label="GRAVAR" type="submit" />
        <router-link :to="{ name: 'home' }">
          <my-button label="VOLTAR" type="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage.vue";
import Button from "../shared/button/Button.vue";
import Photo from "../../domain/photo/Photo";
import PhotoService from "../../domain/photo/PhotoService";

export default {
  components: {
    "responsive-image": ResponsiveImage,
    "my-button": Button
  },

  data() {
    return {
      photo: new Photo()
    };
  },

  methods: {
    record() {
      this.service.register(this.photo).then(
        () => (this.photo = new Photo()),
        err => console.log(err)
      );
    },

    created() {
      this.service = new PhotoService(this.$resource);
    }
  }
};
</script>

<style scoped>
.centered {
  text-align: center;
}

.control {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.control label {
  display: block;
  font-weight: bold;
}

.control label + input,
.control textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}
</style>
