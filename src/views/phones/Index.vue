<template>
  <main class="container mx-auto px-4">
    <section class="max-w-4xl mx-auto my-10">
      <MainHeading />
      <ul class="phones-grid">
        <li 
          v-for="brand in allPhones.options" 
          :key="brand.id"
        >
          <router-link :to="{ name: 'Brand', params: { id: brand.id }}">
            <PhoneCard 
              keep-alive
              :image-url="brand.displayImageUrl" 
              :title="brand.displayName"
            />
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import PhoneCard from '@/components/phones/PhoneCard.vue'
import MainHeading from '@/components/text-fields/MainHeading.vue'

export default Vue.extend({
  name: 'Phones',
  components: {
    PhoneCard,
    MainHeading
  },
  computed: {
    ...mapGetters(['allPhones'])
  },
  methods: {
    ...mapActions(['getPhones'])
  },
  created () {
    this.getPhones()
  }
})
</script>
