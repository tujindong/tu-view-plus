import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Watermark from '../src/watermark.vue';

const AXIOM = 'Tu view is good';

describe('Watermark.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Watermark>{AXIOM}</Watermark>);

    expect(wrapper.classes()).toContain('tu-watermark');
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('slots', () => {
    const wrapper = mount(() => <Watermark>{AXIOM}</Watermark>);

    expect(wrapper.text()).toContain(AXIOM);
  });
});
