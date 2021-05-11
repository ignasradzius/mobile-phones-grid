import { shallowMount } from '@vue/test-utils'
import MainHeading from '@/components/text-fields/MainHeading.vue'

describe('MainHeading', () => {
  const wrapper = shallowMount(MainHeading)
  test('shows default heading text', () => {
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Mobiltelefoner')
  })

  test('should show props.text when prop is passes', async () => {
    await wrapper.setProps({text: 'Telia'})
    expect(wrapper.text()).toBe('Telia')
  })
})