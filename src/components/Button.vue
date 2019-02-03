<template>
  <button>
    <img :src="require(`@/assets/${src}`)">
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    src: String
  }
};
</script>

