import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Test from '../src/test.vue'

const AXIOM = 'Tu view is good'

describe('Test.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Test>{AXIOM}</Test>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
