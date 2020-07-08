<template>
  <div class="tf-tree">
    <ul>
      <Node :node="root" :selectedNode="selectedNode" @select-node="selectNode"></Node>
    </ul>
  </div>
</template>

<script>
import Node from "./Node";

export default {
  name: "Tree",
  props: {
    root: {
      type: Object,
      required: true
    },
    selectedNode: {
      type: Object,
    }
  },
  methods: {
    selectNode: function(node) {
      this.$emit("select-node", node);
    }
  },
  components: {
    Node
  }
};
</script>