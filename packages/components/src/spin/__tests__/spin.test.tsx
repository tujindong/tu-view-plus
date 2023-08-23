import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Spin from '../src/spin.vue'

const AXIOM = 'Tu view is good'

describe('Spin.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Spin>{AXIOM}</Spin>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
