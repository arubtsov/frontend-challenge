<template>
  <label class="flex centred">
    <input type="checkbox" :checked="checked" :disabled="disabled">
    <div/>
    <span v-if="label">{{label}}</span>
  </label>
</template>

<script>
export default {
  name: "CheckBox",

  props: {
    checked: {
      type: Boolean,
      required: true
    },

    label: {
      type: String,
      default: ""
    },

    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../assets/global-styles.less";

div {
  width: 16px;
  height: 16px;
}

input {
  margin: 0;
  width: 0;
  height: 0;
  position: absolute;
  appearance: none;
}

input:focus + div {
  .purple-dotted-outline;
}

div {
  border-radius: 2px;
  box-sizing: border-box;
  border: 2px solid @purple-color;
  background-color: white;
  z-index: 1;
}

input:checked ~ div {
  background-image: url("../assets/check-box.svg");
  border: none;
}

span {
  margin-left: 0.5em;
}
</style>
