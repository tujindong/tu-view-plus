import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Drawer from '../src/drawer.vue'

const AXIOM = 'Tu view is good'

describe('Drawer.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Drawer>{AXIOM}</Drawer>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
