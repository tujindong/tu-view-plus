import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import OnlyClient from '../src/only-client.vue'

const AXIOM = 'Tu view is good'

describe('OnlyClient', () => {
  test('render', () => {
    const wrapper = mount(() => <OnlyClient><div>{AXIOM}</div></OnlyClient>)

    expect(wrapper.exists()).toBeTruthy()
  })
})
