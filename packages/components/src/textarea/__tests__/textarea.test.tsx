import { nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, test, vi } from 'vitest';
import defineGetter from '@tu-view-plus/test-utils/define-getter'
import Textarea from '../src/textarea.vue';

import type { CSSProperties } from 'vue'
import type { TextareaInstance, TextareaProps } from '../src/textarea'

describe('Textarea', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('create', async () => {
    const textarea = ref('textarea');
    const handleFocus = vi.fn();
    const wrapper = mount(() => (
      <Textarea
        minlength={3}
        maxlength={10}
        placeholder="请输入内容"
        onFocus={handleFocus}
        modelValue={textarea.value}
      />
    ));

    const textareaElm = wrapper.find('textarea');
    const nativeTextarea = textareaElm.element;

    await textareaElm.trigger('focus');

    expect(textareaElm.exists()).toBe(true);
    expect(handleFocus).toHaveBeenCalled();
    expect(nativeTextarea.placeholder).toMatchInlineSnapshot(`"请输入内容"`);
    expect(nativeTextarea.value).toMatchInlineSnapshot(`"textarea"`);
    expect(nativeTextarea.minLength).toMatchInlineSnapshot(`3`);

    textarea.value = 'text';
    await nextTick();
    expect(textareaElm.element.value).toMatchInlineSnapshot(`"text"`);
  });

  test('default to empty', () => {
    const wrapper = mount(() => <Textarea />);
    const textareaElm = wrapper.find('textarea');
    expect(textareaElm.element.value).toBe('');
  });

  test('disabled', () => {
    const wrapper = mount(() => <Textarea disabled />);
    const textareaElm = wrapper.find('textarea');
    expect(textareaElm.element.disabled).not.toBeNull();
  });

  test('size', () => {
    const wrapper = mount(() => <Textarea size="large" />);
    expect(wrapper.classes('tu-textarea--large')).toBe(true);
  });

  test('rows', () => {
    const wrapper = mount(() => <Textarea rows={3} />);
    expect(wrapper.find('textarea').element.rows).toEqual(3);
  });

  test('resize', async () => {
    const resize = ref<InputProps['resize']>('none');
    const wrapper = mount(() => (
      <Textarea type="textarea" resize={resize.value} />
    ));
    const textarea = wrapper.find('textarea').element;
    await nextTick();
    expect(textarea.style.resize).toEqual(resize.value);
    resize.value = 'horizontal';
    await nextTick();
    expect(textarea.style.resize).toEqual(resize.value);
  });

  test('sets value', async () => {
    const val = ref('123');
    const wrapper = mount(() => <Textarea v-model={val.value} />);
    const vm = wrapper.vm;
    expect(vm.$el.querySelector('textarea').value).toMatchInlineSnapshot(
      `"123"`
    );
  });

  test('limit input and show word count', async () => {
    const textarea = ref('textarea');
    const wrapper = mount(() => (
      <Textarea v-model={textarea.value} maxlength={2} showWordLimit />
    ));
    expect(Array.from(wrapper.vm.$el.classList)).toMatchInlineSnapshot(`
      [
        "tu-textarea",
        "tu-textarea--medium",
        "is-exceed",
      ]
    `);

    textarea.value = '1';
    await nextTick()

    expect(Array.from(wrapper.vm.$el.classList)).toMatchInlineSnapshot(`
      [
        "tu-textarea",
        "tu-textarea--medium",
      ]
    `);
  });

  test('use formatter and parser', () => {
    const val = ref('10000')
    const formatter = (val: string) => {
      return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    const parser = (val: string) => {
      return val.replace(/\$\s?|(,*)/g, '')
    }

    const wrapper = mount(() => (
      <Textarea v-model={val.value} formatter={formatter} parser={parser} />
    ))

    const vm = wrapper.vm
    const event = new Event('input', { bubbles: true })
    expect(vm.$el.querySelector('textarea').value).toEqual('10,000')
    expect(vm.$el.querySelector('textarea').value).not.toEqual('1000')
    vm.$el.querySelector('textarea').value = '1,000,000'
    vm.$el.querySelector('textarea').dispatchEvent(event)
    expect(val.value).toEqual('1000000')
  })

  describe('Textarea Methods', () => {
    test('method:select', async () => {
      const testContent = ref('test')
      const wrapper = mount(() => <Textarea v-model={testContent.value} />)

      const textarea = wrapper.find('textarea').element

      let selected = false
      defineGetter(textarea, 'selectionStart', function (this: HTMLInputElement) {
        return selected ? 0 : this.value.length
      })
      defineGetter(textarea, 'selectionEnd', function (this: HTMLInputElement) {
        return this.value.length
      })

      expect(textarea.selectionStart).toEqual(testContent.value.length)
      expect(textarea.selectionEnd).toEqual(testContent.value.length)

      textarea.select()
      selected = true
      await nextTick()
      expect(textarea.selectionStart).toEqual(0)
      expect(textarea.selectionEnd).toEqual(testContent.value.length)
    })

    test('method:resizeTextarea', async () => {
      const text = ref('TEXT:resizeTextarea')
      const wrapper = mount({
        setup: () => () =>
        (
          <Textarea
            ref="textarea"
            autosize={{ minRows: 1, maxRows: 1 }}
            type="textarea"
            v-model={text.value}
          />
        ),
      })
      const TextareaRef = wrapper.vm.$refs.textarea as TextareaInstance

      const originMinHeight = (TextareaRef.textareaStyle as CSSProperties).minHeight
        (TextareaRef.autosize as Exclude<TextareaRef, boolean>).minRows = 5

      TextareaRef.resizeTextarea()

      const nowMinHeight = (TextareaRef.textareaStyle as any)[1].minHeight
      expect(originMinHeight).not.toEqual(nowMinHeight)
    })
  })
});
