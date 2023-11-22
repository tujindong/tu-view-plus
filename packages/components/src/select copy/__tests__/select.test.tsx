import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Select from '../src/select.vue'

const AXIOM = 'Tu view is good'

describe('Select.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Select>{AXIOM}</Select>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
