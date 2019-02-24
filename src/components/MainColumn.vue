<template>
  <div :class="className">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "MainCoulumn",

  props: {
    className: String
  }
};
</script>

<style scoped>
div {
  width: 100%;
  max-width: 738px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
