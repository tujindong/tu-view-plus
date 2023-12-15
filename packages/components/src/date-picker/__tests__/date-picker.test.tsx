import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DatePicker from '../src/date-picker.vue'

const AXIOM = 'Tu view is good'

describe('DatePicker.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <DatePicker>{AXIOM}</DatePicker>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
