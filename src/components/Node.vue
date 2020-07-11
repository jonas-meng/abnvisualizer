<template>
  <li>
    <span class="node" :class="{selected: selected}" @click="selectNode(node)">{{node.name}}</span>
    <ul v-if="node.children && node.children.length > 0">
      <Node
        v-for="child in node.children"
        :node="child"
        :selectedNode="selectedNode"
        :key="child.id"
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
      type: Object
    }
  },
  methods: {
    selectNode: function(node) {
      this.$store.commit("selectNode", node);
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

<style lang="scss" scoped>
$node_gap: 20px;
$vertical_connector_width: 2px;

.node {
  border: 1px solid black;
  padding: 10px 10px;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    height: $node_gap/2;
    border-left: $vertical_connector_width solid black;
    left: calc(50% - #{$vertical_connector_width/2});
    top: -$node_gap/2;
    content: "";
  }

  &::after {
    position: absolute;
    display: block;
    height: $node_gap/2;
    border-left: $vertical_connector_width solid black;
    left: calc(50% - #{$vertical_connector_width/2});
    bottom: -$node_gap/2;
    content: "";
  }

  &:only-child::after {
    display: none;
  }
}

.selected {
  background-color: red;
}
</style>
