<template>
  <main>
    <MainColumn class="container flex column centred">
      <ul v-if="transcriptions.length">
        <Transcription v-for="item in transcriptions" :key="item.id" :data="item"/>
      </ul>
      <Button iconFile="add-row.svg" @click.native="add"/>
    </MainColumn>
  </main>
</template>


<script>
import { ADD_TRANSCRIPTION } from "../store/mutatuion-types.js";
import { mapState, mapMutations } from "vuex";

import Transcription from "./Transcription";
import Button from "./Button";
import MainColumn from "./MainColumn";

export default {
  name: "TranscriptionsList",

  computed: mapState(["transcriptions"]),

  methods: {
    ...mapMutations({ add: ADD_TRANSCRIPTION })
  },

  components: {
    Transcription,
    Button,
    MainColumn
  }
};
</script>

<style scoped>
main {
  height: 100%;
  background-color: #f6f7f8;
}

.container > * {
  margin-top: 24px;
}

ul {
  list-style: none;
  width: 100%;  
  padding: 0;
  margin: 0;
  border: 1px solid #eaedef;
  box-sizing: border-box;
  background-color: white;
}

li {
  padding: 24px;
}

li:not(:last-child) {
  border-bottom: 1px solid #eaedef;
}
</style>