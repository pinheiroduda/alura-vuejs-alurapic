<template>
  <div class="panel">
    <h2 class="panel-title" @dblclick="visible = !visible">{{ title }}</h2>
    <div class="panel-content" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],

  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>
.panel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 250px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.panel .panel-title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0;
  text-transform: uppercase;
}

* {
  box-shadow: 5px 5px 5px;
}
</style>
