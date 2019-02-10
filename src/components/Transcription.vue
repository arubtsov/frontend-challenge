<template>
  <li>
    <input type="text" v-model="data.voice">
    <textarea v-model="data.text"/>
  </li>
</template>

<script>
export default {
  name: "Transcriptions",

  props: {
    data: Object
  }
};
</script>
