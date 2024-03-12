import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Menu from '../src/menu.vue'

const AXIOM = 'Tu view is good'

describe('Menu.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Menu>{AXIOM}</Menu>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
