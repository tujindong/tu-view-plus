import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Radio from '../src/radio.vue'

const AXIOM = 'Tu view is good'

describe('Radio.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Radio>{AXIOM}</Radio>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
