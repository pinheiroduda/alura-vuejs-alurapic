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
    buttonColor: String
  },

  methods: {
    triggerAction() {
      if (this.confirmation) {
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
      if (this.buttonColor == "default" || !this.buttonColor)
        return "default-button";
      if (this.buttonColor == "danger") return "danger-button";
    }
  }
};
</script>

<style>
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
