import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Message from '../src/message.vue'

const AXIOM = 'Tu view is good'

describe('Message.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Message>{AXIOM}</Message>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
