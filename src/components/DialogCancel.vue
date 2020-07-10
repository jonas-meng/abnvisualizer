<template>
  <a @click="cancel">
    <img class="cancel" src="../assets/cancel.png" />
  </a>
</template>

<script>
export default {
  name: "DialogCancel",
  methods: {
    cancel() {
      this.$store.commit("deselectNode");
    }
  }
};
</script>

<style scoped>
.cancel {
  display: block;
  height: 15px;
  width: 15px;
}
</style>