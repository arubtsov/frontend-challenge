<template>
  <li class="flex column">
    <div class="header flex centred">
      <CheckBox :checked="checked" @click.native="toggleChecked(data.id)"/>
      <Icon fileName="person.svg"/>
      <input type="text" v-model="data.voice">
      <Button iconFile="delete.svg" @click.native="remove(data.id)"/>
    </div>
    <textarea v-model="data.text"/>
  </li>
</template>

<script>
import {
  REMOVE_TRANSCRIPTION,
  TOGGLE_TRANSCRIPTION_CHECKED
} from "../store/mutatuion-types.js";
import { mapMutations } from "vuex";

import Button from "./Button";
import CheckBox from "./CheckBox";
import Icon from "./Icon";

export default {
  name: "Transcription",

  props: {
    data: Object
  },

  computed: {
    checked() {
      return !!this.$store.state.checked[this.data.id];
    }
  },

  methods: {
    ...mapMutations({
      remove: REMOVE_TRANSCRIPTION,
      toggleChecked: TOGGLE_TRANSCRIPTION_CHECKED
    })
  },

  components: {
    Button,
    CheckBox,
    Icon
  }
};
</script>

<style scoped>
.header > button {
  visibility: hidden;
  margin-left: auto;
}

li:hover .header > button {
  visibility: visible;
}

.header > img {
  margin-left: 16px;
}

input {
  margin-left: 8px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #566074;
}

textarea {
  margin: 6px 29px 0 66px;
  flex: 1;
  border: none;
  resize: none;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #778195;
}
</style>

