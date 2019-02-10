<template>
  <button @keydown.enter.native="triggerClick">
    <Icon :fileName="src"/>
  </button>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Button",

  props: {
    src: String
  },

  components: {
    Icon
  },

  methods: {
    triggerClick() {
      this.$refs.sendReply.click();
    }
  }
};
</script>
