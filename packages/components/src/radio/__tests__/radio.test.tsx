import { ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Radio from '../src/radio.vue'
import RadioGroup from '../src/radio-group.vue'

import type { RadioProps } from '../src/radio'

describe('Radio', () => {
  test('create', async () => {
    const radio = ref('')
    const wrapper = mount(() => (
      <Radio v-model={radio.value} label="a" />
    ))
    expect(wrapper.classes()).toContain('tu-radio')
    await wrapper.find('input').trigger('change')
    expect(wrapper.classes()).toContain('is-checked')
  })

  test('disabled', async () => {
    const radio = ref('')
    const wrapper = mount(() => (
      <Radio v-model={radio.value} label="a" disabled />
    ))
    await wrapper.find('input').trigger('change')
    expect(radio.value).toBe('')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('border', () => {
    const radio = ref('')
    const wrapper = mount(() => (
      <Radio v-model={radio.value} label="a" border />
    ))
    expect(wrapper.classes()).toContain('is-bordered')
  })

  test('change event', async () => {
    const radio = ref('')
    const changeData = ref<RadioProps['modelValue']>('')
    function handleChange(val: RadioProps['modelValue']) {
      changeData.value = val
    }
    const wrapper = mount(() => (
      <Radio v-model={radio.value} label="a" onChange={handleChange} />
    ))
    await wrapper.find('input').trigger('change')
    await nextTick()
    expect(changeData.value).toEqual('a')
  })

  test('change event only triggers on user input', async () => {
    const radio = ref('')
    const changeData = ref<RadioProps['modelValue']>('')
    function handleChange(val: RadioProps['modelValue']) {
      changeData.value = val
    }
    mount(() => (
      <Radio v-model={radio.value} label="a" onChange={handleChange} />
    ))
    radio.value = 'a'
    await nextTick()
    expect(changeData.value).toEqual('')
    expect(radio.value).toEqual('a')
  })
})

describe('Radio group', () => {
  test('create', async () => {
    const radio = ref('a')
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value}>
        <Radio label={'a'} ref="radio1">a</Radio>
        <Radio label={'b'} ref="radio2">b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    await nextTick()
    const [radio1, radio2] = wrapper.findAll('.tu-radio')
    expect(radio1.classes()).toContain('is-checked')
    await radio2.find('input').trigger('change')
    expect(radio2.classes()).toContain('is-checked')
    expect(radio.value).toEqual('b')
  })

  test('id auto derive', async () => {
    const radio1 = ref('a')
    const wrapper1 = mount(() => (
      <RadioGroup v-model={radio1.value}>
        <Radio label={3} ref="radio1">3</Radio>
        <Radio label={6} ref="radio2">6</Radio>
        <Radio label={9}>9</Radio>
      </RadioGroup>
    ))
    const id1 = wrapper1.find('.tu-radio').find('input').attributes('name')

    const radio2 = ref('b')
    const wrapper2 = mount(() => (
      <RadioGroup v-model={radio2.value}>
        <Radio label={3} ref="radio1">3</Radio>
        <Radio label={6} ref="radio2">6</Radio>
        <Radio label={9}>9</Radio>
      </RadioGroup>
    ))
    const id2 = wrapper2.find('.tu-radio').find('input').attributes('name')
    expect(id1).not.toEqual(id2)
  })

  test('disabled', async () => {
    const radio = ref('a')
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} disabled>
        <Radio label={'a'} ref="radio1">a</Radio>
        <Radio label={'b'} ref="radio2">b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    expect(wrapper.find('label.is-disabled').exists()).toBe(true)
  })

  test('change event', async () => {
    const radio = ref('a')
    const data = ref<RadioProps['modelValue']>(0)
    function onChange(val: RadioProps['modelValue']) {
      data.value = val
    }
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} onChange={onChange}>
        <Radio label={'a'}>a</Radio>
        <Radio label={'b'} ref="radio2">b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    const radio2 = wrapper.findAll('.tu-radio').at(1)
    await radio2?.find('input').trigger('change')
    await nextTick()
    expect(data.value).toEqual('b')
  })

  test('change event only triggers on user input', async () => {
    const radio = ref('a')
    const data = ref<RadioProps['modelValue']>(0)
    function onChange(val: RadioProps['modelValue']) {
      data.value = val
    }
    mount(() => (
      <RadioGroup v-model={radio.value} onChange={onChange}>
        <Radio label={'a'}>a</Radio>
        <Radio label={'b'} ref="radio2">b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    radio.value = 'a'
    await nextTick()
    expect(data.value).toEqual(0)
  })

  test('radio border', () => {
    const radio = ref('a')
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} type="border">
        <Radio label={'a'}>a</Radio>
        <Radio label={'b'}>b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    expect(wrapper.classes()).toContain('tu-radio-group--border')
  })

  test('radio button', () => {
    const radio = ref('a')
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} type="button">
        <Radio label={'a'}>a</Radio>
        <Radio label={'b'}>b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    expect(wrapper.classes()).toContain('tu-radio-group--button')
  })

  test('disabled when type is radio button', async () => {
    const radio = ref('a')
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} disabled type="button">
        <Radio label={'a'} ref="radio1">a</Radio>
        <Radio label={'b'} ref="radio2">b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    const [radio1, radio2] = wrapper.findAll('.tu-radio--button')
    expect(radio1.classes()).toContain('is-checked')
    expect(wrapper.findAll('.is-disabled').length).toBe(3)
    await radio2.find('input').trigger('change')
    expect(radio.value).toEqual('a')
    expect(radio1.classes()).toContain('is-checked')
  })

  test('size', () => {
    const radio = ref('a')
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} size="large">
        <Radio label={'a'} ref="radio1">a</Radio>
        <Radio label={'b'} ref="radio2">b</Radio>
        <Radio label={'c'}>c</Radio>
      </RadioGroup>
    ))
    expect(wrapper.findAll('.tu-radio--large').length).toBe(3)
  })
})

// TODO ..
describe('Form item accessibility integration', () => {
  test('single radio group in form item', async () => { })
})

