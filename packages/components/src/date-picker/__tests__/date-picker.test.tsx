import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DatePicker from '../src/pickers/date-picker.vue'

describe('DatePicker.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <DatePicker></DatePicker>)
    expect(wrapper.html()).toMatchSnapshot();
  })
})
