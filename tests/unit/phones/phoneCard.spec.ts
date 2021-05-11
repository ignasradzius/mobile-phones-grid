import { shallowMount } from '@vue/test-utils'
import PhoneCard from '@/components/phones/PhoneCard.vue'

describe('PhoneCard', () => {
  test('renders props.title when passed', () => {
    const title = 'Mobile P40'
    const wrapper = shallowMount(PhoneCard, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})