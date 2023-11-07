import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Skeleton from '../src/skeleton.vue';

const AXIOM = 'Tu view is good';

describe('Skeleton.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Skeleton>{AXIOM}</Skeleton>);

    expect(wrapper.text()).toEqual(AXIOM);
  });
});
