import Vue from "vue";

Vue.directive("my-transform", {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener("dblclick", function() {
      let increment = 0;
      let animate = false;

      if (binding.value) {
        increment = binding.value.increment;
        animate = binding.value.animate;
      }

      current += increment;
      el.style.transform = `rotate(${current}deg)`;

      if (animate) {
        el.style.transition = "transform 0.5s";
      }
    });
  }
});
