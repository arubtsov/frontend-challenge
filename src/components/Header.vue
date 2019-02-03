<template>
  <header>
    <h1>Transcriptions</h1>
    <Button src="upload.svg"/>
    <Button src="fetch-document.svg"/>    
  </header>
</template>

<script>
import Button from './Button';

export default {
  name: "Header",

  components: {
      Button
  }
};
</script>

<style>
</style>
