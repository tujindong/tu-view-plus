import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Divider from '../src/divider.vue'

const AXIOM = 'Tu view is good'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Divider>{AXIOM}</Divider>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
