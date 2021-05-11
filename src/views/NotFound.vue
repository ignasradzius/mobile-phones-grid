<template>
  <main class="container mx-auto text-center p-10">
    <h1>404 not found</h1>
    <p>it seems you're in the wrong page, try going to</p>
    <router-link to="/" >Home</router-link>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NotFound'
})
</script>
