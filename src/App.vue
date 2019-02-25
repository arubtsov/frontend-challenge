<template>
  <div id="app" class="flex column">
    <Header/>
    <TranscriptionsList/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TranscriptionsList from "./components/TranscriptionsList.vue";

export default {
  name: "app",

  components: {
    Header,
    TranscriptionsList
  }
};
</script>

<style lang="less">
@import (css) url(https://fonts.googleapis.com/css?family=Montserrat);
@import "./assets/variables.less";
@import "./assets/global-styles.less";
</style>
