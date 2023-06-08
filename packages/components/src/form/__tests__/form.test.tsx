import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Form from '../src/form.vue'

const AXIOM = 'Tu view is good'

describe('Form.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Form>{AXIOM}</Form>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
