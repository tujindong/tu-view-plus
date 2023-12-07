import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Select from '../src/select.vue'

describe('Select.vue', () => {
  test('show dropdown correctly', async () => {
    const wrapper = mount(Select, {
      props: {
        options: ['Option1', 'Option2', 'Option3', 'Option4'],
      },
    });

    await wrapper.find('.tu-select-view').trigger('click');

    expect(document.body.outerHTML).toMatchSnapshot();
  });

  test('keyboard correctly', async () => {
    const wrapper = mount(Select, {
      props: {
        options: ['Option1', 'Option2', 'Option3'],
      },
    });

    const input = wrapper.find('input');
    await input.trigger('click');
    const dropdown = wrapper.findComponent({ name: 'TuSelectDropdown' });
    await input.trigger('keydown', { key: 'ArrowUp' });

    expect(dropdown.find('.is-active').text()).toBe(
      'Option3'
    );

    await input.trigger('keydown', { key: 'ArrowDown' });

    expect(dropdown.find('.is-active').text()).toBe('Option1');

    await input.trigger('keydown', { key: 'Enter' });

    expect(wrapper.emitted('change')?.[0]).toEqual(['Option1']);
  });

  test('should support mouse', async () => {
    const wrapper = mount(Select, {
      props: {
        options: ['Option1', 'Option2', 'Option3'],
      },
    });

    const input = wrapper.find('input');
    await input.trigger('click');
    const dropdown = wrapper.findComponent({ name: 'TuSelectDropdown' });
    const options = dropdown.findAll('.tu-select__option');
    await options[0].trigger('mouseenter');
    await options[0].trigger('mouseleave');
    await options[1].trigger('mouseenter');
    await options[1].trigger('click');

    expect(wrapper.emitted('change')?.[0]).toEqual(['Option2']);
  });

  test('should show search option', async () => {
    const wrapper = mount(Select, {
      props: {
        options: ['Option1', 'Option2', 'Option3'],
        allowSearch: true,
      },
    });

    const input = wrapper.find('input');
    await input.trigger('click');
    await input.setValue('1');
    const dropdown = wrapper.findComponent({ name: 'TuSelectDropdown' });
    const option = dropdown.find('.tu-select__option');
    expect(option.text()).toBe('Option1');
  });

  test('should enable create option', async () => {
    const wrapper = mount(Select, {
      props: {
        options: ['Option1', 'Option2', 'Option3'],
        allowCreate: true,
      },
    });

    const input = wrapper.find('input');
    await input.trigger('click');
    await input.setValue('Option4');
    await input.trigger('keydown', { key: 'Enter' });

    expect(wrapper.emitted('change')?.[0]).toEqual(['Option4']);
  });
})
