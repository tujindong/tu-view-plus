import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import InputNumber from '../src/input-number.vue'

const AXIOM = 'Tu view is good'

describe('InputNumber.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <InputNumber>{AXIOM}</InputNumber>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
