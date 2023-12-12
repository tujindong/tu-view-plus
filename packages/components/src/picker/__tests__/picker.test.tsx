import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Picker from '../src/picker.vue'

const AXIOM = 'Tu view is good'

describe('Picker.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Picker>{AXIOM}</Picker>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
