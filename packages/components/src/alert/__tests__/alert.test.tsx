import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { TypeComponentsMap } from '@tu-view-plus/utils'
import Alert from '../src/alert.vue'

const AXIOM = 'Tu view is good'

describe('Alert', () => {
  test('render test & class', () => {
    const wrapper = mount(() => <Alert title={AXIOM} showIcon={true} />)
    expect(wrapper.find('.tu-alert__title').text()).toEqual(AXIOM)
    expect(wrapper.find('.tu-alert').classes()).toContain('is-up')
  })

  test('type', () => {
    const wrapper = mount(() => (
      <Alert title={'test'} showIcon={true} type={'success'} />
    ))
    expect(wrapper.find('.tu-alert').classes()).toContain('tu-alert--success')
    expect(wrapper.findComponent(TypeComponentsMap.success).exists()).toBe(true)
  })

  test('description', () => {
    const wrapper = mount(() => (
      <Alert title={'Dorne'} showIcon={true} description={AXIOM} />
    ))
    expect(wrapper.find('.tu-alert__description').text()).toEqual(AXIOM)
  })

  test('theme', () => {
    const wrapper = mount(() => <Alert title={'test'} effect={'dark'} />)
    expect(wrapper.find('.tu-alert').classes()).toContain('is-dark')
  })

  test('title slot', () => {
    const wrapper = mount(() => <Alert title={AXIOM} />)
    expect(wrapper.find('.tu-alert__title').text()).toEqual(AXIOM)
  })

  test('close', async () => {
    const wrapper = mount(() => <Alert closeText={'close'} />)
    const closeBtn = wrapper.find('.tu-alert__icon-close')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
