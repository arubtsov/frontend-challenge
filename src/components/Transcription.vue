<template>
  <li>
    <input type="text" v-model="data.voice">
    <textarea v-model="data.text"/>
    <Button iconFile="delete.svg" @click.native="remove(data.id)"/>
  </li>
</template>

<script>
import { REMOVE_TRANSCRIPTION } from "../store/mutatuion-types.js";
import { mapMutations } from "vuex";

import Button from "./Button";

export default {
  name: "Transcription",

  props: {
    data: Object
  },

  methods: {
    ...mapMutations({ remove: REMOVE_TRANSCRIPTION })
  },

  components: {
    Button
  }
};
</script>
