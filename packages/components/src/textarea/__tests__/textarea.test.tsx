import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Textarea from '../src/textarea.vue'

const AXIOM = 'Tu view is good'

describe('Textarea.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Textarea>{AXIOM}</Textarea>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
