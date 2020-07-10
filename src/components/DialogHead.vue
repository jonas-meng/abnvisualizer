<template>
  <h3>{{name}}</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogHead",
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style scoped>
h3 {
  margin: 2px;
}
</style>