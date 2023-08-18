import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tag from '../src/tag.vue'

const AXIOM = 'Tu view is good'

describe('Tag.vue', () => {
  test('render text & class', () => {
    const wrapper = mount(() => (
      <Tag
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.text()).toEqual(AXIOM)

    const vm = wrapper.vm

    expect(vm.$el.classList.contains('tu-tag')).toEqual(true)
    expect(vm.$el.classList.contains('tu-tag__close')).toEqual(false)
    expect(vm.$el.classList.contains('is-hit')).toEqual(false)
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('hit', () => {
    const wrapper = mount(() => <Tag hit={true} />)
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('is-hit')).toEqual(true)
  })

  test('closable', async () => {
    const wrapper = mount(() => <Tag closable={true} />)
    const comp = wrapper.getComponent(Tag)
    const closeBtn = comp.find('.tu-tag .tu-tag__close')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(comp.emitted().close).toBeTruthy()
  })

  test('closeTransition', () => {
    const wrapper = mount(() => <Tag closeTransition={true} />)
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('color', () => {
    const wrapper = mount(() => <Tag color="rgb(0, 0, 0)" />)
    const vm = wrapper.vm
    expect(vm.$el.style.color).toEqual('rgb(0, 0, 0)')
  })

  test('effect', () => {
    const wrapper = mount(() => <Tag effect="dark" />)
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.includes('tu-tag--dark')).toEqual(true)
    expect(el.className.includes('tu-tag--light')).toEqual(false)
    expect(el.className.includes('tu-tag--plain')).toEqual(false)
  })

  test('size', () => {
    const wrapper = mount(() => <Tag size="large" />)
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.includes('tu-tag--large')).toEqual(true)
    expect(el.className.includes('tu-tag--medium')).toEqual(false)
    expect(el.className.includes('tu-tag--small')).toEqual(false)
  })
})
