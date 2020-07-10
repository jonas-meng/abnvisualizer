<template>
  <div class="content">
    <Tree v-if="root" :root="root" :selectedNode="selectedNode"></Tree>
  </div>
</template>

<script>
import Tree from "./Tree";

export default {
  name: "App",
  components: {
    Tree
  },
  computed: {
    root() {
      return this.$store.state.root;
    },
    selectedNode() {
      return this.$store.state.selectedNode;
    }
  }
};
</script>

<style>
.content {
  float: right;
  width: 75%;
}
</style>
