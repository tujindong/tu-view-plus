import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Alert from '../src/alert.vue'

const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Alert>{AXIOM}</Alert>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
