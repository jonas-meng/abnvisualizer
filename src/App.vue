<template>
  <div id="app">
    <div class="row">
      <div class="sidebar">
        <Dialog :selected="selected" :node="node" @deselect="deselect"></Dialog>
      </div>
      <div class="main">
        <Tree v-if="root !== null" :root="root" :selectedNode="node" @select-node="selectNode"></Tree>
      </div>
    </div>
  </div>
</template>

<script>
import Tree from "./components/Tree";
import Dialog from "./components/Dialog";
import axios from "axios";

export default {
  name: "App",
  data: function() {
    return {
      selected: false,
      node: null,
      root: null
    };
  },
  components: {
    Tree,
    Dialog
  },
  mounted: function() {
    axios.get("http://localhost:3000").then(response => {
      if (response.status == 200) {
        let assignId = (current, id) => {
          current.id = id;
          for (let element of current.children) {
            id = assignId(element, id + 1);
          }
          return id;
        };
        this.root = response.data;
        assignId(this.root, 0);
      }
    });
  },
  methods: {
    selectNode: function(node) {
      this.selected = true;
      this.node = node;
    },
    deselect: function() {
      this.selected = false;
      this.node = null;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sidebar {
  float: left;
  width: 20%;
}
.main {
  float: left;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
