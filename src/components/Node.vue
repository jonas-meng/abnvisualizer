<template>
  <li>
    <span class="tf-nc" :class="{selected: selected}" @click="selectNode(node)">{{node.name}}</span>
    <ul v-if="node.children && node.children.length > 0">
      <Node
        v-for="child in node.children"
        :node="child"
        :selectedNode="selectedNode"
        :key="child.id"
        @select-node="selectNode"
      ></Node>
    </ul>
  </li>
</template>

<script>
export default {
  name: "Node",
  props: {
    node: {
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
  computed: {
    selected: function() {
      return (
        this.selectedNode !== null && this.selectedNode.id === this.node.id
      );
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: red;
}
</style>
