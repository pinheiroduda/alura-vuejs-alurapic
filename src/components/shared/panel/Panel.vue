<template>
  <div class="panel">
    <h2 class="panel-titulo" @dblclick="visible = !visible">{{ titulo }}</h2>
    <transition name="fade-panel">
      <div class="panel-content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>
* {
  box-shadow: 5px 5px 5px;
}

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

.panel .panel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0;
  text-transform: uppercase;
}

.fade-panel-enter,
.fade-panel-leave-active {
  opacity: 0;
}

.fade-panel-enter-active,
.fade-panel-leave-active {
  transition: opacity 0.8s;
}

.panel-content {
  overflow: hidden;
}
</style>
