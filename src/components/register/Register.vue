<template>
  <div>
    <h1 class="centered">Cadastro</h1>
    <h2 class="centered"></h2>

    <form @submit.prevent="record()">
      <div class="control">
        <label for="title">TÍTULO</label>
        <input id="title" autocomplete="off" v-model="photo.title" />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model="photo.url" />
        <responsive-image />
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
        <router-link to="/">
          <my-button label="VOLTAR" type="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage.vue";
import Button from "../shared/button/Button.vue";

export default {
  components: {
    "responsive-image": ResponsiveImage,
    "my-button": Button
  },

  data() {
    return {
      photo: {
        title: "",
        url: "",
        description: ""
      }
    };
  },

  methods: {
    record() {
      this.photo = {
        title: "",
        url: "",
        description: ""
      };
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
