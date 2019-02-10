<template>  
    <img :src="require(`@/assets/${fileName}`)"/>
</template>

<script>
export default {
  name: "Icon",

  props: {
    fileName: String
  }
};
</script>
