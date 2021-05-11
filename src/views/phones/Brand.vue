<template>
  <main class="container mx-auto px-4 my-10">
    <div class="flex justify-between">
      <router-link :to="{ name: 'Phones' }">
        &#x2039; Gå tillbaka
      </router-link>
      <transition tag="div" name="appear" mode="out-in" class="flex space-x-2">
        <button 
          v-if="sortMethod === 'none'" 
          class="btn btn-green" 
          key="alphabetically" 
          @click="toggleSorting('alphabetically')"
        >
          Sortera alfabetiskt
        </button>
        <button 
          v-else 
          class="btn btn-blue" 
          key="none" 
          @click="toggleSorting('none')"
        >
          osorterat
        </button>
      </transition>
    </div>
    <transition-group name="list" class="phones-grid" tag="ul">
      <li 
        v-for="phone in sortedList" 
        :key="`${phone.contentKey}`"
        class="relative"
      >
        <FavouriteButton 
          :itemKey="phone.contentKey"
          :favourites="favourites" 
        />
        <PhoneCard 
          keep-alive
          :image-url="phone.imgUrl" 
          :title="phone.displayName"
        >
          <PriceText 
            :price="phone.price" 
            :pricePrefix="phone.pricePrefix" 
            :priceSuffix="phone.priceSuffix" 
          />
          <RadioButton class="mt-3" :id="phone.contentKey" :options="phone.colorOptions" />
        </PhoneCard>
      </li>
    </transition-group>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import PhoneCard from '@/components/phones/PhoneCard.vue'
import FavouriteButton from '@/components/buttons/FavouriteButton.vue'
import RadioButton from '@/components/buttons/RadioButton.vue'
import PriceText from '@/components/text-fields/PriceText.vue'
import Phone from '@/types'

export default Vue.extend({
  name: 'Brand',
  components: {
    PhoneCard,
    FavouriteButton,
    RadioButton,
    PriceText
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      sortMethod: 'none'
    }
  },
  computed: {
    phonesByBrand() :Phone[] {
      const brandId = this.$props.id as string
      return this.$store.getters.phonesByBrand(brandId)
    },
    favourites() :string[] {
      return this.$store.getters.favourites
    },
    sortedList() :Phone[] {
      let sortedPhones = [...this.phonesByBrand]
      switch (this.sortMethod) {
        case 'none': return sortedPhones
        case 'alphabetically': return sortedPhones.sort((aObj: Phone, bObj: Phone) => aObj.displayName.localeCompare(bObj.displayName))
      }
      return sortedPhones
    }
  },
  created () {
    this.getPhonesByBrand()
    this.getFavourites()
  },
  methods: {
    ...mapActions(['getPhonesByBrand', 'getFavourites']),
    toggleSorting (payload: string) {
      this.sortMethod = payload
    }
  }
})
</script>

<style lang="scss" scoped>
.list-move {
  transition: all .4s ease;
}
.appear-enter-active {
  transition: all .25s;
}
.appear-leave-active {
  transition: all .25s;
}
.appear-enter, .appear-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>