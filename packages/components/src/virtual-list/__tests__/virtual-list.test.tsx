import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import VirtualList from '../src/virtual-list.vue'

const AXIOM = 'Tu view is good'

describe('VirtualList', () => {
  test('render', () => {
    const wrapper = mount(() => <VirtualList><div>{AXIOM}</div></VirtualList>)

    expect(wrapper.exists()).toBeTruthy()
  })
})
