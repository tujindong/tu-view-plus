import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import InputTag from '../src/input-tag.vue'

const AXIOM = 'Tu view is good'

describe('InputTag.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <InputTag>{AXIOM}</InputTag>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
