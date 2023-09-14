import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Alert from '../src/alert.vue'

const AXIOM = 'Tu view is good'

describe('Alert.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Alert>{AXIOM}</Alert>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
