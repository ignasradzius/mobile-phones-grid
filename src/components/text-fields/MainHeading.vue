<template>
  <h1 class="text-4xl text-center font-semibold">
    {{ text }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MainHeading',
  props: {
    text: {
      type: String,
      default: 'Mobiltelefoner'
    }
  }
})
</script>
