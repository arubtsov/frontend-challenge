<template>
  <button @keydown.enter.native="triggerClick">
    <Icon :fileName="iconFile"/>
  </button>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Button",

  props: {
    iconFile: String
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
