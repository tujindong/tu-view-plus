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

  test('check', () => {
    const checked = ref(false)
    const checklist = ref([])
    mount(() => (
      <div>
        <Checkbox v-model={checked.value} checked />
        <CheckboxGroup v-model={checklist.value}>
          <Checkbox checked label="a" />
        </CheckboxGroup>
      </div>
    ))

    expect(checked.value).toBe(true)
    expect(checklist.value).toEqual(['a'])
  })

  test('label', async () => {
    const checklist = ref([])
    const wrapper = mount(() => (
      <CheckboxGroup v-model={checklist.value}>
        <Checkbox label="">all</Checkbox>
        <Checkbox label="a">a</Checkbox>
        <Checkbox label="b">b</Checkbox>
      </CheckboxGroup>
    ))

    const checkbox = wrapper.find('.tu-checkbox')
    await checkbox.trigger('click')
    expect(checklist.value[0]).toEqual('')
  })

  test('label is object', async () => {
    const checklist = ref([])
    const wrapper = mount(() => (
      <CheckboxGroup v-model={checklist.value}>
        <Checkbox label={{ a: 1 }}>all</Checkbox>
        <Checkbox label={{ a: 2 }}>a</Checkbox>
        <Checkbox label={{ b: 1 }}>b</Checkbox>
      </CheckboxGroup>
    ))

    const checkbox = wrapper.find('.tu-checkbox')
    await checkbox.trigger('click')
    expect(checklist.value[0]).toEqual({ a: 1 })
    expect(checkbox.classes()).contains('is-checked')
  })

  test('label is object with initial values', async () => {
    const checklist = ref([{ a: 1 }])
    const wrapper = mount({
      setup() {
        return () => (
          <CheckboxGroup v-model={checklist.value}>
            <Checkbox label={{ a: 1 }} ref="a1">
              a1
            </Checkbox>
            <Checkbox label={{ a: 2 }} ref="a2">
              a2
            </Checkbox>
            <Checkbox label={{ b: 1 }} ref="b1">
              b1
            </Checkbox>
          </CheckboxGroup>
        )
      },
    })
    expect(checklist.value.length).toBe(1)
    const checkboxA1 = wrapper.findComponent({ ref: 'a1' })
    const checkboxA2 = wrapper.findComponent({ ref: 'a2' })
    await checkboxA2.trigger('click')
    expect(checklist.value).toEqual([{ a: 1 }, { a: 2 }])
    expect(checkboxA1.classes()).contains('is-checked')
    expect(checkboxA2.classes()).contains('is-checked')
    await checkboxA1.trigger('click')
    expect(checklist.value).toEqual([{ a: 2 }])
    expect(checkboxA1.classes()).not.contains('is-checked')
  })

  test('checkbox border', () => {
    const checkbox = ref([])
    const wrapper = mount(() => (
      <CheckboxGroup v-model={checkbox.value} type="border">
        <Checkbox label={'a'}>a</Checkbox>
        <Checkbox label={'b'}>b</Checkbox>
        <Checkbox label={'c'}>c</Checkbox>
      </CheckboxGroup>
    ))
    expect(wrapper.classes()).toContain('tu-checkbox-group--border')
  })

  test('checkbox button', () => {
    const checkbox = ref([])
    const wrapper = mount(() => (
      <CheckboxGroup v-model={checkbox.value} type="button">
        <Checkbox label={'a'}>a</Checkbox>
        <Checkbox label={'b'}>b</Checkbox>
        <Checkbox label={'c'}>c</Checkbox>
      </CheckboxGroup>
    ))
    expect(wrapper.classes()).toContain('tu-checkbox-group--button')
  })

  test('checkbox size', () => {
    const checkbox = ref([])
    const wrapper = mount(() => (
      <CheckboxGroup v-model={checkbox.value} size="large">
        <Checkbox label={'a'} ref="radio1">a</Checkbox>
        <Checkbox label={'b'} ref="radio2">b</Checkbox>
        <Checkbox label={'c'}>c</Checkbox>
      </CheckboxGroup>
    ))
    expect(wrapper.findAll('.tu-checkbox--large').length).toBe(3)
  })
})
