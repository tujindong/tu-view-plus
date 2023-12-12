import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TimePicker from '../src/time-picker.vue'

const AXIOM = 'Tu view is good'

describe('TimePicker.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <TimePicker>{AXIOM}</TimePicker>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
