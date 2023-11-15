import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import InputTag from '../src/input-tag.vue'

describe('InputTag', () => {
  test('should emit change event', () => {
    const wrapper = mount(InputTag);
    const input = wrapper.find('input');

    input.setValue('test');
    input.trigger('keydown', { key: 'Enter' });
    const emits = wrapper.emitted('change');
    expect(emits).toHaveLength(1);

    // @ts-ignore
    expect(emits?.[0][0][0]).toEqual('test');
  });

  test('should clear content', async () => {
    const wrapper = mount(InputTag, {
      props: {
        defaultValue: ['test', 'test-2', 'test-3'],
        clearable: true,
      },
    });
    const tags = wrapper.findAllComponents({ name: 'TuTag' });
    expect(tags).toHaveLength(3);
    await tags[1].find('.tu-tag__close').trigger('click');
    expect(wrapper.emitted('remove')).toHaveLength(1);
    await wrapper.find('.tu-input-tag__icon--clear').trigger('click');
    expect(wrapper.emitted('clear')).toHaveLength(1);
  });
})
