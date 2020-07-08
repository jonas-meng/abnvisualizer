<template>
  <div v-if="selected" class="card">
    <a @click="deselect">
      <img class="cancel" src="../assets/cancel.png" />
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
.card {
  width: 30rem;
  border-style: solid;
  border-radius: 5px;
  transition: 0.3s;
  margin-bottom: 20px;
}
.cancel {
  display: block;
  height: 24px;
  width: 24px;
  position: relative;
  left: 28rem;
}
</style>