import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Dropdown from '../src/dropdown.vue'

const AXIOM = 'Tu view is good'

describe('Dropdown.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Dropdown>{AXIOM}</Dropdown>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
