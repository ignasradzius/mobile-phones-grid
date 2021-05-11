<template>
  <div class="phone-card">
    <img 
      class="phone-card__img" 
      :src="imageUrl" 
      :alt="title"
    >
    <p class="phone-card__title">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PhoneCard',
  props: {
    imageUrl: {
      type: String
    },
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.phone-card {
  padding: 0 16px;
  &__img {
    margin-left: auto;
    margin-right: auto;
    height: 256px;
    transition: all .25s ease-in-out;
    @media (min-width: 640px) {
      height: 206px;
    }
  }
  &__title {
    margin-top: 24px;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
  }
  &:hover > .phone-card__img {
    transform: scale(1.1);
    transition: all .25s ease-in-out;
  }
}
</style>