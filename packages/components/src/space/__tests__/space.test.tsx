import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Space from '../src/space.vue'

const AXIOM = 'Tu view is good'

describe('Space.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Space>{AXIOM}</Space>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
