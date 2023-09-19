import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Divider from '../src/divider.vue'

const AXIOM = 'Tu view is good'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Divider>{AXIOM}</Divider>)
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('direction', () => {
    const wrapper = mount(() => <Divider direction={'vertical'}>{AXIOM}</Divider>)
    expect(wrapper.classes()).toContain('tu-divider--vertical')
  })

  test('orientation', () => {
    const wrapper = mount(() => <Divider orientation={'right'}>{AXIOM}</Divider>)
    expect(wrapper.classes()).toContain('is-right')
  })
})
