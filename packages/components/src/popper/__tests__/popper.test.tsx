import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Popper from '../src/popper.vue'

const AXIOM = 'Tu view is good'

describe('Popper.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Popper>{AXIOM}</Popper>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
