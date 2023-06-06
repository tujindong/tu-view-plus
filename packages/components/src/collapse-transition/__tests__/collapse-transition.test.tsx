import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CollapseTransition from '../src/collapse-transition.vue'

const AXIOM = 'Tu view is good'

describe('CollapseTransition.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <CollapseTransition>{AXIOM}</CollapseTransition>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
