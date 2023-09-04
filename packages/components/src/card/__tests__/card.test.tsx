import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Card from '../src/card.vue';

const AXIOM = 'Tu view is good';

describe('Card.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Card>{AXIOM}</Card>);

    expect(wrapper.text()).toEqual(AXIOM);
  });

  test('string title', () => {
    const title = 'I am title';
    const wrapper = mount(() => <Card title={title}>{AXIOM}</Card>);
    expect(wrapper.text()).toContain(title);
  });

  test('vnode title', () => {
    const wrapper = mount(() => (
      <Card
        v-slots={{
          title: () => <div class="header-title">vnode title</div>
        }}
      />
    ));
    expect(wrapper.find('.header-title').exists()).toBeTruthy();
  });

  test('header extra', () => {
    const wrapper = mount(() => (
      <Card
        v-slots={{
          title: () => <div class="header-title">vnode title</div>,
          extra: () => <div class="header-extra">extra</div>
        }}
      />
    ));
    expect(wrapper.find('.header-extra').exists()).toBeTruthy();
  });

  test('body style', () => {
    const style = 'font-size: 14px;';
    const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>);
    expect(wrapper.find('.tu-card__body').attributes('style')).toBe(style);
  });

  test('body style with object', () => {
    const style = { 'font-size': '14px' };
    const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>);
    expect(wrapper.find('.tu-card__body').attributes('style')).toBe(
      'font-size: 14px;'
    );
  });

  test('body style with array', () => {
    const style = [{ 'font-size': '14px' }, { color: 'blue' }];
    const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>);
    expect(
      wrapper.find('.tu-card__body').attributes('style')?.replace(/[ ]/g, '')
    ).toBe('font-size:14px;color:blue;');
  });
});
