<template>
  <ul>
    <li v-for="item in items" v-bind:key="item.id">
      <p>{{item.voice}}</p>
      <p>{{item.text}}</p>
    </li>
  </ul>
</template>


<script>
export default {
  name: "TranscriptionsList",
  props: {
    items: Array
  }
};
</script>

<style>
</style>