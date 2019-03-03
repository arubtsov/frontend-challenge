<template>
  <header>
    <MainColumn class="container flex centred">
      <h1>Transcriptions</h1>
      <Button iconFile="upload.svg" @click.native="upload()" :disabled="!isFetched"/>
      <Button iconFile="fetch-document.svg" @click.native="fetch()"/>
    </MainColumn>
  </header>
</template>

<script>
import { FETCH_DATA, UPLOAD_DATA } from "../store/action-types.js";
import { mapActions, mapState } from "vuex";

import Button from "./Button";
import MainColumn from "./MainColumn";

export default {
  name: "Header",

  components: {
    Button,
    MainColumn
  },

  computed: {
    ...mapState(['isFetched'])
  },

  methods: {
    ...mapActions({ fetch: FETCH_DATA, upload: UPLOAD_DATA })
  }
};
</script>

<style lang="less" scoped>
@import (reference) '../assets/variables.less';

header {
  z-index: 1;
  box-shadow: 0px 1px 2px 0px @shadow-color, 0px 1px 3px 0px @shadow-color;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #414c5e;
}

.container {
  justify-content: space-between;
  padding: 0 @primary-padding;
  height: 69px;
}

h1 {
  margin-right: auto;
}

button {
  margin-left: @primary-padding;
}
</style>
