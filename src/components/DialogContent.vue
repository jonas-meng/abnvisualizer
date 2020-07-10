<template>
  <p>{{description}}</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogContent",
  computed: {
    ...mapGetters(["description"])
  }
};
</script>

<style scoped>
p {
  margin: 2px;
}
</style>