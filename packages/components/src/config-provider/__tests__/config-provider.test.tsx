import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ConfigProvider from '../src/config-provider.vue'

const AXIOM = 'Tu view is good'

describe('ConfigProvider.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <ConfigProvider>{AXIOM}</ConfigProvider>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
