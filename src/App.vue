<template>
  <div id="app">
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

<style>
</style>
