<template>
  <h3>{{head}}</h3>
</template>

<script>
export default {
  name: "DialogHead",
  computed: {
    head() {
      return this.$store.state.selectedNode.name;
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 2px;
}
</style>