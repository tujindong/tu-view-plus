import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
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

    console.log('+++', nativeInput)

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
})
