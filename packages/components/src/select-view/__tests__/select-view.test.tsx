import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import SelectView from '../src/select-view.vue'

const AXIOM = 'Tu view is good'

describe('SelectView.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <SelectView>{AXIOM}</SelectView>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
