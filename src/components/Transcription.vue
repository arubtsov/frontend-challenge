<template>
  <li>
    <input type="text" v-model="data.voice">
    <textarea v-model="data.text"/>
    <Button iconFile="delete.svg"/>
  </li>
</template>

<script>
import Button from "./Button";

export default {
  name: "Transcription",

  props: {
    data: Object
  },

  components: {
    Button
  }
};
</script>
