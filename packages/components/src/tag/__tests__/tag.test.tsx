import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tag from '../src/tag.vue'

const AXIOM = 'Tu view is good'

describe('Tag.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Tag>{AXIOM}</Tag>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
