<template>
  <div class="content">
    <Tree v-if="root" :root="root" :selectedNode="selectedNode"></Tree>
  </div>
</template>

<script>
import Tree from "./Tree";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Tree
  },
  computed: {
    ...mapGetters(["root", "selectedNode"])
  }
};
</script>

<style>
.content {
  width: 75%;
}
</style>
