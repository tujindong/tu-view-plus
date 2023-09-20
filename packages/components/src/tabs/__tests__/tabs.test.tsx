import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tabs from '../src/tabs.vue'

const AXIOM = 'Tu view is good'

describe('Tabs.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Tabs>{AXIOM}</Tabs>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
