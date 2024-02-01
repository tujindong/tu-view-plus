import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Upload from '../src/upload.vue'

const AXIOM = 'Tu view is good'

describe('Upload.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Upload>{AXIOM}</Upload>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
