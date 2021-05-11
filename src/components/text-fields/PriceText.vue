<template>
  <p class="text-gray-700 text-center mt-2">
    {{ pricePrefix }}
    <span class="text-xl text-gray-900 font-semibold">
      {{ ` ${price} ` }}
    </span> 
    {{ priceSuffix }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PriceText',
  props: {
    pricePrefix: {
      type: String
    },
    priceSuffix: {
      type: String
    },
    price: {
      type: String
    }
  }
})
</script>
