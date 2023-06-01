import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Icon from '../src/icon.vue'

const AXIOM = 'Tu view is good'

describe('Icon.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Icon>{AXIOM}</Icon>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
