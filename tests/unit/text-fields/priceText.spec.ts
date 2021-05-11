import { shallowMount } from '@vue/test-utils'
import PriceText from '@/components/text-fields/PriceText.vue'

describe('PriceText', () => {
  const priceSuffix = 'kr/mån'
  const price = '399.0'
  const pricePrefix = 'Pris'
  
  test('renders props.pricePrefix when passed', () => {
    const wrapper = shallowMount(PriceText, {
      propsData: { pricePrefix }
    })
    expect(wrapper.text()).toMatch(pricePrefix)
  })

  test('renders props.price when passed', () => {
    const wrapper = shallowMount(PriceText, {
      propsData: { price }
    })
    expect(wrapper.text()).toMatch(price)
  })

  test('renders props.priceSuffix when passed', () => {
    const wrapper = shallowMount(PriceText, {
      propsData: { priceSuffix }
    })
    expect(wrapper.text()).toMatch(priceSuffix)
  })
})