<template>
  <main>
    <ul>
      <Transcription v-for="item in items" :key="item.id" :data="item"/>
    </ul>
    <Button iconFile="add-row.svg" @click.native="$emit('add-row')"/>
  </main>
</template>


<script>
import Transcription from './Transcription';
import Button from "./Button";

export default {
  name: "TranscriptionsList",

  props: {
    items: Array
  },

  components: {
    Transcription,
    Button
  }
};
</script>

<style>
</style>