<template>
  <p>{{content}}</p>
</template>

<script>
export default {
  name: "DialogContent",
  computed: {
    content() {
      return this.$store.state.selectedNode.description;
    }
  }
};
</script>

<style scoped>
p {
  margin: 2px;
}
</style>