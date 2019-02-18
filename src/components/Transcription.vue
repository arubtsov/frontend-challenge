<template>
  <li>
    <CheckBox :checked="checked" @click.native="toggleChecked(data.id)"/>
    <Icon fileName="person.svg"/>
    <input type="text" v-model="data.voice">
    <textarea v-model="data.text"/>
    <Button iconFile="delete.svg" @click.native="remove(data.id)"/>
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
