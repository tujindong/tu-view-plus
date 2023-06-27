import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import OnlyClient from '../src/only-client.vue'

const AXIOM = 'Tu view is good'

describe('OnlyClient.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <OnlyClient>{AXIOM}</OnlyClient>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
