import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Input from '../src/input.vue'

const AXIOM = 'Tu view is good'

describe('Input.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Input>{AXIOM}</Input>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
