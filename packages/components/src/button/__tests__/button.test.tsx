import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Button from '../src/button.vue'

const AXIOM = 'Tu view is good'

describe('Button.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Button>{AXIOM}</Button>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
