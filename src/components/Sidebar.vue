<template>
  <div class="sidebar">
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./Dialog";

export default {
  name: "Sidebar",
  components: {
    Dialog
  }
};
</script>

<style>
.sidebar {
  width: 23%;
}
</style>
