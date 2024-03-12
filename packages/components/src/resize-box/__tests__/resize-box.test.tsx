import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ResizeBox from '../src/resize-box.vue'

const AXIOM = 'Tu view is good'

describe('ResizeBox.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <ResizeBox>{AXIOM}</ResizeBox>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
