<template>
  <header>
    <h1>Transcriptions</h1>
    <Button iconFile="upload.svg"/>
    <Button iconFile="fetch-document.svg" @click.native="$emit('fetch')"/>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",

  components: {
    Button
  }
};
</script>

<style>
</style>
