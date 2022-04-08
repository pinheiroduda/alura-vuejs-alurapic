<template>
  <div>
    <h1 class="centered">Cadastro</h1>
    <h2 class="centered"></h2>

    <form>
      <div class="control">
        <label for="title">TÍTULO</label>
        <input id="title" autocomplete="off" />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" />
        <responsive-image />
      </div>

      <div class="control">
        <label for="description">DESCRIÇÃO</label>
        <textarea id="description" autocomplete="off"></textarea>
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
