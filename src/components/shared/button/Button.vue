<template>
  <button
    @click="triggerAction()"
    class="button"
    :class="buttonStyle"
    :type="type"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["type", "label", "confirm", "style"],

  props: {
    type: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    confirm: Boolean,
    style: String
  },

  methods: {
    triggerAction() {
      if (this.confirm) {
        if (confirm("Confirma operação?")) {
          this.$emit("activeButton");
        }
        return;
      }
      this.$emit("activeButton");
    }
  },

  computed: {
    buttonStyle() {
      let buttonStyle;
      if (this.style == "default" || !this.style) {
        buttonStyle = "default-button";
      }
      if (this.style == "danger") {
        buttonStyle = "danger-button";
      }
      return buttonStyle;
    }
  }
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.default-button {
  background: lightblue;
  color: white;
}

.danger-button {
  background: firebrick;
  color: white;
}
</style>
