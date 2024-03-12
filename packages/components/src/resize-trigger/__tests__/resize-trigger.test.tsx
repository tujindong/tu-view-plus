import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ResizeTrigger from '../src/resize-trigger.vue'

const AXIOM = 'Tu view is good'

describe('ResizeTrigger.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <ResizeTrigger>{AXIOM}</ResizeTrigger>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
