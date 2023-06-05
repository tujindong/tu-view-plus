import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Row from '../src/row.vue'

describe('Row', () => {
  test('create', () => {
    const wrapper = mount(() => <Row />)
    expect(wrapper.classes()).toContain('tu-row')
  })

  test('gutter', () => {
    const wrapper = mount(() => <Row gutter={20} />)
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })

  test('justify', () => {
    const wrapper = mount(() => <Row justify='end' />)
    expect(wrapper.classes()).toContain('is-justify-end')
  })

  test('align', () => {
    const wrapper = mount(() => <Row align="bottom" />)
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})
