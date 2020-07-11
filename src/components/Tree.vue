<template>
  <div class="tree">
    <ul id="root">
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

<style lang="scss">
@import "../assets/css/variables.scss";

.tree {
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ul {
    display: inline-flex;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $node_gap $node_gap/2;
    position: relative;

    li::before {
      display: block;
      position: absolute;
      width: 100%;
      content: "";
      top: $node_gap/2-$horizontal_connector_width/2;
      border-top: $horizontal_connector_width solid black;
      height: $horizontal_connector_width;
    }
    li:first-child::before {
      max-width: 50%;
      left: 50%;
    }
    li:last-child::before {
      max-width: 50%;
      right: 50%;
    }
  }
  #root > li > .node::before {
    display: none;
  }
}
</style>