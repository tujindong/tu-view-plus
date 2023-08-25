import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Modal from '../src/modal.vue'

const AXIOM = 'Tu view is good'

describe('Modal.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Modal>{AXIOM}</Modal>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
