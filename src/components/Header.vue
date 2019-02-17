<template>
  <header>
    <h1>Transcriptions</h1>
    <Button iconFile="upload.svg" @click.native="upload()"/>
    <Button iconFile="fetch-document.svg" @click.native="fetch()"/>
  </header>
</template>

<script>
import { FETCH_DATA, UPLOAD_DATA } from '../store/action-types.js';
import { mapActions } from 'vuex';

import Button from "./Button";

export default {
  name: "Header",

  components: {
    Button
  },

  methods: {
    ...mapActions({ fetch: FETCH_DATA, upload: UPLOAD_DATA })
  }
};
</script>

<style>
</style>
