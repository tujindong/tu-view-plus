import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Link from '../src/link.vue';

const AXIOM = 'Tu view is good';

describe('Link.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Link>{AXIOM}</Link>);

    expect(wrapper.text()).toEqual(AXIOM);
  });

  test('should handle click event when link is not disabled', async () => {
    const wrapper = mount(() => <Link>{AXIOM}</Link>);

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  test('should disable click when link is disabled', async () => {
    const wrapper = mount(() => <Link disabled>{AXIOM}</Link>);

    expect(wrapper.classes()).toContain('is-disabled');
    expect(wrapper.attributes('href')).toBeUndefined();
  });

  test('icon slots', () => {
    const linkName = 'test link';
    const wrapper = mount(() => (
      <Link
        v-slots={{
          default: () => linkName,
          icon: () => AXIOM
        }}
      />
    ));
    expect(wrapper.text()).toContain(linkName);
    expect(wrapper.text()).toContain(AXIOM);
  });
});
