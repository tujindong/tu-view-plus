import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ResizeObserver from '../src/resize-observer.vue'

const AXIOM = 'Tu view is good'

describe('ResizeObserver', () => {
  test('render', () => {
    const wrapper = mount(() => <ResizeObserver>{AXIOM}</ResizeObserver>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
