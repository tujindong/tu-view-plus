import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Popconfirm from '../src/popconfirm.vue'

const AXIOM = 'Tu view is good'

describe('Popconfirm.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Popconfirm>{AXIOM}</Popconfirm>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
