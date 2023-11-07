import { mount } from '@vue/test-utils';
import { it } from 'node:test';
import { describe, expect, test } from 'vitest';
import Skeleton from '../src/skeleton.vue';
import SkeletonLine from '../src/skeleton-line.vue';

const AXIOM = 'Tu view is good';

describe('Skeleton.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Skeleton>{AXIOM}</Skeleton>);

    expect(wrapper.text()).toEqual(AXIOM);
  });
});
