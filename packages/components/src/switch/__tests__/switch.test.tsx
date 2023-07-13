import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Switch from '../src/switch.vue'

const AXIOM = 'Tu view is good'

describe('Switch.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Switch>{AXIOM}</Switch>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
