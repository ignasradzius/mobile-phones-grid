<template>
  <ul>
    <li v-for="option in options" :key="`${option.name}-${id}`" class="text-center">
      <!-- TODO add a checked radio input by default -->
      <input type="radio" :id="`${option.name}-${id}`" :value="option.name" v-model="pickedOption" class="radio">
      <label :for="`${option.name}-${id}`">{{ option.name }}</label>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RadioButton',
  props: {
    options: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      pickedOption: ''
    }
  }
})
</script>

<style>
/* TODO add custom styling to radio button labels */
</style>