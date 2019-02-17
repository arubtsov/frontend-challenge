<template>
  <main>
    <ul>
      <Transcription v-for="item in transcriptions" :key="item.id" :data="item"/>
    </ul>
    <Button iconFile="add-row.svg" @click.native="add"/>
  </main>
</template>


<script>
import { ADD_TRANSCRIPTION } from '../store/mutatuion-types.js';
import { mapState, mapMutations } from 'vuex';

import Transcription from './Transcription';
import Button from "./Button";

export default {
  name: "TranscriptionsList",

  computed: mapState(['transcriptions']),

  methods: {
    ...mapMutations({ add: ADD_TRANSCRIPTION })
  },

  components: {
    Transcription,
    Button
  }
};
</script>

<style>
</style>