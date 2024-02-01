import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tree from '../src/tree.vue'

const AXIOM = 'Tu view is good'

describe('Tree.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Tree>{AXIOM}</Tree>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
