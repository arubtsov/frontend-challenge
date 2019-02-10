<template>
  <div id="app">
    <Header/>
    <TranscriptionsList v-bind:items="transcriptions" v-on:add-row="add()"/>
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
  },

  methods: {
    add() {
      this.transcriptions = this.transcriptions.concat({
        id: Math.max(...this.transcriptions.map(item => item.id)) + 1,
        voice: '',
        text: ''
      });
    }
  }
};
</script>

<style>
</style>
