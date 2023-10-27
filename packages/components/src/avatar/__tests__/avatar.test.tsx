import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Avatar from '../src/avatar.vue'

const AXIOM = 'Tu view is good'

describe('Avatar.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Avatar>{AXIOM}</Avatar>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
