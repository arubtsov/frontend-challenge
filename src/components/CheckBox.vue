<template>
  <input type="checkbox" :checked="checked">
</template>

<script>
export default {
  name: "CheckBox",

  props: {
    checked: Boolean
  }
};
</script>

<style scoped>
</style>
