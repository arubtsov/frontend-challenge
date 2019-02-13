<template>
  <div id="app">
    <Header @fetch="fetch()"/>
    <TranscriptionsList :items="transcriptions" @add-row="add()"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TranscriptionsList from "./components/TranscriptionsList.vue";
import axios from "axios";

export default {
  name: "app",

  components: {
    Header,
    TranscriptionsList
  },

  data() {
    return {
      transcriptions: []
    };
  },

  methods: {
    fetch() {
      axios
        .get("http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c")
        .then(response => {
          this.transcriptions = response.data;
        });
    },

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
