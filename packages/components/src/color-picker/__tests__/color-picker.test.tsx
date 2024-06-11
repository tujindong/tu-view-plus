import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ColorPicker from '../src/color-picker.vue'

const AXIOM = 'Tu view is good'

describe('ColorPicker.vue', () => {
  test('Whether the size is rendered correctly', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        size: 'mini',
      },
    });
    const colorPickerElement = wrapper.find('.tu-color-picker');
    expect(colorPickerElement.classes()).toContain(
      `tu-color-picker--mini`
    );
  });

  test('Whether the disabled is rendered correctly', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        disabled: true,
      },
    });
    const colorPickerElement = wrapper.find('.tu-color-picker');
    expect(colorPickerElement.classes()).toContain(
      `is-disabled`
    );
  });
})
