import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Result from '../src/result.vue'

const AXIOM = 'Tu view is good'

describe('Result.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Result>{AXIOM}</Result>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
