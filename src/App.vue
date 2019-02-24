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

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

body {
  margin: 0;
}

html, body, #app {
  height: 100%;
}

.flex {
  display: flex;
}

.flex.column {
  flex-direction: column;
}

.flex.centred {
  align-items: center;
}
</style>
