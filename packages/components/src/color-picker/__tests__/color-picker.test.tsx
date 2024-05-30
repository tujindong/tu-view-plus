import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ColorPicker from '../src/color-picker.vue'

const AXIOM = 'Tu view is good'

describe('ColorPicker.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <ColorPicker>{AXIOM}</ColorPicker>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
