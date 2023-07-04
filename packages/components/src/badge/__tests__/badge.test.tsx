import { nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Badge from '../src/badge.vue';

const AXIOM = 'Tu view plus is good';

describe('Badge', () => {
  test('has value', () => {
    const wrapper = mount(() => <Badge value={80} />);
    expect(wrapper.find('.tu-badge__content').text()).toEqual('80');
  });

  test('is fixed', () => {
    const wrapper = mount(() => (
      <Badge
        v-slots={{
          default: () => AXIOM
        }}
      />
    ));
    expect(wrapper.find('.tu-badge__content.is-fixed').exists()).toBe(true);
    expect(wrapper.find('.tu-badge').text()).toBe(AXIOM);
  });

  test('is dot', () => {
    const wrapper = mount(() => (
      <Badge
        isDot={true}
        v-slots={{
          default: () => AXIOM
        }}
      />
    ));
    expect(wrapper.find('.tu-badge__content.is-dot').exists()).toBe(true);
    expect(
      wrapper.find('.tu-badge__content.tu-badge__content--danger').exists()
    ).toBe(true);
  });

  test('is dot with type', () => {
    const wrapper = mount(() => (
      <Badge
        isDot={true}
        type={'success'}
        v-slots={{
          default: () => AXIOM
        }}
      />
    ));
    expect(wrapper.find('.tu-badge__content.is-dot').exists()).toBe(true);
    expect(
      wrapper.find('.tu-badge__content.tu-badge__content--success').exists()
    ).toBe(true);
  });

  test('dot with text', () => {
    const wrapper = mount(() => <Badge text="评论" />);
    expect(
      wrapper.find('.tu-badge__content.tu-badge__content--danger').exists()
    ).toBe(true);
  });

  test('max', async () => {
    const badgeValue = ref(200);
    const wrapper = mount(() => <Badge max={100} value={badgeValue.value} />);
    expect(wrapper.find('.tu-badge__content').text()).toEqual('100+');
    badgeValue.value = 80;
    await nextTick();
    expect(wrapper.find('.tu-badge__content').text()).toEqual('80');
  });
});
