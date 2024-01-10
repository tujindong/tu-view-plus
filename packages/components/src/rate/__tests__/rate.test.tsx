import { nextTick, ref } from 'vue';

import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Rate from '../src/rate.vue';
import { TuFormItem } from '../../form';
import type { RateInstance } from '../src/rate';

describe('Rate.vue', () => {
  test('create', () => {
    const wrapper = mount(Rate, {
      props: {
        max: 10
      }
    });
    const stars = wrapper.findAll('.tu-rate__item');
    expect(stars.length).toMatchInlineSnapshot('10');
  });

  test('size', async () => {
    const wrapper = mount(Rate, {
      props: {
        size: 'large'
      }
    });
    expect(wrapper.find('.tu-rate--large').exists()).toBe(true);
    await wrapper.setProps({ size: '' });
    expect(wrapper.find('.tu-rate').exists()).toBe(true);
  });

  test('allow half', async () => {
    const value = ref(0);
    const wrapper = mount(() => <Rate v-model={value.value} allowHalf />);
    const vm = wrapper.getComponent(Rate).vm as RateInstance;

    const secondStar = wrapper.findAll('.tu-rate__item')[1]
      .element as HTMLElement;
    vm.handleSetCurrentValue(1, {
      target: secondStar,
      offsetX: 0
    } as any as MouseEvent);
    secondStar.click();
    vm.handleResetCurrentValue();
    expect(value.value).toEqual(0.5);
  });

  test('with texts', () => {
    const wrapper = mount(Rate, {
      props: {
        showText: true,
        modelValue: 4,
        texts: ['1', '2', '3', '4', '5']
      }
    });
    const text = wrapper.find('.tu-rate__text').element;
    expect(text.textContent).toMatchInlineSnapshot('"4"');
  });

  test('text color', () => {
    const wrapper = mount(Rate, {
      props: {
        showText: true,
        modelValue: 1,
        textColor: 'red'
      }
    });
    const text = wrapper.find('.tu-rate__text').element as HTMLSpanElement;
    expect(text.style.color).toEqual('red');
  });

  test('value change', async () => {
    const wrapper = mount(Rate, {
      props: {
        modelValue: 0
      }
    });
    const vm = wrapper.vm;
    await wrapper.setProps({ modelValue: 3 });
    expect(vm.modelValue).toMatchInlineSnapshot('3');
  });

  test('click', () => {
    const value1 = ref(0);
    const wrapper = mount(() => <Rate v-model={value1.value} />);

    const thirdStar = wrapper.findAll('.tu-rate__item')[2]
      .element as HTMLElement;
    thirdStar.click();

    expect(value1.value).toEqual(3);
  });

  test('colors', () => {
    const value = ref(4);
    const wrapper = mount(() => (
      <Rate v-model={value.value} colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
    ));

    const rateEl = wrapper.find('.tu-rate').element as HTMLElementolor;
    expect(rateEl.style.getPropertyValue('--rate-fill-color')).toBe('#FF9900');
  });

  test('change event', () => {
    const value = ref(4);
    const changeCount = ref(0);
    const handleChange = () => {
      changeCount.value++;
    };
    const wrapper = mount(() => (
      <Rate v-model={value.value} onChange={handleChange} />
    ));

    const fourthStar = wrapper.findAll('.tu-rate__item')[3]
      .element as HTMLElement;
    fourthStar.click();

    expect(value.value).toEqual(4);
    expect(changeCount.value).toEqual(0);
    const fifthStar = wrapper.findAll('.tu-rate__item')[4]
      .element as HTMLElement;
    fifthStar.click();
    expect(value.value).toEqual(5);
    expect(changeCount.value).toEqual(1);
  });

  test('clearable', () => {
    const value = ref(4);
    const changeCount = ref(0);
    const handleChange = () => {
      changeCount.value++;
    };
    const wrapper = mount(() => (
      <Rate v-model={value.value} clearable onChange={handleChange} />
    ));

    const fourthStar = wrapper.findAll('.tu-rate__item')[3]
      .element as HTMLElement;
    fourthStar.click();

    expect(value.value).toEqual(0);
    expect(changeCount.value).toEqual(1);
    const fifthStar = wrapper.findAll('.tu-rate__item')[4]
      .element as HTMLElement;
    fifthStar.click();
    expect(value.value).toEqual(5);
    expect(changeCount.value).toEqual(2);
  });

  test('show background icon when allow-half attribute is true', async () => {
    const value = ref(3.5);
    const wrapper = mount(() => <Rate v-model={value.value} allow-half />);
    expect(wrapper.find('.tu-rate__decimal--box').exists()).toBe(true);
    value.value = 3.4;
    await nextTick();
    expect(wrapper.find('.tu-rate__decimal--box').exists()).toBe(false);
  });

  test('show background icon when disabled attribute is true', async () => {
    const value = ref(3.2);
    const wrapper = mount(() => <Rate v-model={value.value} disabled />);
    expect(wrapper.find('.tu-rate__decimal--box').exists()).toBe(true);
  });

  test('form item role is group when multiple rates', async () => {
    const wrapper = mount(() => (
      <TuFormItem label="Foobar" data-test-ref="item">
        <Rate data-test-ref="rate1" />
        <Rate data-test-ref="rate2" />
      </TuFormItem>
    ));

    await nextTick();
    const formItem = wrapper.find('[data-test-ref="item"]');
    expect(formItem.attributes().role).toBe('group');
  });
  
  // TODO ..
  // test('automatic id attachment', async () => {
  //   const wrapper = mount(() => (
  //     <TuFormItem label="Foobar" data-test-ref="item">
  //       <Rate data-test-ref="rate" />
  //     </TuFormItem>
  //   ));

  //   await nextTick();
  //   const formItem = wrapper.find('[data-test-ref="item"]');
  //   const rate = wrapper.find('[data-test-ref="rate"]');
  //   const formItemLabel = formItem.find('.tu-form-item__label');
  //   expect(formItem.attributes().role).toBeFalsy();
  //   expect(formItemLabel.attributes().for).toBe(rate.attributes().id);
  // });

  // test('specified id attachment', async () => {
  //   const wrapper = mount(() => (
  //     <TuFormItem label="Foobar" data-test-ref="item">
  //       <Rate id="foobar" data-test-ref="rate" />
  //     </TuFormItem>
  //   ));

  //   await nextTick();
  //   const formItem = wrapper.find('[data-test-ref="item"]');
  //   const rate = wrapper.find('[data-test-ref="rate"]');
  //   const formItemLabel = formItem.find('.tu-form-item__label');
  //   expect(formItem.attributes().role).toBeFalsy();
  //   expect(rate.attributes().id).toBe('foobar');
  //   expect(formItemLabel.attributes().for).toBe(rate.attributes().id);
  // });
});
