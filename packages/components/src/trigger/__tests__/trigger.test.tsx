import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Trigger from '../src/trigger.vue'

const AXIOM = 'Tu view is good'

describe('Trigger.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Trigger>{AXIOM}</Trigger>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
