import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Slider from '../src/slider.vue'

const AXIOM = 'Tu view is good'

describe('Slider.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Slider>{AXIOM}</Slider>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
