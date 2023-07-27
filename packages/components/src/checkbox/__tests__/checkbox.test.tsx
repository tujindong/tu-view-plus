import { ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Checkbox from '../src/checkbox.vue'
import CheckboxGroup from '../src/checkbox-group.vue'

import type { CheckboxValueType } from '../'

describe('Checkbox', () => {
  test('create', async () => {
    const checked = ref(false)
    const wrapper = mount(() => <Checkbox v-model={checked.value} label="a" />)

    expect(wrapper.classes()).toContain('tu-checkbox')
    expect(wrapper.classes()).not.toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('checkbox without label', async () => {
    const checked = ref(false)
    const wrapper = mount(() => <Checkbox checked={checked.value} />)

    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('checkbox with label', async () => {
    const checked = ref(false)
    const wrapper = mount(() => <Checkbox checked={checked.value} label="a" />)

    expect(wrapper.classes('is-checked')).toBe(false)
  })

  describe('disabled', () => {
    test('checkbox without label', async () => {
      const checked = ref(false)
      const wrapper = mount(() => <Checkbox checked={checked.value} disabled />)

      expect(wrapper.classes()).toContain('is-disabled')
      expect(checked.value).toBe(false)

      await wrapper.trigger('click')
      await nextTick()

      expect(wrapper.classes()).toContain('is-disabled')
      expect(checked.value).toBe(false)
    })

    test('checkbox with label', async () => {
      const checked = ref(false)
      const wrapper = mount(() => <Checkbox checked={checked.value} label="a" disabled />)

      expect(wrapper.classes()).toContain('is-disabled')
      expect(checked.value).toBe(false)

      await wrapper.trigger('click')
      await nextTick()

      expect(wrapper.classes()).toContain('is-disabled')
      expect(checked.value).toBe(false)
    })
  })

  describe('event', () => {
    test('checkbox without label', async () => {
      const checked = ref(false)
      const data = ref()
      const onChange = (val: CheckboxValueType) => (data.value = val)
      const wrapper = mount(() => <Checkbox checked={checked.value} onChange={onChange} />)

      await wrapper.trigger('click')
      expect(data.value).toBe(true)
    })

    test('checkbox with label', async () => {
      const checked = ref(false)
      const data = ref()
      const onChange = (val: CheckboxValueType) => (data.value = val)
      const wrapper = mount(() => <Checkbox checked={checked.value} onChange={onChange} label="a" />)

      await wrapper.trigger('click')
      expect(data.value).toBe(true)
    })

    test('checkbox with label as slot content', async () => {
      const checked = ref(false)
      const data = ref()
      const onChange = (val: CheckboxValueType) => (data.value = val)
      const wrapper = mount(() => <Checkbox checked={checked.value} onChange={onChange} />)

      await wrapper.trigger('click')
      expect(data.value).toBe(true)
    })
  })

  test('checkbox group', async () => {
    const checkList = ref([])
    const wrapper = mount({
      setup() {
        return () => (
          <CheckboxGroup v-model={checkList.value}>
            <Checkbox label="a" ref="a" />
            <Checkbox label="b" ref="b" />
            <Checkbox label="c" ref="c" />
            <Checkbox label="d" ref="d" />
          </CheckboxGroup>
        )
      },
    })

    expect(checkList.value.length).toBe(0)

    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(checkList.value.length).toBe(1)
    expect(checkList.value).toContain('a')

    await wrapper.findComponent({ ref: 'b' }).trigger('click')
    expect(checkList.value.length).toBe(2)
    expect(checkList.value).toContain('a')
    expect(checkList.value).toContain('b')
  })

  test('checkbox group without modelValue', async () => {
    const checkList = ref([])
    const wrapper = mount({
      setup() {
        return () => (
          <CheckboxGroup v-model={checkList.value}>
            <Checkbox label="a" ref="a" />
            <Checkbox label="b" ref="b" />
            <Checkbox label="c" ref="c" />
            <Checkbox label="d" ref="d" />
          </CheckboxGroup>
        )
      },
    })

    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(checkList.value.length).toBe(1)
    expect(checkList.value).toContain('a')
  })

  test('checkbox group change', async () => {
    const checkList = ref([])
    const data = ref<CheckboxValueType[]>([])
    const onChange = (val: CheckboxValueType[]) => (data.value = val)
    const wrapper = mount({
      setup() {
        return () => (
          <CheckboxGroup v-model={checkList.value} onChange={onChange}>
            <Checkbox label="a" ref="a" />
            <Checkbox label="b" ref="b" />
          </CheckboxGroup>
        )
      },
    })

    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    await nextTick()
    expect(data.value.length).toBe(1)
    expect(data.value).toEqual(['a'])
  })

  test('nested group', async () => {
    const checkList = ref([])
    const wrapper = mount({
      setup() {
        return () => (
          <CheckboxGroup v-model={checkList.value}>
            <Checkbox label="a" ref="a" />
            <Checkbox label="b" ref="b" />
            <Checkbox label="c" ref="c" />
            <Checkbox label="d" ref="d" />
          </CheckboxGroup>
        )
      },
    })

    expect(checkList.value.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(checkList.value).toEqual(['a'])
  })

  describe('true false label', () => {
    test('without label', async () => {
      const checked = ref('a')
      const wrapper = mount(() => <Checkbox true-label="a" false-label={3} v-model={checked.value} />)

      await wrapper.trigger('click')
      await nextTick()
      expect(checked.value).toBe(3)

      await wrapper.trigger('click')
      await nextTick()
      expect(checked.value).toBe('a')
    })
  })
})
