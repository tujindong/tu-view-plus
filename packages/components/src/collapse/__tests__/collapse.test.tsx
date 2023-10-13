import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Collapse from '../src/collapse.vue'

const AXIOM = 'Tu view is good'

describe('Collapse.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Collapse>{AXIOM}</Collapse>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
