<template>
  <li class="flex column">
    <div class="header flex centred">
      <CheckBox :checked="checked" @click.native="toggleChecked(data.id)"/>
      <Icon fileName="person.svg"/>
      <input type="text" v-model="data.voice" placeholder="Enter transcription's name">
      <Button iconFile="delete.svg" @click.native="remove(data.id)"/>
    </div>
    <ResizbleTextArea>
      <textarea v-model.trim="data.text" rows="1" placeholder="Enter transcription's text"/>
    </ResizbleTextArea>
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
import ResizbleTextArea from "./ResizableTextArea.js";

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
    Icon,
    ResizbleTextArea
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../assets/variables.less";

li {
  & * {
    font-size: 16px;
  }

  &:hover .header > button {
    visibility: visible;
  }
}

.header {
  button {
    visibility: hidden;
    margin-left: 13px;
  }

  img {
    margin-left: 16px;
  }

  input {
    flex: 1;
    margin-left: 8px;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: @transcription-name-color;

    &::placeholder {
      color: fade(@transcription-name-color, 50%);
    }
  }
}

textarea {
  margin: 6px 29px 0 66px;
  border: none;
  resize: none;
  padding: 0;
  max-height: 202px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  color: @transcription-text-color;

  &::placeholder {
    color: fade(@transcription-text-color, 50%);
  }
}
</style>

