<template>
  <div v-if="selected" class="dialog">
    <DialogCancel class="cancel" />
    <DialogHead />
    <DialogContent />
  </div>
</template>

<script>
import DialogCancel from "./DialogCancel";
import DialogHead from "./DialogHead";
import DialogContent from "./DialogContent";
import { mapGetters } from "vuex";

export default {
  name: "Dialog",
  components: {
    DialogCancel,
    DialogHead,
    DialogContent
  },
  computed: {
    ...mapGetters(["selected"])
  }
};
</script>

<style scoped lang="scss">
.dialog {
  border-style: solid;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
}
.cancel {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>