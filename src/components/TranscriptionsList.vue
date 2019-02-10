<template>
  <main>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <p>{{item.voice}}</p>
        <p>{{item.text}}</p>
      </li>
    </ul>
    <Button iconFile="add-row.svg" v-on:click.native="$emit('add-row')"/>
  </main>
</template>


<script>
import Button from "./Button";

export default {
  name: "TranscriptionsList",

  props: {
    items: Array
  },

  components: {
    Button
  }
};
</script>

<style>
</style>