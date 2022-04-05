<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="photo of photos" :key="photo">
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
      photos: [
        {
          url:
            "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          title: "desk"
        },
        {
          url:
            "https://images.unsplash.com/photo-1649089475838-00ddaabd1c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          title: "green"
        }
      ]
    };
  }
};
</script>

<style></style>
