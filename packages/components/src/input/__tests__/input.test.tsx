import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import defineGetter from '@tu-view-plus/test-utils/define-getter'
import Input from '../src/input.vue'

describe('Input', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('create', async () => {
    const input = ref('input')
    const handleFocus = vi.fn()
    const wrapper = mount(() => (
      <Input
        minlength={3}
        maxlength={5}
        placeholder="请输入内容"
        onFocus={handleFocus}
        modelValue={input.value}
      />
    ))

    const inputElm = wrapper.find('input')
    const nativeInput = inputElm.element

    await inputElm.trigger('focus')

    expect(inputElm.exists()).toBe(true)
    expect(handleFocus).toHaveBeenCalled()
    expect(nativeInput.placeholder).toMatchInlineSnapshot(`"请输入内容"`)
    expect(nativeInput.value).toMatchInlineSnapshot(`"input"`)
    expect(nativeInput.minLength).toMatchInlineSnapshot(`3`)

    input.value = 'text'
    await nextTick()
    expect(inputElm.element.value).toMatchInlineSnapshot(`"text"`)
  })

  test('default to empty', () => {
    const wrapper = mount(() => <Input />)
    const inputElm = wrapper.find('input')
    expect(inputElm.element.value).toBe('')
  })

  test('disabled', () => {
    const wrapper = mount(() => <Input disabled />)
    const inputElm = wrapper.find('input')
    expect(inputElm.element.disabled).not.toBeNull()
  })

  test('suffixIcon', () => {
    const wrapper = mount(() => <Input suffix-icon="time" />)
    const icon = wrapper.find('.tu-input__icon')
    expect(icon.exists()).toBe(true)
  })

  test('prefixIcon', () => {
    const wrapper = mount(() => <Input prefix-icon="time" />)
    const icon = wrapper.find('.tu-input__icon')
    expect(icon.exists()).toBe(true)
  })

  test('size', () => {
    const wrapper = mount(() => <Input size="large" />)
    expect(wrapper.classes('tu-input--large')).toBe(true)
  })

  test('limit input and show word count', async () => {
    const input1 = ref('')
    const input2 = ref('')
    const input3 = ref('exceed')
    const show = ref(false)

    const wrapper = mount(() => (
      <div>
        <Input
          class="test-text"
          type="text"
          v-model={input1.value}
          maxlength={10}
          showWordLimit={show.value}
        />
        <Input
          class="test-password"
          type="password"
          v-model={input2.value}
          maxlength={10}
          showWordLimit
        />
        <Input
          class="test-initial-exceed"
          type="text"
          v-model={input3.value}
          maxlength={2}
          showWordLimit
        />
      </div>
    ))

    const inputElm1 = wrapper.vm.$el.querySelector('.test-text')
    const inputElm2 = wrapper.vm.$el.querySelector('.test-password')
    const inputElm3 = wrapper.vm.$el.querySelector('.test-initial-exceed')

    expect(inputElm1.querySelectorAll('.tu-input__count').length).toEqual(0)
    expect(inputElm2.querySelectorAll('.tu-input__count').length).toEqual(0)
    expect(Array.from(inputElm3.classList)).toMatchInlineSnapshot(`
      [
        "tu-input",
        "tu-input--medium",
        "is-exceed",
        "test-initial-exceed",
      ]
    `)

    show.value = true
    await nextTick()
    expect(inputElm1.querySelectorAll('.tu-input__count').length).toEqual(1)

    input3.value = '1'
    await nextTick()
    expect(Array.from(inputElm3.classList)).toMatchInlineSnapshot(`
      [
        "tu-input",
        "tu-input--medium",
        "test-initial-exceed",
      ]
    `)
  })

  test('use formatter and parser', () => {
    const val = ref('10000')
    const formatter = (val: string) => {
      return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    const parser = (val: string) => {
      return val.replace(/\$\s?|(,*)/g, '')
    }

    const wrapper = mount(() => (
      <Input v-model={val.value} formatter={formatter} parser={parser} />
    ))

    const vm = wrapper.vm
    const event = new Event('input', { bubbles: true })
    expect(vm.$el.querySelector('input').value).toEqual('10,000')
    expect(vm.$el.querySelector('input').value).not.toEqual('1000')
    vm.$el.querySelector('input').value = '1,000,000'
    vm.$el.querySelector('input').dispatchEvent(event)
    expect(val.value).toEqual('1000000')
  })

  describe('Input Methods', () => {
    test('method:select', async () => {
      const testContent = ref('test')
      const wrapper = mount(() => <Input v-model={testContent.value} />)

      const input = wrapper.find('input').element
      let selected = false
      defineGetter(input, 'selectionStart', function (this: HTMLInputElement) {
        return selected ? 0 : this.value.length
      })
      defineGetter(input, 'selectionEnd', function (this: HTMLInputElement) {
        return this.value.length
      })

      expect(input.selectionStart).toEqual(testContent.value.length)
      expect(input.selectionEnd).toEqual(testContent.value.length)

      input.select()
      selected = true
      await nextTick()
      expect(input.selectionStart).toEqual(0)
      expect(input.selectionEnd).toEqual(testContent.value.length)
    })
  })

  describe('Input Events', () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()

    test('event:focus & blur', async () => {
      const content = ref('')
      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          modelValue={content.value}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ))

      const input = wrapper.find('input')

      await input.trigger('focus')
      expect(handleFocus).toBeCalled()

      await input.trigger('blur')
      expect(handleBlur).toBeCalled()
    })

    test('event:change', async () => {
      const content = ref('a')
      const value = ref('')

      const handleChange = (val: string) => {
        value.value = val
      }

      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          modelValue={content.value}
          onChange={handleChange}
        />
      ))

      const el = wrapper.find('input').element
      const simulateEvent = (text: string, event: string) => {
        el.value = text
        el.dispatchEvent(new Event(event))
      }

      simulateEvent('2', 'change')
      await nextTick()
      expect(value.value).toBe('2')
      simulateEvent('1', 'input')
      await nextTick()
      expect(value.value).toBe('2')
    })

    test('event:clear', async () => {
      const handleClear = vi.fn()
      const handleInput = vi.fn()
      const content = ref('a')

      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          clearable
          v-model={content.value}
          onClear={handleClear}
          onInput={handleInput}
        />
      ))

      const input = wrapper.find('input')
      const vm = wrapper.vm
      await input.trigger('focus')
      await nextTick()
      vm.$el.querySelector('.tu-input__icon--clear').click()
      await nextTick()
      expect(content.value).toEqual('')
      expect(handleClear).toBeCalled()
      expect(handleInput).toBeCalled()
    })

    test('event:input', async () => {
      const handleInput = vi.fn()
      const content = ref('a')
      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          clearable
          modelValue={content.value}
          onInput={handleInput}
        />
      ))
      const inputWrapper = wrapper.find('input')
      const nativeInput = inputWrapper.element
      nativeInput.value = '1'
      await inputWrapper.trigger('compositionstart')
      await inputWrapper.trigger('input')
      nativeInput.value = '2'
      await inputWrapper.trigger('compositionupdate')
      await inputWrapper.trigger('input')
      await inputWrapper.trigger('compositionend')
      expect(handleInput).toBeCalledTimes(1)
      expect(content.value).toEqual('a')
      expect(nativeInput.value).toEqual('a')
    })
  })

  test('non-emit event such as keyup should work', async () => {
    const handleKeyup = vi.fn()
    const wrapper = mount(Input, {
      attrs: {
        onKeyup: handleKeyup,
      },
    })

    await wrapper.find('input').trigger('keyup')
    expect(handleKeyup).toBeCalledTimes(1)
  })

  test('input-style', async () => {
    const wrapper = mount(() => (
      <Input placeholder="请输入内容" input-style={{ color: 'red' }} />
    ))

    const input = wrapper.find('input')
    await nextTick()
    expect(input.element.style.color === 'red').toBeTruthy()
  })

  test('show-password icon', async () => {
    const password = ref('123456')
    const wrapper = mount(() => (
      <Input type="password" modelValue={password.value} show-password />
    ))

    const icon = wrapper.find('.tu-input__icon.tu-input__icon--password')
    const d = icon.find('path').element.getAttribute('d')
    await icon.trigger('click')
    const d0 = icon.find('path').element.getAttribute('d')
    expect(d !== d0).toBeTruthy()
  })

  // TODO ..
  // describe('form item accessibility integration', () => {
  //   test('automatic id attachment', async () => {
  //     const wrapper = mount(() => (
  //       <FormItem label="Foobar" data-test-ref="item">
  //         <Input data-test-ref="input" />
  //       </FormItem>
  //     ))

  //     await nextTick()
  //     const formItem = wrapper.find('[data-test-ref="item"]')
  //     const input = wrapper.find('[data-test-ref="input"]')
  //     const formItemLabel = formItem.find('.tu-form-item__label')
  //     expect(formItem.attributes().role).toBeFalsy()
  //     expect(formItemLabel.attributes().for).toBe(input.attributes().id)
  //   })

  //   test('specified id attachment', async () => {
  //     const wrapper = mount(() => (
  //       <FormItem label="Foobar" data-test-ref="item">
  //         <Input id="foobar" data-test-ref="input" />
  //       </FormItem>
  //     ))

  //     await nextTick()
  //     const formItem = wrapper.find('[data-test-ref="item"]')
  //     const input = wrapper.find('[data-test-ref="input"]')
  //     const formItemLabel = formItem.find('.el-form-item__label')
  //     expect(formItem.attributes().role).toBeFalsy()
  //     expect(input.attributes().id).toBe('foobar')
  //     expect(formItemLabel.attributes().for).toBe(input.attributes().id)
  //   })

  //   test('form item role is group when multiple inputs', async () => {
  //     const wrapper = mount(() => (
  //       <FormItem label="Foobar" data-test-ref="item">
  //         <Input data-test-ref="input1" />
  //         <Input data-test-ref="input2" />
  //       </FormItem>
  //     ))

  //     await nextTick()
  //     const formItem = wrapper.find('[data-test-ref="item"]')
  //     expect(formItem.attributes().role).toBe('group')
  //   })
  // })
})
