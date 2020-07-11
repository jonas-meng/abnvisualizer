<template>
  <div id="app">
    <Sidebar />
    <Content />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default {
  name: "App",
  components: {
    Content,
    Sidebar
  },
  mounted() {
    this.$store.dispatch("fetchData");
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
  display: flex;
}
</style>
