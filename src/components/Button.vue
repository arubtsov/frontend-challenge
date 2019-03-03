<template>
  <button class="flex focus-outline" @keydown.enter.native="triggerClick" :disabled="disabled">
    <Icon :fileName="iconFile"/>
  </button>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Button",

  props: {
    iconFile: String,
    disabled: {
      type: Boolean,
      default: false
    }
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

<style lang="less" scoped>
button {
  background-color: initial;
  border: none;
  padding: 0;

  &:not([disabled]) {
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;
  }
}
</style>
