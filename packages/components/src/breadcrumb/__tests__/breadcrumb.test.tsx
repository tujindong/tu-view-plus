import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Breadcrumb from '../src/breadcrumb.vue'

const AXIOM = 'Tu view is good'

describe('Breadcrumb.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Breadcrumb>{AXIOM}</Breadcrumb>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
