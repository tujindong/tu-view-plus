import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Empty from '../src/empty.vue'

const AXIOM = 'Tu view is good'

describe('Empty.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Empty>{AXIOM}</Empty>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
