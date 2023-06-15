import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Popover from '../src/popover.vue'

const AXIOM = 'Tu view is good'

describe('Popover.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Popover>{AXIOM}</Popover>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
