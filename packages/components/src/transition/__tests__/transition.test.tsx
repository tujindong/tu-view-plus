import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Transition from '../src/transition.vue'

const AXIOM = 'Tu view is good'

describe('Transition.vue', () => {
  test('create', () => {
    const wrapper = mount(() => <Transition>{AXIOM}</Transition>)
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
