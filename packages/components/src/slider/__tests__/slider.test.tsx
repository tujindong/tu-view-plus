import { ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Slider from '../src/slider.vue'


describe('Slider', () => {
  test('create', () => {
    const wrapper = mount(() => <Slider />)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('size', async () => {
    const value = ref(0)
    const wrapper = mount(() => <Slider v-model={value.value} size="small" />)
    expect(wrapper.find('.tu-slider--small').exists()).toBe(true)
  })
})
