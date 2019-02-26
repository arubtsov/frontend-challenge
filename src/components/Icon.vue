<template>  
    <img :src="require(`@/assets/${fileName}`)" draggable="false"/>
</template>

<script>
export default {
  name: "Icon",

  props: {
    fileName: String
  }
};
</script>
