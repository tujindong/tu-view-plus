import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TreeSelect from '../src/tree-select.vue'

const AXIOM = 'Tu view is good'

describe('TreeSelect.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <TreeSelect>{AXIOM}</TreeSelect>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
