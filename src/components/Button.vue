<template>
  <button @keydown.enter.native="triggerClick">
    <img :src="require(`@/assets/${src}`)">  
  </button>
</template>

<script>
export default {
  name: "Button",
  
  props: {
    src: String
  },

  methods: {
    triggerClick() {
      this.$refs.sendReply.click();
    }
  }
};
</script>
