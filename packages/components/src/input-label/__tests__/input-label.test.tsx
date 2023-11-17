import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import InputLabel from '../src/input-label.vue'

const AXIOM = 'Tu view is good'

describe('InputLabel.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <InputLabel>{AXIOM}</InputLabel>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
