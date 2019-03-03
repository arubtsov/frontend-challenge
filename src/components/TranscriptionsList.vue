<template>
  <main>
    <MainColumn v-if="transcriptions.length" class="container flex column centred">
      <ul>
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

<style lang="less" scoped>
@import (reference) "../assets/variables.less";

main {
  height: 100%;
  background-color: #f6f7f8;
  padding: @primary-padding 0;
}

.container > button:not(:first-child) {
  margin-top: @primary-padding;
}

ul {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid @list-border-color;
  box-sizing: border-box;
  background-color: white;
}

li {
  padding: @primary-padding;

  &:not(:last-child) {
    border-bottom: 1px solid @list-border-color;
  }
}
</style>