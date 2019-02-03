<template>
  <div id="app">
    <Header/>
    <TranscriptionsList v-bind:items="transcriptions"/>
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
  },

  data() {
    return {
      transcriptions: [
        {
          id: 0,
          voice: "Voice 1",
          text: "some text"
        },
        {
          id: 1,
          voice: "Voice 2",
          text: "some other text"
        }
      ]
    };
  }
};
</script>

<style>
</style>
