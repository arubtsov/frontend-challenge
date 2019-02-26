<template>
  <button class="flex focus-outline" @keydown.enter.native="triggerClick">
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

<style scoped>
button {
  background-color: initial;
  border: none;
  padding: 0;    
  cursor: pointer;
}
</style>
