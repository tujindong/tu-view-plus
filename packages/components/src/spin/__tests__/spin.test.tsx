import { ref, nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Spin from '../src/spin.vue';

const AXIOM = 'Tu view is good';

describe('Spin', () => {
  test('render', async () => {
    const loading = ref(true);
    const wrapper = mount(() => <Spin loading={loading.value}>{AXIOM}</Spin>);
    const contentWrapper = wrapper.find('.tu-spin__content');

    expect(contentWrapper.exists()).toBeTruthy();
    expect(wrapper.text()).toEqual(AXIOM);

    loading.value = false;
    await nextTick();

    expect(wrapper.find('.tu-spin__content').exists()).toBeFalsy();
  });

  test('spin with tip', () => {
    const wrapper = mount(() => (
      <Spin loading={true} tip="loading..">
        {AXIOM}
      </Spin>
    ));

    expect(wrapper.find('.tu-spin__tip').text()).toEqual('loading..');
  });

  test('custom icon', async () => {
    const loading = ref(true);
    const wrapper = mount(() => (
      <Spin
        loading={loading.value}
        v-slots={{ icon: () => <path class="custom-path" d="M 30 15" /> }}
      >
        {AXIOM}
      </Spin>
    ));
    await nextTick();
    expect(wrapper.find('.custom-path').attributes().d).toEqual('M 30 15');
  });
});
