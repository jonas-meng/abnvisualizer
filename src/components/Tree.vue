<template>
  <div class="tf-tree">
    <ul>
      <Node :node="root" :selectedNode="selectedNode"></Node>
    </ul>
  </div>
</template>

<script>
import Node from "./Node";

export default {
  name: "Tree",
  props: {
    root: {
      type: Object
    },
    selectedNode: {
      type: Object
    }
  },
  components: {
    Node
  }
};
</script>