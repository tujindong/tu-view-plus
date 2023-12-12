import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import RangePicker from '../src/range-picker.vue'

const AXIOM = 'Tu view is good'

describe('RangePicker.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <RangePicker>{AXIOM}</RangePicker>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
