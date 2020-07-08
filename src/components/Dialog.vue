<template>
  <div v-if="selected" class="dialog">
    <a @click="deselect">
      <img class="cancel topright" src="../assets/cancel.png" />
    </a>
    <h>{{node.name}}</h>
    <p>{{node.description}}</p>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    selected: Boolean,
    node: Object
  },
  methods: {
    deselect: function() {
      this.$emit("deselect");
    }
  }
};
</script>

<style scoped>
.dialog {
  border-style: solid;
  border-radius: 5px;
  transition: 0.3s;
  margin-bottom: 20px;
  position: relative;
}
.cancel {
  display: block;
  height: 12px;
  width: 12px;
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>